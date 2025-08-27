export interface TibetanCard {
  id: string
  tibetan: string
  roman: string // 羅馬對音
  khamPronunciation?: string // 實際讀法
  category: 'root' | 'vowel' | 'suffix' | 'second-suffix' | 'prefix' | 'superscript' | 'subjoined' | 'word' | 'grammar'
  stage: 'learning' | 'recall' | 'mastered'
  difficulty: 1 | 2 | 3 | 4 | 5
  order: number
  notes?: string // 讀音規則、清濁變化等
  examples?: string[] // 搭配示例
  audioUrl?: string
  group?: string // 字母分組
}

// 三十字母（按教材8組排列）
export const thirtyLetters: TibetanCard[] = [
  // 第1組：舌根音
  { id: 'ka', tibetan: 'ཀ', roman: 'ka', category: 'root', stage: 'learning', difficulty: 1, order: 1, group: '舌根音', notes: '清音，舌根音' },
  { id: 'kha', tibetan: 'ཁ', roman: 'kha', category: 'root', stage: 'learning', difficulty: 1, order: 2, group: '舌根音', notes: '送氣音，舌根音' },
  { id: 'ga', tibetan: 'ག', roman: 'ga', category: 'root', stage: 'learning', difficulty: 1, order: 3, group: '舌根音', notes: '濁音，舌根音' },
  { id: 'nga', tibetan: 'ང', roman: 'nga', category: 'root', stage: 'learning', difficulty: 1, order: 4, group: '舌根音', notes: '鼻音，舌根音' },

  // 第2組：舌面音
  { id: 'ca', tibetan: 'ཅ', roman: 'ca', category: 'root', stage: 'learning', difficulty: 1, order: 5, group: '舌面音', notes: '清音，舌面音' },
  { id: 'cha', tibetan: 'ཆ', roman: 'cha', category: 'root', stage: 'learning', difficulty: 1, order: 6, group: '舌面音', notes: '送氣音，舌面音' },
  { id: 'ja', tibetan: 'ཇ', roman: 'ja', category: 'root', stage: 'learning', difficulty: 1, order: 7, group: '舌面音', notes: '濁音，舌面音' },
  { id: 'nya', tibetan: 'ཉ', roman: 'nya', category: 'root', stage: 'learning', difficulty: 1, order: 8, group: '舌面音', notes: '鼻音，舌面音' },

  // 第3組：舌尖音
  { id: 'ta', tibetan: 'ཏ', roman: 'ta', category: 'root', stage: 'learning', difficulty: 1, order: 9, group: '舌尖音', notes: '清音，舌尖音' },
  { id: 'tha', tibetan: 'ཐ', roman: 'tha', category: 'root', stage: 'learning', difficulty: 1, order: 10, group: '舌尖音', notes: '送氣音，舌尖音' },
  { id: 'da', tibetan: 'ད', roman: 'da', category: 'root', stage: 'learning', difficulty: 1, order: 11, group: '舌尖音', notes: '濁音，舌尖音' },
  { id: 'na', tibetan: 'ན', roman: 'na', category: 'root', stage: 'learning', difficulty: 1, order: 12, group: '舌尖音', notes: '鼻音，舌尖音' },

  // 第4組：雙唇音
  { id: 'pa', tibetan: 'པ', roman: 'pa', category: 'root', stage: 'learning', difficulty: 1, order: 13, group: '雙唇音', notes: '清音，雙唇音' },
  { id: 'pha', tibetan: 'ཕ', roman: 'pha', category: 'root', stage: 'learning', difficulty: 1, order: 14, group: '雙唇音', notes: '送氣音，雙唇音' },
  { id: 'ba', tibetan: 'བ', roman: 'ba', category: 'root', stage: 'learning', difficulty: 1, order: 15, group: '雙唇音', notes: '濁音，雙唇音（末音節常讀wa）' },
  { id: 'ma', tibetan: 'མ', roman: 'ma', category: 'root', stage: 'learning', difficulty: 1, order: 16, group: '雙唇音', notes: '鼻音，雙唇音' },

  // 第5組：齒齦音
  { id: 'tsa', tibetan: 'ཙ', roman: 'tsa', category: 'root', stage: 'learning', difficulty: 1, order: 17, group: '齒齦音', notes: '清音，齒齦音' },
  { id: 'tsha', tibetan: 'ཚ', roman: 'tsha', category: 'root', stage: 'learning', difficulty: 1, order: 18, group: '齒齦音', notes: '送氣音，齒齦音' },
  { id: 'dza', tibetan: 'ཛ', roman: 'dza', category: 'root', stage: 'learning', difficulty: 1, order: 19, group: '齒齦音', notes: '濁音，齒齦音' },
  { id: 'wa', tibetan: 'ཝ', roman: 'wa', category: 'root', stage: 'learning', difficulty: 1, order: 20, group: '半元音', notes: '半元音' },

  // 第6組：半元音
  { id: 'zha', tibetan: 'ཞ', roman: 'zha', category: 'root', stage: 'learning', difficulty: 1, order: 21, group: '半元音', notes: '半元音' },
  { id: 'za', tibetan: 'ཟ', roman: 'za', category: 'root', stage: 'learning', difficulty: 1, order: 22, group: '半元音', notes: '半元音' },
  { id: 'a', tibetan: 'འ', roman: "'a", category: 'root', stage: 'learning', difficulty: 1, order: 23, group: '半元音', notes: '半元音' },
  { id: 'ya', tibetan: 'ཡ', roman: 'ya', category: 'root', stage: 'learning', difficulty: 1, order: 24, group: '半元音', notes: '半元音' },

  // 第7組：半元音
  { id: 'ra', tibetan: 'ར', roman: 'ra', category: 'root', stage: 'learning', difficulty: 1, order: 25, group: '半元音', notes: '半元音' },
  { id: 'la', tibetan: 'ལ', roman: 'la', category: 'root', stage: 'learning', difficulty: 1, order: 26, group: '半元音', notes: '半元音' },
  { id: 'sha', tibetan: 'ཤ', roman: 'sha', category: 'root', stage: 'learning', difficulty: 1, order: 27, group: '半元音', notes: '半元音' },
  { id: 'sa', tibetan: 'ས', roman: 'sa', category: 'root', stage: 'learning', difficulty: 1, order: 28, group: '半元音', notes: '半元音' },

  // 第8組：半元音
  { id: 'ha', tibetan: 'ཧ', roman: 'ha', category: 'root', stage: 'learning', difficulty: 1, order: 29, group: '半元音', notes: '半元音' },
  { id: 'a2', tibetan: 'ཨ', roman: 'a', category: 'root', stage: 'learning', difficulty: 1, order: 30, group: '半元音', notes: '元音字母' }
]

