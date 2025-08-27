export interface CompleteTibetanCard {
  id: string
  tibetan: string
  roman: string // 羅馬對音
  khamPronunciation?: string // 康巴音發音
  category: 'root' | 'vowel' | 'suffix' | 'second-suffix' | 'prefix' | 'superscript' | 'subjoined' | 'word' | 'grammar'
  stage: 'learning' | 'recall' | 'mastered'
  difficulty: 1 | 2 | 3 | 4 | 5
  order: number
  notes?: string // 讀音規則、清濁變化等
  examples?: string[] // 搭配示例
  audioUrl?: string
  group?: string // 字母分組
}

// ===== 三十字母（按發音部位分組）=====
export const thirtyLetters: CompleteTibetanCard[] = [
  // 第1組：舌根音 (ka kha ga nga)
  { id: 'ka', tibetan: 'ཀ', roman: 'ka', khamPronunciation: 'ka', category: 'root', stage: 'learning', difficulty: 1, order: 1, group: '舌根音', notes: '清音，舌根音' },
  { id: 'kha', tibetan: 'ཁ', roman: 'kha', khamPronunciation: 'kha', category: 'root', stage: 'learning', difficulty: 1, order: 2, group: '舌根音', notes: '送氣音，舌根音' },
  { id: 'ga', tibetan: 'ག', roman: 'ga', khamPronunciation: 'ga', category: 'root', stage: 'learning', difficulty: 1, order: 3, group: '舌根音', notes: '濁音，舌根音' },
  { id: 'nga', tibetan: 'ང', roman: 'nga', khamPronunciation: 'nga', category: 'root', stage: 'learning', difficulty: 1, order: 4, group: '舌根音', notes: '鼻音，舌根音' },

  // 第2組：舌面音 (ca cha ja nya)
  { id: 'ca', tibetan: 'ཅ', roman: 'ca', khamPronunciation: 'ca', category: 'root', stage: 'learning', difficulty: 1, order: 5, group: '舌面音', notes: '清音，舌面音' },
  { id: 'cha', tibetan: 'ཆ', roman: 'cha', khamPronunciation: 'cha', category: 'root', stage: 'learning', difficulty: 1, order: 6, group: '舌面音', notes: '送氣音，舌面音' },
  { id: 'ja', tibetan: 'ཇ', roman: 'ja', khamPronunciation: 'ja', category: 'root', stage: 'learning', difficulty: 1, order: 7, group: '舌面音', notes: '濁音，舌面音' },
  { id: 'nya', tibetan: 'ཉ', roman: 'nya', khamPronunciation: 'nya', category: 'root', stage: 'learning', difficulty: 1, order: 8, group: '舌面音', notes: '鼻音，舌面音' },

  // 第3組：舌尖音 (ta tha da na)
  { id: 'ta', tibetan: 'ཏ', roman: 'ta', khamPronunciation: 'ta', category: 'root', stage: 'learning', difficulty: 1, order: 9, group: '舌尖音', notes: '清音，舌尖音' },
  { id: 'tha', tibetan: 'ཐ', roman: 'tha', khamPronunciation: 'tha', category: 'root', stage: 'learning', difficulty: 1, order: 10, group: '舌尖音', notes: '送氣音，舌尖音' },
  { id: 'da', tibetan: 'ད', roman: 'da', khamPronunciation: 'da', category: 'root', stage: 'learning', difficulty: 1, order: 11, group: '舌尖音', notes: '濁音，舌尖音' },
  { id: 'na', tibetan: 'ན', roman: 'na', khamPronunciation: 'na', category: 'root', stage: 'learning', difficulty: 1, order: 12, group: '舌尖音', notes: '鼻音，舌尖音' },

  // 第4組：雙唇音 (pa pha ba ma)
  { id: 'pa', tibetan: 'པ', roman: 'pa', khamPronunciation: 'pa', category: 'root', stage: 'learning', difficulty: 1, order: 13, group: '雙唇音', notes: '清音，雙唇音' },
  { id: 'pha', tibetan: 'ཕ', roman: 'pha', khamPronunciation: 'pha', category: 'root', stage: 'learning', difficulty: 1, order: 14, group: '雙唇音', notes: '送氣音，雙唇音' },
  { id: 'ba', tibetan: 'བ', roman: 'ba', khamPronunciation: 'ba', category: 'root', stage: 'learning', difficulty: 1, order: 15, group: '雙唇音', notes: '濁音，雙唇音（末音節常讀wa）' },
  { id: 'ma', tibetan: 'མ', roman: 'ma', khamPronunciation: 'ma', category: 'root', stage: 'learning', difficulty: 1, order: 16, group: '雙唇音', notes: '鼻音，雙唇音' },

  // 第5組：齒齦音 (tsa tsha dza wa)
  { id: 'tsa', tibetan: 'ཙ', roman: 'tsa', khamPronunciation: 'tsa', category: 'root', stage: 'learning', difficulty: 1, order: 17, group: '齒齦音', notes: '清音，齒齦音' },
  { id: 'tsha', tibetan: 'ཚ', roman: 'tsha', khamPronunciation: 'tsha', category: 'root', stage: 'learning', difficulty: 1, order: 18, group: '齒齦音', notes: '送氣音，齒齦音' },
  { id: 'dza', tibetan: 'ཛ', roman: 'dza', khamPronunciation: 'dza', category: 'root', stage: 'learning', difficulty: 1, order: 19, group: '齒齦音', notes: '濁音，齒齦音' },
  { id: 'wa', tibetan: 'ཝ', roman: 'wa', khamPronunciation: 'wa', category: 'root', stage: 'learning', difficulty: 1, order: 20, group: '半元音', notes: '半元音' },

  // 第6組：半元音 (zha za 'a ya)
  { id: 'zha', tibetan: 'ཞ', roman: 'zha', khamPronunciation: 'zha', category: 'root', stage: 'learning', difficulty: 1, order: 21, group: '半元音', notes: '半元音' },
  { id: 'za', tibetan: 'ཟ', roman: 'za', khamPronunciation: 'za', category: 'root', stage: 'learning', difficulty: 1, order: 22, group: '半元音', notes: '半元音' },
  { id: 'aa', tibetan: 'འ', roman: "'a", khamPronunciation: 'a', category: 'root', stage: 'learning', difficulty: 1, order: 23, group: '半元音', notes: '元音，喉音' },
  { id: 'ya', tibetan: 'ཡ', roman: 'ya', khamPronunciation: 'ya', category: 'root', stage: 'learning', difficulty: 1, order: 24, group: '半元音', notes: '半元音' },

  // 第7組：齒音 (ra la sha sa)
  { id: 'ra', tibetan: 'ར', roman: 'ra', khamPronunciation: 'ra', category: 'root', stage: 'learning', difficulty: 1, order: 25, group: '齒音', notes: '顫音' },
  { id: 'la', tibetan: 'ལ', roman: 'la', khamPronunciation: 'la', category: 'root', stage: 'learning', difficulty: 1, order: 26, group: '齒音', notes: '邊音' },
  { id: 'sha', tibetan: 'ཤ', roman: 'sha', khamPronunciation: 'sha', category: 'root', stage: 'learning', difficulty: 1, order: 27, group: '齒音', notes: '擦音' },
  { id: 'sa', tibetan: 'ས', roman: 'sa', khamPronunciation: 'sa', category: 'root', stage: 'learning', difficulty: 1, order: 28, group: '齒音', notes: '擦音' },

  // 第8組：喉音 (ha a)
  { id: 'ha', tibetan: 'ཧ', roman: 'ha', khamPronunciation: 'ha', category: 'root', stage: 'learning', difficulty: 1, order: 29, group: '喉音', notes: '送氣音，喉音' },
  { id: 'a', tibetan: 'ཨ', roman: 'a', khamPronunciation: 'a', category: 'root', stage: 'learning', difficulty: 1, order: 30, group: '喉音', notes: '元音，喉音' }
]

