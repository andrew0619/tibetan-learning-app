const sections = window.PUXIAN_SECTIONS || [];
const verses = window.PUXIAN_VERSES || [];

const STORAGE_KEY = 'puxian-learning-v1';
const JOURNAL_KEY = 'puxian-journal-v1';
const state = loadState();
let currentFilter = 'all';
let searchTerm = '';
let timerSeconds = 300;
let timerHandle = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      completed: new Set(saved.completed || []),
      favorites: new Set(saved.favorites || []),
      notes: saved.notes || {},
      theme: saved.theme || 'light',
      largeFont: Boolean(saved.largeFont),
    };
  } catch {
    return { completed: new Set(), favorites: new Set(), notes: {}, theme: 'light', largeFont: false };
  }
}

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      completed: [...state.completed],
      favorites: [...state.favorites],
      notes: state.notes,
      theme: state.theme,
      largeFont: state.largeFont,
    }));
    return true;
  } catch {
    return false;
  }
}

function dailyVerse() {
  const now = new Date();
  const key = Number(`${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`);
  return verses[key % verses.length];
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.handle);
  showToast.handle = setTimeout(() => toast.classList.remove('show'), 1800);
}

function renderSections() {
  const nav = $('#section-nav');
  nav.innerHTML = '';
  sections.forEach(section => {
    const button = document.createElement('button');
    button.className = 'section-link';
    button.dataset.section = section.name;
    button.innerHTML = `<span class="section-index">${String(section.id).padStart(2,'0')}</span><span>${section.name}<small>${section.description}</small></span><span class="section-count">${section.start}–${section.end}</span>`;
    button.addEventListener('click', () => {
      switchView('learn');
      currentFilter = 'all';
      searchTerm = '';
      $('#search-input').value = '';
      $$('.filter-chip').forEach(x => x.classList.toggle('is-active', x.dataset.filter === 'all'));
      renderLessons(section.name);
      setTimeout(() => document.querySelector(`[data-verse-id="${section.start}"]`)?.scrollIntoView({behavior:'smooth'}), 60);
    });
    nav.appendChild(button);
  });
}