// 母音記號（音符）
export const vowelMarks: TibetanCard[] = [
  { id: 'i_vowel', tibetan: 'ི', roman: 'i', category: 'vowel', stage: 'learning', difficulty: 2, order: 31, notes: 'gi gu，發音為i' },
  { id: 'u_vowel', tibetan: 'ུ', roman: 'u', category: 'vowel', stage: 'learning', difficulty: 2, order: 32, notes: 'zhabs kyu，發音為u' },
  { id: 'e_vowel', tibetan: 'ེ', roman: 'e', category: 'vowel', stage: 'learning', difficulty: 2, order: 33, notes: "'greng bu，發音為e" },
  { id: 'o_vowel', tibetan: 'ོ', roman: 'o', category: 'vowel', stage: 'learning', difficulty: 2, order: 34, notes: 'na ro，發音為o' }
]

// 後音（10個）
export const suffixes: TibetanCard[] = [
  { id: 'g_suffix', tibetan: 'ག', roman: 'g', category: 'suffix', stage: 'learning', difficulty: 3, order: 35, notes: '後音g' },
  { id: 'ng_suffix', tibetan: 'ང', roman: 'ng', category: 'suffix', stage: 'learning', difficulty: 3, order: 36, notes: '後音ng' },
  { id: 'd_suffix', tibetan: 'ད', roman: 'd', category: 'suffix', stage: 'learning', difficulty: 3, order: 37, notes: '後音d' },
  { id: 'n_suffix', tibetan: 'ན', roman: 'n', category: 'suffix', stage: 'learning', difficulty: 3, order: 38, notes: '後音n' },
  { id: 'b_suffix', tibetan: 'བ', roman: 'b', category: 'suffix', stage: 'learning', difficulty: 3, order: 39, notes: '後音b（常讀wa）' },
  { id: 'm_suffix', tibetan: 'མ', roman: 'm', category: 'suffix', stage: 'learning', difficulty: 3, order: 40, notes: '後音m' },
  { id: 'a_suffix', tibetan: 'འ', roman: "'", category: 'suffix', stage: 'learning', difficulty: 3, order: 41, notes: '後音\'' },
  { id: 'r_suffix', tibetan: 'ར', roman: 'r', category: 'suffix', stage: 'learning', difficulty: 3, order: 42, notes: '後音r' },
  { id: 'l_suffix', tibetan: 'ལ', roman: 'l', category: 'suffix', stage: 'learning', difficulty: 3, order: 43, notes: '後音l' },
  { id: 's_suffix', tibetan: 'ས', roman: 's', category: 'suffix', stage: 'learning', difficulty: 3, order: 44, notes: '後音s' }
]

// 再後音（常用-s）
export const secondSuffixes: TibetanCard[] = [
  { id: 's_second', tibetan: 'ས', roman: 's', category: 'second-suffix', stage: 'learning', difficulty: 4, order: 45, notes: '再後音s，合成gs/ngs/bs/ms等' }
]