// ===== 元音符號（4個）=====
export const vowelMarks: CompleteTibetanCard[] = [
  { id: 'i_vowel', tibetan: 'ི', roman: 'i', khamPronunciation: 'i', category: 'vowel', stage: 'learning', difficulty: 2, order: 31, notes: '元音i，加在字母上方' },
  { id: 'u_vowel', tibetan: 'ུ', roman: 'u', khamPronunciation: 'u', category: 'vowel', stage: 'learning', difficulty: 2, order: 32, notes: '元音u，加在字母下方' },
  { id: 'e_vowel', tibetan: 'ེ', roman: 'e', khamPronunciation: 'e', category: 'vowel', stage: 'learning', difficulty: 2, order: 33, notes: '元音e，加在字母下方' },
  { id: 'o_vowel', tibetan: 'ོ', roman: 'o', khamPronunciation: 'o', category: 'vowel', stage: 'learning', difficulty: 2, order: 34, notes: '元音o，加在字母下方' }
]

// ===== 後音（10個）=====
export const suffixes: CompleteTibetanCard[] = [
  { id: 'g_suffix', tibetan: 'ག', roman: 'g', category: 'suffix', stage: 'learning', difficulty: 2, order: 35, notes: '後音g，可接在所有字母後', examples: ['ཐག', 'ལག', 'ཤིང', 'སྤྱང'] },
  { id: 'ng_suffix', tibetan: 'ང', roman: 'ng', category: 'suffix', stage: 'learning', difficulty: 2, order: 36, notes: '後音ng，可接在所有字母後', examples: ['རང', 'གང', 'ཐང', 'ལུང'] },
  { id: 'd_suffix', tibetan: 'ད', roman: 'd', category: 'suffix', stage: 'learning', difficulty: 2, order: 37, notes: '後音d，可接在所有字母後', examples: ['ཁྱོད', 'རྒྱུད', 'སེམས', 'ཐུགས'] },
  { id: 'n_suffix', tibetan: 'ན', roman: 'n', category: 'suffix', stage: 'learning', difficulty: 2, order: 38, notes: '後音n，可接在所有字母後', examples: ['མིན', 'ཡིན', 'སྐྱེས', 'འགྲོ'] },
  { id: 'b_suffix', tibetan: 'བ', roman: 'b', category: 'suffix', stage: 'learning', difficulty: 2, order: 39, notes: '後音b，可接在所有字母後', examples: ['ཐབ', 'ཁྱབ', 'འདབ', 'སྐྱབ'] },
  { id: 'm_suffix', tibetan: 'མ', roman: 'm', category: 'suffix', stage: 'learning', difficulty: 2, order: 40, notes: '後音m，可接在所有字母後', examples: ['ནམ', 'གསུམ', 'ཁམས', 'དམ'] },
  { id: 'r_suffix', tibetan: 'ར', roman: 'r', category: 'suffix', stage: 'learning', difficulty: 2, order: 41, notes: '後音r，可接在所有字母後', examples: ['དཀར', 'སེར', 'མར', 'ཕར'] },
  { id: 'l_suffix', tibetan: 'ལ', roman: 'l', category: 'suffix', stage: 'learning', difficulty: 2, order: 42, notes: '後音l，可接在所有字母後', examples: ['རྒྱལ', 'སྐུལ', 'འཕེལ', 'དཔལ'] },
  { id: 's_suffix', tibetan: 'ས', roman: 's', category: 'suffix', stage: 'learning', difficulty: 2, order: 43, notes: '後音s，可接在所有字母後', examples: ['ལས', 'གནས', 'ཐབས', 'རིགས'] },
  { id: 'i_suffix', tibetan: 'འི', roman: "'i", category: 'suffix', stage: 'learning', difficulty: 2, order: 44, notes: '後音\'i，格標記', examples: ['བདག་གི', 'ཁོང་གི', 'ཁྱེད་ཀྱི', 'ང་ཡི'] }
]