function createLessonCard(verse) {
  const node = $('#lesson-template').content.firstElementChild.cloneNode(true);
  node.dataset.verseId = verse.id;
  node.id = `verse-${verse.id}`;
  $('.lesson-number', node).textContent = `第 ${verse.id} 偈`;
  $('.lesson-section', node).textContent = verse.section;
  $('.lesson-title', node).textContent = verse.title;
  $('.verse-block', node).innerHTML = verse.lines.map(line => `<span>${line}</span>`).join('');
  $('.lesson-summary', node).textContent = verse.summary;
  const lineList = $('.line-analysis', node);
  verse.lines.forEach((line, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${line}</strong><p>${verse.lineNotes[index]}</p>`;
    lineList.appendChild(li);
  });
  $('.practice-copy', node).textContent = verse.practice;
  $('.reflection-copy', node).textContent = verse.reflection;
  $('.caution-copy', node).textContent = verse.caution;

  const favorite = $('.favorite-button', node);
  favorite.classList.toggle('is-favorite', state.favorites.has(verse.id));
  favorite.textContent = state.favorites.has(verse.id) ? '★' : '☆';
  favorite.addEventListener('click', () => {
    if (state.favorites.has(verse.id)) state.favorites.delete(verse.id); else state.favorites.add(verse.id);
    persistState();
    renderLessons();
    showToast(state.favorites.has(verse.id) ? '已加入收藏' : '已取消收藏');
  });

  $('.copy-button', node).addEventListener('click', async () => {
    const text = `第 ${verse.id} 偈｜${verse.title}\n${verse.lines.join('，')}。`;
    try { await navigator.clipboard.writeText(text); showToast('偈頌已複製'); }
    catch { showToast('瀏覽器未允許複製'); }
  });

  const note = $('.note-field textarea', node);
  note.value = state.notes[verse.id] || '';
  let noteTimer;
  note.addEventListener('input', () => {
    clearTimeout(noteTimer);
    const status = $('.note-status', node);
    status.textContent = '輸入中…';
    noteTimer = setTimeout(() => {
      state.notes[verse.id] = note.value;
      persistState();
      status.textContent = '已儲存';
      setTimeout(() => status.textContent = '', 1200);
    }, 350);
  });

  const complete = $('.complete-button', node);
  updateCompleteButton(node, complete, verse.id);
  complete.addEventListener('click', () => {
    if (state.completed.has(verse.id)) state.completed.delete(verse.id); else state.completed.add(verse.id);
    persistState();
    updateCompleteButton(node, complete, verse.id);
    updateProgress();
    if (currentFilter === 'unread') renderLessons();
  });
  return node;
}

function updateCompleteButton(card, button, id) {
  const done = state.completed.has(id);
  card.classList.toggle('is-complete', done);
  button.classList.toggle('is-complete', done);
  button.textContent = done ? '✓ 已完成' : '標記完成';
}

function filteredVerses(sectionName = null) {
  return verses.filter(v => {
    if (sectionName && v.section !== sectionName) return false;
    if (currentFilter === 'unread' && state.completed.has(v.id)) return false;
    if (currentFilter === 'favorite' && !state.favorites.has(v.id)) return false;
    if (!searchTerm) return true;
    const haystack = [v.title, v.section, v.summary, v.practice, v.reflection, v.caution, ...v.lines, ...v.lineNotes].join(' ').toLowerCase();
    return haystack.includes(searchTerm.toLowerCase());
  });
}

function renderLessons(sectionName = null) {
  const list = $('#lesson-list');
  const items = filteredVerses(sectionName);
  list.innerHTML = '';
  const fragment = document.createDocumentFragment();
  items.forEach(v => fragment.appendChild(createLessonCard(v)));
  list.appendChild(fragment);
  $('#result-count').textContent = `${items.length} 偈`;
  $('#empty-state').hidden = items.length !== 0;
}

function updateProgress() {
  const count = state.completed.size;
  const percent = Math.round((count / verses.length) * 100);
  $('#progress-percent').textContent = `${percent}%`;
  $('#progress-copy').textContent = `${count} / ${verses.length} 偈`;
  $('#progress-ring').style.setProperty('--progress', `${percent * 3.6}deg`);
}

function renderFullText() {
  const root = $('#full-text');
  root.innerHTML = '';
  sections.forEach(section => {
    const wrapper = document.createElement('section');
    wrapper.className = 'text-section';
    wrapper.innerHTML = `<h2>${section.name}・第 ${section.start}–${section.end} 偈</h2>`;
    verses.filter(v => v.section === section.name).forEach(v => {
      const p = document.createElement('p');
      p.dataset.number = String(v.id).padStart(2,'0');
      p.innerHTML = v.lines.join('，') + '。';
      wrapper.appendChild(p);
    });
    root.appendChild(wrapper);
  });
}

function renderDailyPractice() {
  const verse = dailyVerse();
  $('#daily-verse-number').textContent = String(verse.id).padStart(2,'0');
  $('#daily-card').innerHTML = `
    <span class="eyebrow">第 ${verse.id} 偈・${verse.section}</span>
    <h2>${verse.title}</h2>
    <blockquote class="daily-lines">${verse.lines.map(x => `<span>${x}</span>`).join('')}</blockquote>
    <p>${verse.summary}</p>
    <div class="daily-practice-box"><strong>今日只做這一件</strong><p>${verse.practice}</p></div>
    <p><strong>晚間反思：</strong>${verse.reflection}</p>
    <button class="secondary-button" id="daily-detail">打開完整拆解</button>`;
  $('#daily-detail').addEventListener('click', () => jumpToVerse(verse.id));
}

function switchView(view) {
  $$('.nav-tab').forEach(tab => tab.classList.toggle('is-active', tab.dataset.view === view));
  $$('.view').forEach(section => section.classList.toggle('is-active', section.id === `${view}-view`));
  history.replaceState(null, '', `#${view}`);
  window.scrollTo({top:0, behavior:'smooth'});
}

function jumpToVerse(id) {
  switchView('learn');
  currentFilter = 'all';
  searchTerm = '';
  $('#search-input').value = '';
  $$('.filter-chip').forEach(x => x.classList.toggle('is-active', x.dataset.filter === 'all'));
  renderLessons();
  requestAnimationFrame(() => document.querySelector(`[data-verse-id="${id}"]`)?.scrollIntoView({behavior:'smooth', block:'start'}));
}

function initJournal() {
  const dateKey = new Date().toISOString().slice(0,10);
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(JOURNAL_KEY) || '{}'); } catch {}
  $$('[data-journal]').forEach(field => field.value = saved[dateKey]?.[field.dataset.journal] || '');
  $('#save-journal').addEventListener('click', () => {
    saved[dateKey] = Object.fromEntries($$('[data-journal]').map(field => [field.dataset.journal, field.value]));
    try {
      localStorage.setItem(JOURNAL_KEY, JSON.stringify(saved));
      $('#journal-status').textContent = '今日回顧已儲存';
    } catch {
      $('#journal-status').textContent = '此瀏覽器未允許本機儲存';
    }
    setTimeout(() => $('#journal-status').textContent = '', 1600);
  });
}