// 前音（5個）
export const prefixes: TibetanCard[] = [
  { id: 'g_prefix', tibetan: 'ག', roman: 'g', category: 'prefix', stage: 'learning', difficulty: 4, order: 46, notes: '前音g，影響清濁' },
  { id: 'd_prefix', tibetan: 'ད', roman: 'd', category: 'prefix', stage: 'learning', difficulty: 4, order: 47, notes: '前音d，影響清濁' },
  { id: 'b_prefix', tibetan: 'བ', roman: 'b', category: 'prefix', stage: 'learning', difficulty: 4, order: 48, notes: '前音b，影響清濁' },
  { id: 'm_prefix', tibetan: 'མ', roman: 'm', category: 'prefix', stage: 'learning', difficulty: 4, order: 49, notes: '前音m，影響清濁' },
  { id: 'a_prefix', tibetan: 'འ', roman: "'", category: 'prefix', stage: 'learning', difficulty: 4, order: 50, notes: '前音\'，影響清濁' }
]

// 字頭（3個）
export const superscripts: TibetanCard[] = [
  { id: 'r_superscript', tibetan: 'ར', roman: 'r', category: 'superscript', stage: 'learning', difficulty: 4, order: 51, notes: '字頭r，可加在k/t/ts/g/j/d/b/dz/ng/ny/n/m上' },
  { id: 'l_superscript', tibetan: 'ལ', roman: 'l', category: 'superscript', stage: 'learning', difficulty: 4, order: 52, notes: '字頭l，可加在k/c/t/p/g/j/d/b/ng/h上' },
  { id: 's_superscript', tibetan: 'ས', roman: 's', category: 'superscript', stage: 'learning', difficulty: 4, order: 53, notes: '字頭s，可加在k/t/p/ts/g/d/b/ng/ny/n/m上' }
]

// 字足（4個）
export const subjoined: TibetanCard[] = [
  { id: 'ya_subjoined', tibetan: 'ྱ', roman: 'ya', category: 'subjoined', stage: 'learning', difficulty: 4, order: 54, notes: '字足ya，可加在k/kh/g/p/ph/b/m/h下' },
  { id: 'ra_subjoined', tibetan: 'ྲ', roman: 'ra', category: 'subjoined', stage: 'learning', difficulty: 4, order: 55, notes: '字足ra，可加在k/t/p/kh/ph/g/th/n/d/b/m/s/h下' },
  { id: 'la_subjoined', tibetan: 'ླ', roman: 'la', category: 'subjoined', stage: 'learning', difficulty: 4, order: 56, notes: '字足la，可加在k/g/b/r/s/z下' },
  { id: 'wa_subjoined', tibetan: 'ྭ', roman: 'wa', category: 'subjoined', stage: 'learning', difficulty: 4, order: 57, notes: '字足wa，發音通常不變，作圓唇化' }
]

// 語法小詞
export const grammarWords: TibetanCard[] = [
  { id: 'gi', tibetan: 'གི', roman: 'gi', category: 'grammar', stage: 'learning', difficulty: 3, order: 58, notes: '所屬格標記' },
  { id: 'yi', tibetan: 'ཡི', roman: 'yi', category: 'grammar', stage: 'learning', difficulty: 3, order: 59, notes: '所屬格標記' },
  { id: 'i', tibetan: 'འི', roman: "'i", category: 'grammar', stage: 'learning', difficulty: 3, order: 60, notes: '所屬格標記' },
  { id: 'su', tibetan: 'སུ', roman: 'su', category: 'grammar', stage: 'learning', difficulty: 3, order: 61, notes: '介詞/格標記' },
  { id: 'ru', tibetan: 'རུ', roman: 'ru', category: 'grammar', stage: 'learning', difficulty: 3, order: 62, notes: '介詞/格標記' },
  { id: 'tu', tibetan: 'ཏུ', roman: 'tu', category: 'grammar', stage: 'learning', difficulty: 3, order: 63, notes: '介詞/格標記' },
  { id: 'du', tibetan: 'དུ', roman: 'du', category: 'grammar', stage: 'learning', difficulty: 3, order: 64, notes: '介詞/格標記' },
  { id: 'na', tibetan: 'ན', roman: 'na', category: 'grammar', stage: 'learning', difficulty: 3, order: 65, notes: '介詞/格標記' },
  { id: 'ra', tibetan: 'ར', roman: 'ra', category: 'grammar', stage: 'learning', difficulty: 3, order: 66, notes: '介詞/格標記' },
  { id: 'la', tibetan: 'ལ', roman: 'la', category: 'grammar', stage: 'learning', difficulty: 3, order: 67, notes: '介詞/格標記' }
]