// ===== 再後音（2個）=====
export const secondSuffixes: CompleteTibetanCard[] = [
  { id: 'd_second', tibetan: 'ད', roman: 'd', category: 'second-suffix', stage: 'learning', difficulty: 3, order: 45, notes: '再後音d，只能接在ག/ང/བ/མ後', examples: ['ཐངད', 'རིངད', 'ཁམསད', 'གསུམད'] },
  { id: 's_second', tibetan: 'ས', roman: 's', category: 'second-suffix', stage: 'learning', difficulty: 3, order: 46, notes: '再後音s，只能接在ག/ང/བ/མ/ར/ལ後', examples: ['ཐངས', 'རིངས', 'ཁམསས', 'གསུམས', 'དཀརས', 'རྒྱལས'] }
]

// ===== 前音（5個）=====
export const prefixes: CompleteTibetanCard[] = [
  { id: 'g_prefix', tibetan: 'ག', roman: 'g', category: 'prefix', stage: 'learning', difficulty: 3, order: 47, notes: '前音g，加在ཅ/ཉ/ཏ/ད/ན/ཙ/ཞ/ཟ/ཡ/ཤ/ས前', examples: ['གཅིག', 'གཉིས', 'གཏུམ', 'གདུང', 'གནས', 'གཙང', 'གཞུང', 'གཟུགས', 'གཡུ', 'གཤེགས', 'གསུམ'] },
  { id: 'd_prefix', tibetan: 'ད', roman: 'd', category: 'prefix', stage: 'learning', difficulty: 3, order: 48, notes: '前音d，加在ཀ/ག/ང/པ/བ/མ前', examples: ['དཀར', 'དགུ', 'དངོས', 'དཔེ', 'དབུ', 'དམ'] },
  { id: 'b_prefix', tibetan: 'བ', roman: 'b', category: 'prefix', stage: 'learning', difficulty: 3, order: 49, notes: '前音b，加在ཀ/ག/ཅ/ཇ/ཏ/ད/ཙ/ཞ/ཟ/ཤ/ས前', examples: ['བཀའ', 'བགྲོད', 'བཅུ', 'བཇེད', 'བཏང', 'བདེ', 'བཙུན', 'བཞུགས', 'བཟང', 'བཤད', 'བསམ'] },
  { id: 'm_prefix', tibetan: 'མ', roman: 'm', category: 'prefix', stage: 'learning', difficulty: 3, order: 50, notes: '前音m，加在ཀ/ཁ/ག/ང/ཅ/ཇ/ཉ/ཏ/ཐ/ད/ན/ཙ/ཚ/ཛ前', examples: ['མཁས', 'མཁའ', 'མགོ', 'མངོན', 'མཆོག', 'མཇུག', 'མཉམ', 'མཐུ', 'མཐོང', 'མདུན', 'མནར', 'མཚན', 'མཚོ', 'མཛད'] },
  { id: 'a_prefix', tibetan: 'འ', roman: "'", category: 'prefix', stage: 'learning', difficulty: 3, order: 51, notes: '前音\'，加在ཀ/ཁ/ག/ཅ/ཆ/ཇ/ཏ/ཐ/ད/པ/ཕ/བ/ཙ/ཚ/ཛ前', examples: ['འཁོར', 'འཁྲུངས', 'འགྲོ', 'འཆི', 'འཆད', 'འཇིག', 'འཐུང', 'འཐབ', 'འདུག', 'འཕགས', 'འཕྲིན', 'འབྱུང', 'འཚོ', 'འཚེ', 'འཛིན'] }
]