function updateTimer() {
  const minutes = String(Math.floor(timerSeconds / 60)).padStart(2,'0');
  const seconds = String(timerSeconds % 60).padStart(2,'0');
  $('#timer-display').textContent = `${minutes}:${seconds}`;
}

function initTimer() {
  $('#timer-start').addEventListener('click', () => {
    if (timerHandle) {
      clearInterval(timerHandle); timerHandle = null; $('#timer-start').textContent = '繼續'; return;
    }
    $('#timer-start').textContent = '暫停';
    timerHandle = setInterval(() => {
      timerSeconds -= 1; updateTimer();
      if (timerSeconds <= 0) {
        clearInterval(timerHandle); timerHandle = null;
        $('#timer-start').textContent = '完成';
        $('#timer-guidance').textContent = '安住完成。現在把偈頌化成一個今日可行的動作。';
        showToast('五分鐘練習完成');
      }
    }, 1000);
  });
  $('#timer-reset').addEventListener('click', () => {
    clearInterval(timerHandle); timerHandle = null; timerSeconds = 300; updateTimer();
    $('#timer-start').textContent = '開始';
    $('#timer-guidance').textContent = '先讀偈頌三遍，讓呼吸自然，觀察這一偈正在對治什麼。';
  });
}

function initControls() {
  $$('.nav-tab').forEach(tab => tab.addEventListener('click', () => switchView(tab.dataset.view)));
  $$('.filter-chip').forEach(chip => chip.addEventListener('click', () => {
    currentFilter = chip.dataset.filter;
    $$('.filter-chip').forEach(x => x.classList.toggle('is-active', x === chip));
    renderLessons();
  }));
  $('#search-input').addEventListener('input', event => { searchTerm = event.target.value.trim(); renderLessons(); });
  $('#jump-daily').addEventListener('click', () => jumpToVerse(dailyVerse().id));
  $('#focus-mode').addEventListener('change', event => $('#full-text').classList.toggle('focus', event.target.checked));
  $('#theme-toggle').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyPreferences(); persistState();
  });
  $('#font-toggle').addEventListener('click', () => {
    state.largeFont = !state.largeFont; applyPreferences(); persistState();
  });
  $('#collapse-all').addEventListener('click', () => {
    const details = $$('.analysis-panel');
    const shouldOpen = details.every(x => !x.open);
    details.forEach(x => x.open = shouldOpen);
    $('#collapse-all').textContent = shouldOpen ? '收合' : '展開';
  });
}

function applyPreferences() {
  document.documentElement.dataset.theme = state.theme;
  document.body.classList.toggle('font-large', state.largeFont);
}

function initHash() {
  const target = location.hash.replace('#','');
  if (['learn','text','practice','about'].includes(target)) switchView(target);
}

function init() {
  applyPreferences();
  renderSections();
  renderLessons();
  renderFullText();
  renderDailyPractice();
  updateProgress();
  initControls();
  initTimer();
  initJournal();
  initHash();
}

init();