// 佛學詞彙（擴充版，包含常見修持儀軌詞彙）
export const buddhistVocabulary: TibetanCard[] = [
  // 基礎佛學概念
  { id: 'sangs_rgyas', tibetan: 'སངས་རྒྱས', roman: 'sangs rgyas', khamPronunciation: 'sang gye', category: 'word', stage: 'learning', difficulty: 4, order: 68, notes: '佛陀，覺者' },
  { id: 'chos', tibetan: 'ཆོས', roman: 'chos', khamPronunciation: 'chö', category: 'word', stage: 'learning', difficulty: 3, order: 69, notes: '法，佛法' },
  { id: 'dge_dun', tibetan: 'དགེ་འདུན', roman: 'dge \'dun', khamPronunciation: 'gen dün', category: 'word', stage: 'learning', difficulty: 4, order: 70, notes: '僧伽，僧團' },
  
  // 三寶
  { id: 'dkon_mchog', tibetan: 'དཀོན་མཆོག', roman: 'dkon mchog', khamPronunciation: 'kön chok', category: 'word', stage: 'learning', difficulty: 4, order: 71, notes: '三寶，珍寶' },
  { id: 'skyabs', tibetan: 'སྐྱབས', roman: 'skyabs', khamPronunciation: 'kyab', category: 'word', stage: 'learning', difficulty: 3, order: 72, notes: '皈依，庇護' },
  
  // 修持相關
  { id: 'sngon_du_gro_ba', tibetan: 'སྔོན་དུ་གྲོ་བ', roman: 'sngon du gro ba', khamPronunciation: 'ngön du dro wa', category: 'word', stage: 'learning', difficulty: 5, order: 73, notes: '前行，預備修持' },
  { id: 'bsam_gtan', tibetan: 'བསམ་གཏན', roman: 'bsam gtan', khamPronunciation: 'sam ten', category: 'word', stage: 'learning', difficulty: 4, order: 74, notes: '禪定，靜慮' },
  { id: 'sgom_pa', tibetan: 'སྒོམ་པ', roman: 'sgom pa', khamPronunciation: 'gom pa', category: 'word', stage: 'learning', difficulty: 3, order: 75, notes: '修習，禪修' },
  { id: 'smon_lam', tibetan: 'སྨོན་ལམ', roman: 'smon lam', khamPronunciation: 'mön lam', category: 'word', stage: 'learning', difficulty: 3, order: 76, notes: '祈願，發願' },
  
  // 常見咒語和修持
  { id: 'om_mani', tibetan: 'ཨོཾ་མ་ཎི', roman: 'om ma ni', khamPronunciation: 'om ma ni', category: 'word', stage: 'learning', difficulty: 3, order: 77, notes: '六字大明咒開頭' },
  { id: 'pad_me_hum', tibetan: 'པདྨེ་ཧཱུྃ', roman: 'pad me hum', khamPronunciation: 'peme hung', category: 'word', stage: 'learning', difficulty: 3, order: 78, notes: '六字大明咒結尾' },
  { id: 'tara', tibetan: 'སྒྲོལ་མ', roman: 'sgrol ma', khamPronunciation: 'dröl ma', category: 'word', stage: 'learning', difficulty: 3, order: 79, notes: '度母，救度母' },
  { id: 'bla_ma', tibetan: 'བླ་མ', roman: 'bla ma', khamPronunciation: 'lama', category: 'word', stage: 'learning', difficulty: 2, order: 80, notes: '上師，喇嘛' },
  
  // 儀軌用詞
  { id: 'mchod_pa', tibetan: 'མཆོད་པ', roman: 'mchod pa', khamPronunciation: 'chö pa', category: 'word', stage: 'learning', difficulty: 3, order: 81, notes: '供養，禮拜' },
  { id: 'gsol_ba', tibetan: 'གསོལ་བ', roman: 'gsol ba', khamPronunciation: 'söl wa', category: 'word', stage: 'learning', difficulty: 3, order: 82, notes: '祈請，啟請' },
  { id: 'phyag_tshal', tibetan: 'ཕྱག་འཚལ', roman: 'phyag \'tshal', khamPronunciation: 'chak tsal', category: 'word', stage: 'learning', difficulty: 4, order: 83, notes: '頂禮，禮拜' },
  { id: 'bstod_pa', tibetan: 'བསྟོད་པ', roman: 'bstod pa', khamPronunciation: 'tö pa', category: 'word', stage: 'learning', difficulty: 4, order: 84, notes: '讚頌，讚嘆' },
  
  // 功德和迴向
  { id: 'bsod_nams', tibetan: 'བསོད་ནམས', roman: 'bsod nams', khamPronunciation: 'sö nam', category: 'word', stage: 'learning', difficulty: 3, order: 85, notes: '功德，福德' },
  { id: 'bsngo_ba', tibetan: 'བསྔོ་བ', roman: 'bsngo ba', khamPronunciation: 'ngo wa', category: 'word', stage: 'learning', difficulty: 4, order: 86, notes: '迴向，回向' },
  { id: 'ye_shes', tibetan: 'ཡེ་ཤེས', roman: 'ye shes', khamPronunciation: 'ye she', category: 'word', stage: 'learning', difficulty: 3, order: 87, notes: '智慧，本智' },
  { id: 'thugs_rje', tibetan: 'ཐུགས་རྗེ', roman: 'thugs rje', khamPronunciation: 'tuk je', category: 'word', stage: 'learning', difficulty: 3, order: 88, notes: '慈悲，悲心' },
  
  // 時間和數量
  { id: 'dus', tibetan: 'དུས', roman: 'dus', khamPronunciation: 'dü', category: 'word', stage: 'learning', difficulty: 2, order: 89, notes: '時間，時候' },
  { id: 'nyin_mo', tibetan: 'ཉིན་མོ', roman: 'nyin mo', khamPronunciation: 'nyin mo', category: 'word', stage: 'learning', difficulty: 2, order: 90, notes: '白天，日間' },
  { id: 'mtshan_mo', tibetan: 'མཚན་མོ', roman: 'mtshan mo', khamPronunciation: 'tsen mo', category: 'word', stage: 'learning', difficulty: 3, order: 91, notes: '夜晚，夜間' },
  
  // 護法和本尊
  { id: 'mgon_po', tibetan: 'མགོན་པོ', roman: 'mgon po', khamPronunciation: 'gön po', category: 'word', stage: 'learning', difficulty: 3, order: 92, notes: '護法，怙主' },
  { id: 'yi_dam', tibetan: 'ཡི་དམ', roman: 'yi dam', khamPronunciation: 'yi dam', category: 'word', stage: 'learning', difficulty: 3, order: 93, notes: '本尊，誓言尊' },
  { id: 'mkha_gro', tibetan: 'མཁའ་འགྲོ', roman: 'mkha\' \'gro', khamPronunciation: 'kha dro', category: 'word', stage: 'learning', difficulty: 4, order: 94, notes: '空行母，dakini' },
  { id: 'chos_skyong', tibetan: 'ཆོས་སྐྱོང', roman: 'chos skyong', khamPronunciation: 'chö kyong', category: 'word', stage: 'learning', difficulty: 4, order: 95, notes: '護法，法護' },
  
  // 供養物品
  { id: 'me_tog', tibetan: 'མེ་ཏོག', roman: 'me tog', khamPronunciation: 'me tok', category: 'word', stage: 'learning', difficulty: 2, order: 96, notes: '花，花朵' },
  { id: 'bdug_pa', tibetan: 'བདུག་པ', roman: 'bdug pa', khamPronunciation: 'duk pa', category: 'word', stage: 'learning', difficulty: 3, order: 97, notes: '香，薰香' },
  { id: 'mar_me', tibetan: 'མར་མེ', roman: 'mar me', khamPronunciation: 'mar me', category: 'word', stage: 'learning', difficulty: 2, order: 98, notes: '酥油燈，燈明' },
  { id: 'chu', tibetan: 'ཆུ', roman: 'chu', khamPronunciation: 'chu', category: 'word', stage: 'learning', difficulty: 1, order: 99, notes: '水，淨水' },
  { id: 'zas', tibetan: 'ཟས', roman: 'zas', khamPronunciation: 'ze', category: 'word', stage: 'learning', difficulty: 2, order: 100, notes: '食物，供食' },
  
  // 儀軌動作
  { id: 'bskor_ba', tibetan: 'བསྐོར་བ', roman: 'bskor ba', khamPronunciation: 'kor wa', category: 'word', stage: 'learning', difficulty: 3, order: 101, notes: '繞行，轉經' },
  { id: 'phyag_rgya', tibetan: 'ཕྱག་རྒྱ', roman: 'phyag rgya', khamPronunciation: 'chak gya', category: 'word', stage: 'learning', difficulty: 4, order: 102, notes: '手印，印契' },
  { id: 'bzlas_pa', tibetan: 'བཟླས་པ', roman: 'bzlas pa', khamPronunciation: 'de pa', category: 'word', stage: 'learning', difficulty: 3, order: 103, notes: '持咒，念誦' },
  { id: 'bsgom_pa', tibetan: 'བསྒོམ་པ', roman: 'bsgom pa', khamPronunciation: 'gom pa', category: 'word', stage: 'learning', difficulty: 3, order: 104, notes: '觀修，禪修' },
  
  // 法器和用品
  { id: 'rdo_rje', tibetan: 'རྡོ་རྗེ', roman: 'rdo rje', khamPronunciation: 'dor je', category: 'word', stage: 'learning', difficulty: 3, order: 105, notes: '金剛杵，vajra' },
  { id: 'dril_bu', tibetan: 'དྲིལ་བུ', roman: 'dril bu', khamPronunciation: 'dril bu', category: 'word', stage: 'learning', difficulty: 3, order: 106, notes: '金剛鈴，鈴' },
  { id: 'phreng_ba', tibetan: 'ཕྲེང་བ', roman: 'phreng ba', khamPronunciation: 'treng wa', category: 'word', stage: 'learning', difficulty: 3, order: 107, notes: '念珠，數珠' },
  { id: 'gtor_ma', tibetan: 'གཏོར་མ', roman: 'gtor ma', khamPronunciation: 'tor ma', category: 'word', stage: 'learning', difficulty: 3, order: 108, notes: '朵瑪，食子' },
  
  // 經典和文本
  { id: 'gsung', tibetan: 'གསུང', roman: 'gsung', khamPronunciation: 'sung', category: 'word', stage: 'learning', difficulty: 2, order: 109, notes: '語，佛語' },
  { id: 'lung', tibetan: 'ལུང', roman: 'lung', khamPronunciation: 'lung', category: 'word', stage: 'learning', difficulty: 2, order: 110, notes: '傳承，口傳' },
  { id: 'khrid', tibetan: 'ཁྲིད', roman: 'khrid', khamPronunciation: 'tri', category: 'word', stage: 'learning', difficulty: 3, order: 111, notes: '引導，指導' },
  { id: 'gdams_ngag', tibetan: 'གདམས་ངག', roman: 'gdams ngag', khamPronunciation: 'dam ngak', category: 'word', stage: 'learning', difficulty: 4, order: 112, notes: '口訣，教授' },
  
  // 修持階段
  { id: 'bskyed_rim', tibetan: 'བསྐྱེད་རིམ', roman: 'bskyed rim', khamPronunciation: 'kye rim', category: 'word', stage: 'learning', difficulty: 4, order: 113, notes: '生起次第' },
  { id: 'rdzogs_rim', tibetan: 'རྫོགས་རིམ', roman: 'rdzogs rim', khamPronunciation: 'dzok rim', category: 'word', stage: 'learning', difficulty: 4, order: 114, notes: '圓滿次第' },
  { id: 'thun', tibetan: 'ཐུན', roman: 'thun', khamPronunciation: 'tün', category: 'word', stage: 'learning', difficulty: 2, order: 115, notes: '座，修法座次' },
  { id: 'bar_chad', tibetan: 'བར་ཆད', roman: 'bar chad', khamPronunciation: 'bar che', category: 'word', stage: 'learning', difficulty: 3, order: 116, notes: '障礙，違緣' },
  
  // 成就和證悟
  { id: 'dngos_grub', tibetan: 'དངོས་གྲུབ', roman: 'dngos grub', khamPronunciation: 'ngö drup', category: 'word', stage: 'learning', difficulty: 4, order: 117, notes: '成就，悉地' },
  { id: 'rtogs_pa', tibetan: 'རྟོགས་པ', roman: 'rtogs pa', khamPronunciation: 'tok pa', category: 'word', stage: 'learning', difficulty: 3, order: 118, notes: '證悟，了悟' },
  { id: 'mthong_ba', tibetan: 'མཐོང་བ', roman: 'mthong ba', khamPronunciation: 'tong wa', category: 'word', stage: 'learning', difficulty: 2, order: 119, notes: '見，現觀' },
  { id: 'nyams', tibetan: 'ཉམས', roman: 'nyams', khamPronunciation: 'nyam', category: 'word', stage: 'learning', difficulty: 2, order: 120, notes: '覺受，體驗' },
  
  // 度母法門
  { id: 'sgrol_ma', tibetan: 'སྒྲོལ་མ', roman: 'sgrol ma', khamPronunciation: 'dröl ma', category: 'word', stage: 'learning', difficulty: 3, order: 121, notes: '度母，救度母' },
  { id: 'ljang_gu', tibetan: 'ལྗང་གུ', roman: 'ljang gu', khamPronunciation: 'jang gu', category: 'word', stage: 'learning', difficulty: 3, order: 122, notes: '綠色，綠度母' },
  { id: 'dkar_mo', tibetan: 'དཀར་མོ', roman: 'dkar mo', khamPronunciation: 'kar mo', category: 'word', stage: 'learning', difficulty: 3, order: 123, notes: '白色，白度母' },
  { id: 'sgrol_ma_nyer_gcig', tibetan: 'སྒྲོལ་མ་ཉེར་གཅིག', roman: 'sgrol ma nyer gcig', khamPronunciation: 'dröl ma nyer chik', category: 'word', stage: 'learning', difficulty: 5, order: 124, notes: '二十一度母' },
  
  // 文殊法門
  { id: 'jam_dpal', tibetan: 'འཇམ་དཔལ', roman: '\'jam dpal', khamPronunciation: 'jam pel', category: 'word', stage: 'learning', difficulty: 3, order: 125, notes: '文殊，文殊師利' },
  { id: 'jam_dbyangs', tibetan: 'འཇམ་དབྱངས', roman: '\'jam dbyangs', khamPronunciation: 'jam yang', category: 'word', stage: 'learning', difficulty: 4, order: 126, notes: '文殊，妙音' },
  { id: 'shes_rab', tibetan: 'ཤེས་རབ', roman: 'shes rab', khamPronunciation: 'she rap', category: 'word', stage: 'learning', difficulty: 3, order: 127, notes: '智慧，般若' },
  { id: 'mkhas_pa', tibetan: 'མཁས་པ', roman: 'mkhas pa', khamPronunciation: 'khe pa', category: 'word', stage: 'learning', difficulty: 3, order: 128, notes: '智者，博學' },
  
  // 觀音法門
  { id: 'spyan_ras_gzigs', tibetan: 'སྤྱན་རས་གཟིགས', roman: 'spyan ras gzigs', khamPronunciation: 'chen re zik', category: 'word', stage: 'learning', difficulty: 5, order: 129, notes: '觀世音菩薩' },
  { id: 'thugs_rje_chen_po', tibetan: 'ཐུགས་རྗེ་ཆེན་པོ', roman: 'thugs rje chen po', khamPronunciation: 'tuk je chen po', category: 'word', stage: 'learning', difficulty: 4, order: 130, notes: '大悲，大慈悲' },
  { id: 'zhal_bzhi_pa', tibetan: 'ཞལ་བཞི་པ', roman: 'zhal bzhi pa', khamPronunciation: 'zhal zhi pa', category: 'word', stage: 'learning', difficulty: 4, order: 131, notes: '四面，四面觀音' },
  { id: 'phyag_stong_pa', tibetan: 'ཕྱག་སྟོང་པ', roman: 'phyag stong pa', khamPronunciation: 'chak tong pa', category: 'word', stage: 'learning', difficulty: 4, order: 132, notes: '千手，千手觀音' },
  
  // 金剛薩埵法門
  { id: 'rdo_rje_sems_dpa', tibetan: 'རྡོ་རྗེ་སེམས་དཔའ', roman: 'rdo rje sems dpa\'', khamPronunciation: 'dor je sem pa', category: 'word', stage: 'learning', difficulty: 5, order: 133, notes: '金剛薩埵' },
  { id: 'sdig_pa', tibetan: 'སྡིག་པ', roman: 'sdig pa', khamPronunciation: 'dik pa', category: 'word', stage: 'learning', difficulty: 3, order: 134, notes: '罪業，惡業' },
  { id: 'sbyang_ba', tibetan: 'སྦྱང་བ', roman: 'sbyang ba', khamPronunciation: 'jang wa', category: 'word', stage: 'learning', difficulty: 3, order: 135, notes: '淨化，清淨' },
  { id: 'bshags_pa', tibetan: 'བཤགས་པ', roman: 'bshags pa', khamPronunciation: 'shak pa', category: 'word', stage: 'learning', difficulty: 3, order: 136, notes: '懺悔，悔過' },
  
  // 藥師佛法門
  { id: 'sman_bla', tibetan: 'སྨན་བླ', roman: 'sman bla', khamPronunciation: 'men la', category: 'word', stage: 'learning', difficulty: 3, order: 137, notes: '藥師佛，醫王' },
  { id: 'nad', tibetan: 'ནད', roman: 'nad', khamPronunciation: 'ne', category: 'word', stage: 'learning', difficulty: 2, order: 138, notes: '疾病，病痛' },
  { id: 'sman', tibetan: 'སྨན', roman: 'sman', khamPronunciation: 'men', category: 'word', stage: 'learning', difficulty: 2, order: 139, notes: '藥，醫藥' },
  { id: 'zhabs_bde', tibetan: 'ཞབས་བདེ', roman: 'zhabs bde', khamPronunciation: 'zhab de', category: 'word', stage: 'learning', difficulty: 3, order: 140, notes: '安康，健康' },
  
  // 阿彌陀佛法門
  { id: 'snang_ba_mtha_yas', tibetan: 'སྣང་བ་མཐའ་ཡས', roman: 'snang ba mtha\' yas', khamPronunciation: 'nang wa ta ye', category: 'word', stage: 'learning', difficulty: 5, order: 141, notes: '阿彌陀佛，無量光' },
  { id: 'bde_ba_can', tibetan: 'བདེ་བ་ཅན', roman: 'bde ba can', khamPronunciation: 'de wa chen', category: 'word', stage: 'learning', difficulty: 3, order: 142, notes: '極樂世界，安樂剎' },
  { id: 'skye_ba', tibetan: 'སྐྱེ་བ', roman: 'skye ba', khamPronunciation: 'kye wa', category: 'word', stage: 'learning', difficulty: 2, order: 143, notes: '往生，投生' },
  { id: 'smon_lam_btab', tibetan: 'སྨོན་ལམ་བཏབ', roman: 'smon lam btab', khamPronunciation: 'mön lam tab', category: 'word', stage: 'learning', difficulty: 4, order: 144, notes: '發願，立願' },
  
  // 蓮師法門
  { id: 'padma_sambhava', tibetan: 'པདྨ་སམྦྷ་ཝ', roman: 'padma sambha wa', khamPronunciation: 'pema sambhawa', category: 'word', stage: 'learning', difficulty: 4, order: 145, notes: '蓮花生大士' },
  { id: 'gu_ru', tibetan: 'གུ་རུ', roman: 'gu ru', khamPronunciation: 'guru', category: 'word', stage: 'learning', difficulty: 2, order: 146, notes: '上師，古魯' },
  { id: 'rin_po_che', tibetan: 'རིན་པོ་ཆེ', roman: 'rin po che', khamPronunciation: 'rin po che', category: 'word', stage: 'learning', difficulty: 3, order: 147, notes: '仁波切，珍寶' },
  { id: 'byin_rlabs', tibetan: 'བྱིན་རླབས', roman: 'byin rlabs', khamPronunciation: 'jin lap', category: 'word', stage: 'learning', difficulty: 3, order: 148, notes: '加持，祝福' },
  
  // 大威德金剛法門
  { id: 'gshin_rje_gshed', tibetan: 'གཤིན་རྗེ་གཤེད', roman: 'gshin rje gshed', khamPronunciation: 'shin je she', category: 'word', stage: 'learning', difficulty: 5, order: 149, notes: '大威德金剛' },
  { id: 'khro_bo', tibetan: 'ཁྲོ་བོ', roman: 'khro bo', khamPronunciation: 'tro wo', category: 'word', stage: 'learning', difficulty: 3, order: 150, notes: '忿怒尊，忿怒相' },
  { id: 'drag_po', tibetan: 'དྲག་པོ', roman: 'drag po', khamPronunciation: 'drak po', category: 'word', stage: 'learning', difficulty: 3, order: 151, notes: '威猛，勇猛' },
  { id: 'bar_chad_sel', tibetan: 'བར་ཆད་སེལ', roman: 'bar chad sel', khamPronunciation: 'bar che sel', category: 'word', stage: 'learning', difficulty: 4, order: 152, notes: '遣除障礙' },
  
  // 基礎概念（保留重要的）
  { id: 'byang_chub', tibetan: 'བྱང་ཆུབ', roman: 'byang chub', khamPronunciation: 'jang chup', category: 'word', stage: 'learning', difficulty: 4, order: 153, notes: '菩提，覺悟' },
  { id: 'sems_can', tibetan: 'སེམས་ཅན', roman: 'sems can', khamPronunciation: 'sem chen', category: 'word', stage: 'learning', difficulty: 3, order: 154, notes: '眾生，有情' },
  { id: 'bde_ba', tibetan: 'བདེ་བ', roman: 'bde ba', khamPronunciation: 'de wa', category: 'word', stage: 'learning', difficulty: 2, order: 155, notes: '快樂，安樂' }
]