// ===== 字頭（3個）=====
export const superscripts: CompleteTibetanCard[] = [
  { id: 'r_superscript', tibetan: 'ར', roman: 'r', category: 'superscript', stage: 'learning', difficulty: 4, order: 52, notes: '字頭r，加在ཀ/ཏ/ཙ/ག/ཇ/ད/བ/ཛ/ང/ཉ/ན/མ上', examples: ['རྐང', 'རྟ', 'རྩ', 'རྒྱལ', 'རྗེ', 'རྡོ', 'རྦ', 'རྫོགས', 'རྔ', 'རྙིང', 'རྣམ', 'རྨ'] },
  { id: 'l_superscript', tibetan: 'ལ', roman: 'l', category: 'superscript', stage: 'learning', difficulty: 4, order: 53, notes: '字頭l，加在ཀ/ཅ/ཏ/པ/ག/ཇ/ད/བ/ང/ཧ上', examples: ['ལྐུགས', 'ལྕགས', 'ལྟ', 'ལྤགས', 'ལྒ', 'ལྗང', 'ལྡན', 'ལྦ', 'ལྔ', 'ལྷ'] },
  { id: 's_superscript', tibetan: 'ས', roman: 's', category: 'superscript', stage: 'learning', difficulty: 4, order: 54, notes: '字頭s，加在ཀ/ཏ/པ/ཙ/ག/ད/བ/ང/ཉ/ན/མ上', examples: ['སྐུ', 'སྟོན', 'སྤྱན', 'སྩལ', 'སྒྲ', 'སྡུག', 'སྦྱིན', 'སྔོན', 'སྙིང', 'སྣ', 'སྨན'] }
]