// 學習階段定義（按教材重新設計）
export const learningStages = {
  stage1: {
    name: '三十字母',
    description: '學習藏文三十字母（按口腔部位分組）',
    cards: thirtyLetters,
    target: 30,
    dailyGoal: 5
  },
  stage2: {
    name: '母音記號',
    description: '學習四個母音記號（音符）',
    cards: vowelMarks,
    target: 4,
    dailyGoal: 2
  },
  stage3: {
    name: '後音與再後音',
    description: '學習後音和再後音組合',
    cards: [...suffixes, ...secondSuffixes],
    target: 11,
    dailyGoal: 3
  },
  stage4: {
    name: '前音',
    description: '學習前音組合規則',
    cards: prefixes,
    target: 5,
    dailyGoal: 2
  },
  stage5: {
    name: '字頭與字足',
    description: '學習字頭和字足組合',
    cards: [...superscripts, ...subjoined],
    target: 7,
    dailyGoal: 2
  },
  stage6: {
    name: '語法小詞',
    description: '學習常用語法小詞',
    cards: grammarWords,
    target: 10,
    dailyGoal: 2
  },
  stage7: {
    name: '佛學詞彙',
    description: '學習佛學術語和修持儀軌詞彙（含各法門專詞）',
    cards: buddhistVocabulary,
    target: 88,
    dailyGoal: 5
  }
}

// 輔助函數
export function getCurrentStageCards(stage: keyof typeof learningStages): TibetanCard[] {
  return learningStages[stage].cards
}

export function getLearningModeCards(stage: keyof typeof learningStages): TibetanCard[] {
  return getCurrentStageCards(stage).filter(card => card.stage === 'learning')
}

export function getRecallModeCards(stage: keyof typeof learningStages): TibetanCard[] {
  return getCurrentStageCards(stage).filter(card => card.stage === 'recall')
}

export function getMasteredCards(stage: keyof typeof learningStages): TibetanCard[] {
  return getCurrentStageCards(stage).filter(card => card.stage === 'mastered')
}

// 獲取所有字母（用於總表顯示）
export function getAllAlphabetCards(): TibetanCard[] {
  return [
    ...thirtyLetters,
    ...vowelMarks,
    ...suffixes,
    ...secondSuffixes,
    ...prefixes,
    ...superscripts,
    ...subjoined
  ]
}

// 獲取所有詞彙（用於總表顯示）
export function getAllVocabularyCards(): TibetanCard[] {
  return [...grammarWords, ...buddhistVocabulary]
}

// 音節結構常量
export const SYLLABLE_STRUCTURE = {
  vowels: ['ི', 'ུ', 'ེ', 'ོ'],
  suffixes: ['ག', 'ང', 'ད', 'ན', 'བ', 'མ', 'འ', 'ར', 'ལ', 'ས'],
  second_suffix_common: ['ས'],
  prefixes: ['ག', 'ད', 'བ', 'མ', 'འ'],
  superscripts: ['ར', 'ལ', 'ས'],
  subjoined: ['ྱ', 'ྲ', 'ླ', 'ྭ'],
  final_b_to_wa: true,
  tsheg: '་',
  shad: '།'
}