// ===== 字足（4個）=====
export const subjoined: CompleteTibetanCard[] = [
  { id: 'ya_subjoined', tibetan: 'ྱ', roman: 'ya', category: 'subjoined', stage: 'learning', difficulty: 4, order: 55, notes: '字足ya，加在ཀ/ཁ/ག/པ/ཕ/བ/མ/ཧ下', examples: ['ཀྱང', 'ཁྱབ', 'གྱུར', 'པྱ', 'ཕྱག', 'བྱང', 'མྱ', 'ཧྱ'] },
  { id: 'ra_subjoined', tibetan: 'ྲ', roman: 'ra', category: 'subjoined', stage: 'learning', difficulty: 4, order: 56, notes: '字足ra，加在ཀ/ཏ/པ/ཁ/ཕ/ག/ཐ/ན/ད/བ/མ/ས/ཧ下', examples: ['ཀྲ', 'ཏྲ', 'པྲ', 'ཁྲ', 'ཕྲ', 'གྲ', 'ཐྲ', 'ནྲ', 'དྲ', 'བྲ', 'མྲ', 'སྲ', 'ཧྲ'] },
  { id: 'la_subjoined', tibetan: 'ླ', roman: 'la', category: 'subjoined', stage: 'learning', difficulty: 4, order: 57, notes: '字足la，加在ཀ/ག/བ/ར/ས/ཟ下', examples: ['ཀླ', 'གླ', 'བླ', 'རླ', 'སླ', 'ཟླ'] },
  { id: 'wa_subjoined', tibetan: 'ྭ', roman: 'wa', category: 'subjoined', stage: 'learning', difficulty: 4, order: 58, notes: '字足wa，圓唇化，加在多數字母下', examples: ['ཀྭ', 'ཁྭ', 'གྭ', 'ཅྭ', 'ཉྭ', 'ཏྭ', 'དྭ', 'ཙྭ', 'ཚྭ', 'ཞྭ', 'ཟྭ', 'རྭ', 'ལྭ', 'ཤྭ', 'སྭ', 'ཧྭ'] }
]

// ===== 語法小詞 =====
export const grammarWords: CompleteTibetanCard[] = [
  { id: 'gi', tibetan: 'གི', roman: 'gi', category: 'grammar', stage: 'learning', difficulty: 3, order: 59, notes: '所屬格標記' },
  { id: 'kyi', tibetan: 'ཀྱི', roman: 'kyi', category: 'grammar', stage: 'learning', difficulty: 3, order: 60, notes: '所屬格標記' },
  { id: 'gyi', tibetan: 'གྱི', roman: 'gyi', category: 'grammar', stage: 'learning', difficulty: 3, order: 61, notes: '所屬格標記' },
  { id: 'yi', tibetan: 'ཡི', roman: 'yi', category: 'grammar', stage: 'learning', difficulty: 3, order: 62, notes: '所屬格標記' },
  { id: 'i', tibetan: 'འི', roman: "'i", category: 'grammar', stage: 'learning', difficulty: 3, order: 63, notes: '所屬格標記' },
  { id: 'su', tibetan: 'སུ', roman: 'su', category: 'grammar', stage: 'learning', difficulty: 3, order: 64, notes: '介詞/格標記' },
  { id: 'ru', tibetan: 'རུ', roman: 'ru', category: 'grammar', stage: 'learning', difficulty: 3, order: 65, notes: '介詞/格標記' },
  { id: 'tu', tibetan: 'ཏུ', roman: 'tu', category: 'grammar', stage: 'learning', difficulty: 3, order: 66, notes: '介詞/格標記' },
  { id: 'du', tibetan: 'དུ', roman: 'du', category: 'grammar', stage: 'learning', difficulty: 3, order: 67, notes: '介詞/格標記' },
  { id: 'na', tibetan: 'ན', roman: 'na', category: 'grammar', stage: 'learning', difficulty: 3, order: 68, notes: '介詞/格標記' },
  { id: 'ra', tibetan: 'ར', roman: 'ra', category: 'grammar', stage: 'learning', difficulty: 3, order: 69, notes: '介詞/格標記' },
  { id: 'la', tibetan: 'ལ', roman: 'la', category: 'grammar', stage: 'learning', difficulty: 3, order: 70, notes: '介詞/格標記' }
]

// ===== 學習階段重新組織 =====
export const completeLearningStages = {
  stage1: {
    name: '基礎字母（第一組）',
    description: '學習舌根音和舌面音（8個字母）',
    cards: thirtyLetters.slice(0, 8), // ka-nya
    target: 8,
    dailyGoal: 2
  },
  stage2: {
    name: '基礎字母（第二組）',
    description: '學習舌尖音和雙唇音（8個字母）',
    cards: thirtyLetters.slice(8, 16), // ta-ma
    target: 8,
    dailyGoal: 2
  },
  stage3: {
    name: '基礎字母（第三組）',
    description: '學習齒齦音、半元音、齒音、喉音（14個字母）',
    cards: thirtyLetters.slice(16, 30), // tsa-a
    target: 14,
    dailyGoal: 3
  },
  stage4: {
    name: '元音符號',
    description: '學習四個元音符號',
    cards: vowelMarks,
    target: 4,
    dailyGoal: 2
  },
  stage5: {
    name: '後音系統',
    description: '學習十個後音和兩個再後音',
    cards: [...suffixes, ...secondSuffixes],
    target: 12,
    dailyGoal: 3
  },
  stage6: {
    name: '前音系統',
    description: '學習五個前音',
    cards: prefixes,
    target: 5,
    dailyGoal: 2
  },
  stage7: {
    name: '字頭字足',
    description: '學習三個字頭和四個字足',
    cards: [...superscripts, ...subjoined],
    target: 7,
    dailyGoal: 2
  },
  stage8: {
    name: '語法小詞',
    description: '學習常用語法小詞',
    cards: grammarWords,
    target: 12,
    dailyGoal: 3
  }
}

// ===== 輔助函數 =====
export function getAllCompleteAlphabetCards(): CompleteTibetanCard[] {
  return [
    ...thirtyLetters,
    ...vowelMarks,
    ...suffixes,
    ...secondSuffixes,
    ...prefixes,
    ...superscripts,
    ...subjoined,
    ...grammarWords
  ]
}

export function getCardsByCategory(category: CompleteTibetanCard['category']): CompleteTibetanCard[] {
  return getAllCompleteAlphabetCards().filter(card => card.category === category)
}

export function getCardsByGroup(group: string): CompleteTibetanCard[] {
  return getAllCompleteAlphabetCards().filter(card => card.group === group)
}

export function getCardById(id: string): CompleteTibetanCard | undefined {
  return getAllCompleteAlphabetCards().find(card => card.id === id)
}

// 學習模式相關函數
export function getLearningModeCards(stage?: keyof typeof completeLearningStages): CompleteTibetanCard[] {
  if (stage) {
    return completeLearningStages[stage].cards
  }
  return getAllCompleteAlphabetCards().filter(card => card.stage === 'learning')
}

export function getRecallModeCards(stage?: keyof typeof completeLearningStages): CompleteTibetanCard[] {
  if (stage) {
    return completeLearningStages[stage].cards.filter(card => card.stage === 'recall')
  }
  return getAllCompleteAlphabetCards().filter(card => card.stage === 'recall')
}

export function getMasteredCards(stage?: keyof typeof completeLearningStages): CompleteTibetanCard[] {
  if (stage) {
    return completeLearningStages[stage].cards.filter(card => card.stage === 'mastered')
  }
  return getAllCompleteAlphabetCards().filter(card => card.stage === 'mastered')
}
