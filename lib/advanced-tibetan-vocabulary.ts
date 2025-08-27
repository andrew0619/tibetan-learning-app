// 藏傳佛教行者500個必備詞彙（大手印/大圓滿修持專用）
// 專注於噶舉派和寧瑪派傳承

export interface AdvancedTibetanCard {
  id: string
  tibetan: string
  roman: string
  khamPronunciation: string
  category: 'foundation' | 'preliminary' | 'view' | 'meditation' | 'conduct' | 'result' | 'lineage' | 'ritual' | 'advanced'
  level: 1 | 2 | 3 | 4 | 5 // 修持層次
  tradition: 'kagyu' | 'nyingma' | 'common' // 傳承
  practice: 'mahamudra' | 'dzogchen' | 'common' // 修持法門
  stage: 'learning' | 'recall' | 'mastered'
  difficulty: 1 | 2 | 3 | 4 | 5
  order: number
  notes: string
  context?: string // 使用情境
  examples?: string[] // 例句或相關詞彙
}

// 第一層：基礎概念 (50個)
export const foundationVocabulary: AdvancedTibetanCard[] = [
  // 三寶和皈依
  { id: 'dkon_mchog_gsum', tibetan: 'དཀོན་མཆོག་གསུམ', roman: 'dkon mchog gsum', khamPronunciation: 'kön chok sum', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 1, notes: '三寶：佛法僧', context: '皈依儀軌' },
  { id: 'skyabs_gro', tibetan: 'སྐྱབས་འགྲོ', roman: 'skyabs \'gro', khamPronunciation: 'kyab dro', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 2, notes: '皈依，歸投三寶', context: '日常修持' },
  { id: 'byang_chub_sems', tibetan: 'བྱང་ཆུབ་སེམས', roman: 'byang chub sems', khamPronunciation: 'jang chup sem', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 3, notes: '菩提心，覺悟之心', context: '發心修持' },
  { id: 'sems_bskyed', tibetan: 'སེམས་བསྐྱེད', roman: 'sems bskyed', khamPronunciation: 'sem kye', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 4, notes: '發心，生起菩提心', context: '修持開始' },
  { id: 'bsngo_ba', tibetan: 'བསྔོ་བ', roman: 'bsngo ba', khamPronunciation: 'ngo wa', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 5, notes: '迴向，功德回向', context: '修持結束' },

  // 業力和輪迴
  { id: 'las', tibetan: 'ལས', roman: 'las', khamPronunciation: 'le', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 6, notes: '業，因果業力', context: '基礎教理' },
  { id: 'rgyu_bras', tibetan: 'རྒྱུ་འབྲས', roman: 'rgyu \'bras', khamPronunciation: 'gyu dre', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 7, notes: '因果，因果關係', context: '業力教學' },
  { id: 'khor_ba', tibetan: 'འཁོར་བ', roman: '\'khor ba', khamPronunciation: 'kor wa', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 8, notes: '輪迴，生死流轉', context: '出離心' },
  { id: 'mya_ngan_las_das', tibetan: 'མྱ་ངན་ལས་འདས', roman: 'mya ngan las \'das', khamPronunciation: 'nya ngen le de', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 9, notes: '涅槃，解脫', context: '究竟目標' },
  { id: 'thar_pa', tibetan: 'ཐར་པ', roman: 'thar pa', khamPronunciation: 'tar pa', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 10, notes: '解脫，自由', context: '修持目標' },

  // 四聖諦和八正道
  { id: 'bden_pa_bzhi', tibetan: 'བདེན་པ་བཞི', roman: 'bden pa bzhi', khamPronunciation: 'den pa zhi', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 11, notes: '四聖諦', context: '基礎教理' },
  { id: 'sdug_bsngal', tibetan: 'སྡུག་བསྔལ', roman: 'sdug bsngal', khamPronunciation: 'duk ngel', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 12, notes: '苦，痛苦', context: '第一聖諦' },
  { id: 'kun_byung', tibetan: 'ཀུན་འབྱུང', roman: 'kun \'byung', khamPronunciation: 'kün jung', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 13, notes: '集，苦因', context: '第二聖諦' },
  { id: 'gog_pa', tibetan: 'འགོག་པ', roman: '\'gog pa', khamPronunciation: 'gok pa', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 14, notes: '滅，苦滅', context: '第三聖諦' },
  { id: 'lam', tibetan: 'ལམ', roman: 'lam', khamPronunciation: 'lam', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 15, notes: '道，修行道路', context: '第四聖諦' },

  // 六度波羅蜜
  { id: 'pha_rol_phyin_drug', tibetan: 'ཕ་རོལ་ཕྱིན་དྲུག', roman: 'pha rol phyin drug', khamPronunciation: 'pa röl chin druk', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 16, notes: '六度波羅蜜', context: '菩薩修持' },
  { id: 'sbyin_pa', tibetan: 'སྦྱིན་པ', roman: 'sbyin pa', khamPronunciation: 'jin pa', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 17, notes: '布施，施捨', context: '第一度' },
  { id: 'tshul_khrims', tibetan: 'ཚུལ་ཁྲིམས', roman: 'tshul khrims', khamPronunciation: 'tsül trim', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 18, notes: '持戒，戒律', context: '第二度' },
  { id: 'bzod_pa', tibetan: 'བཟོད་པ', roman: 'bzod pa', khamPronunciation: 'zö pa', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 19, notes: '忍辱，安忍', context: '第三度' },
  { id: 'brtson_grus', tibetan: 'བརྩོན་འགྲུས', roman: 'brtson \'grus', khamPronunciation: 'tsön drü', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 20, notes: '精進，努力', context: '第四度' },

  // 禪定和智慧
  { id: 'bsam_gtan', tibetan: 'བསམ་གཏན', roman: 'bsam gtan', khamPronunciation: 'sam ten', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 21, notes: '禪定，靜慮', context: '第五度' },
  { id: 'shes_rab', tibetan: 'ཤེས་རབ', roman: 'shes rab', khamPronunciation: 'she rap', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 22, notes: '智慧，般若', context: '第六度' },
  { id: 'zhi_gnas', tibetan: 'ཞི་གནས', roman: 'zhi gnas', khamPronunciation: 'zhi ne', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 23, notes: '止，寂止', context: '禪修基礎' },
  { id: 'lhag_mthong', tibetan: 'ལྷག་མཐོང', roman: 'lhag mthong', khamPronunciation: 'lhak tong', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 24, notes: '觀，勝觀', context: '禪修進階' },
  { id: 'zung_jug', tibetan: 'ཟུང་འཇུག', roman: 'zung \'jug', khamPronunciation: 'zung juk', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 25, notes: '止觀雙運', context: '禪修成就' },

  // 空性和中觀
  { id: 'stong_pa_nyid', tibetan: 'སྟོང་པ་ཉིད', roman: 'stong pa nyid', khamPronunciation: 'tong pa nyi', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 26, notes: '空性，空無自性', context: '中觀見地' },
  { id: 'dbu_ma', tibetan: 'དབུ་མ', roman: 'dbu ma', khamPronunciation: 'u ma', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 27, notes: '中觀，中道', context: '哲學見地' },
  { id: 'rang_bzhin_med', tibetan: 'རང་བཞིན་མེད', roman: 'rang bzhin med', khamPronunciation: 'rang zhin me', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 28, notes: '無自性', context: '空性理解' },
  { id: 'rten_byung', tibetan: 'རྟེན་འབྱུང', roman: 'rten \'byung', khamPronunciation: 'ten jung', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 29, notes: '緣起，依緣而起', context: '緣起性空' },
  { id: 'chos_nyid', tibetan: 'ཆོས་ཉིད', roman: 'chos nyid', khamPronunciation: 'chö nyi', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 30, notes: '法性，諸法本性', context: '究竟實相' },

  // 慈悲和菩提心
  { id: 'byams_pa', tibetan: 'བྱམས་པ', roman: 'byams pa', khamPronunciation: 'jam pa', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 31, notes: '慈愛，慈心', context: '四無量心' },
  { id: 'snying_rje', tibetan: 'སྙིང་རྗེ', roman: 'snying rje', khamPronunciation: 'nying je', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 32, notes: '悲心，慈悲', context: '四無量心' },
  { id: 'dga_ba', tibetan: 'དགའ་བ', roman: 'dga\' ba', khamPronunciation: 'ga wa', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 33, notes: '喜心，隨喜', context: '四無量心' },
  { id: 'btang_snyoms', tibetan: 'བཏང་སྙོམས', roman: 'btang snyoms', khamPronunciation: 'tang nyom', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 34, notes: '捨心，平等捨', context: '四無量心' },
  { id: 'tshad_med_bzhi', tibetan: 'ཚད་མེད་བཞི', roman: 'tshad med bzhi', khamPronunciation: 'tse me zhi', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 35, notes: '四無量心', context: '慈悲修持' },

  // 上師和傳承
  { id: 'bla_ma', tibetan: 'བླ་མ', roman: 'bla ma', khamPronunciation: 'lama', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 36, notes: '上師，精神導師', context: '師徒關係' },
  { id: 'brgyud_pa', tibetan: 'བརྒྱུད་པ', roman: 'brgyud pa', khamPronunciation: 'gyü pa', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 37, notes: '傳承，法脈傳承', context: '傳承系統' },
  { id: 'gdams_ngag', tibetan: 'གདམས་ངག', roman: 'gdams ngag', khamPronunciation: 'dam ngak', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 38, notes: '口訣，教授', context: '上師教導' },
  { id: 'lung_bstan', tibetan: 'ལུང་བསྟན', roman: 'lung bstan', khamPronunciation: 'lung ten', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 39, notes: '傳法，口傳', context: '法的傳授' },
  { id: 'dbang_bskur', tibetan: 'དབང་བསྐུར', roman: 'dbang bskur', khamPronunciation: 'wang kur', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 40, notes: '灌頂，授權', context: '密法傳授' },

  // 修持基礎
  { id: 'nyams_len', tibetan: 'ཉམས་ལེན', roman: 'nyams len', khamPronunciation: 'nyam len', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 41, notes: '修持，實修', context: '日常修行' },
  { id: 'thun', tibetan: 'ཐུན', roman: 'thun', khamPronunciation: 'tün', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 42, notes: '座，修法時段', context: '修持安排' },
  { id: 'sngon_gro', tibetan: 'སྔོན་འགྲོ', roman: 'sngon \'gro', khamPronunciation: 'ngön dro', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 43, notes: '前行，預備修持', context: '修持準備' },
  { id: 'dngos_gzhi', tibetan: 'དངོས་གཞི', roman: 'dngos gzhi', khamPronunciation: 'ngö zhi', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 44, notes: '正行，主要修持', context: '核心修法' },
  { id: 'rjes_byang', tibetan: 'རྗེས་བྱང', roman: 'rjes byang', khamPronunciation: 'je jang', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 45, notes: '結行，修持結束', context: '修法圓滿' },

  // 心性和覺性
  { id: 'sems', tibetan: 'སེམས', roman: 'sems', khamPronunciation: 'sem', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 46, notes: '心，心識', context: '心性認識' },
  { id: 'rig_pa', tibetan: 'རིག་པ', roman: 'rig pa', khamPronunciation: 'rik pa', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 47, notes: '覺性，明覺', context: '本覺認識' },
  { id: 'gsal_ba', tibetan: 'གསལ་བ', roman: 'gsal ba', khamPronunciation: 'sel wa', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 48, notes: '明，清明', context: '心性特質' },
  { id: 'stong_ba', tibetan: 'སྟོང་བ', roman: 'stong ba', khamPronunciation: 'tong wa', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 49, notes: '空，空性', context: '心性特質' },
  { id: 'ma_gag', tibetan: 'མ་འགགས', roman: 'ma \'gags', khamPronunciation: 'ma gak', category: 'foundation', level: 1, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 50, notes: '無阻，無礙', context: '心性特質' }
]

// 第二層：前行修持 (100個)
export const preliminaryVocabulary: AdvancedTibetanCard[] = [
  // 四加行
  { id: 'sngon_gro_bzhi', tibetan: 'སྔོན་འགྲོ་བཞི', roman: 'sngon \'gro bzhi', khamPronunciation: 'ngön dro zhi', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 51, notes: '四加行，四前行', context: '基礎修持' },
  { id: 'mi_rtag_pa', tibetan: 'མི་རྟག་པ', roman: 'mi rtag pa', khamPronunciation: 'mi tak pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 52, notes: '無常，變化不定', context: '第一加行' },
  { id: 'dal_byor', tibetan: 'དལ་འབྱོར', roman: 'dal \'byor', khamPronunciation: 'del jor', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 53, notes: '暇滿，珍貴人身', context: '人身難得' },
  { id: 'rnyed_dka', tibetan: 'རྙེད་དཀའ', roman: 'rnyed dka\'', khamPronunciation: 'nye ka', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 54, notes: '難得，不易獲得', context: '人身珍貴' },

  // 皈依修持
  { id: 'skyabs_gsum', tibetan: 'སྐྱབས་གསུམ', roman: 'skyabs gsum', khamPronunciation: 'kyab sum', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 55, notes: '三皈依', context: '皈依修持' },
  { id: 'phyag_tshal', tibetan: 'ཕྱག་འཚལ', roman: 'phyag \'tshal', khamPronunciation: 'chak tsal', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 56, notes: '頂禮，禮拜', context: '身語意供養' },
  { id: 'mchod_pa', tibetan: 'མཆོད་པ', roman: 'mchod pa', khamPronunciation: 'chö pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 57, notes: '供養，獻供', context: '積累資糧' },
  { id: 'tshogs_bsag', tibetan: 'ཚོགས་བསག', roman: 'tshogs bsag', khamPronunciation: 'tsok sak', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 58, notes: '積資，積累資糧', context: '福慧雙修' },

  // 金剛薩埵修持
  { id: 'rdo_rje_sems_dpa', tibetan: 'རྡོ་རྗེ་སེམས་དཔའ', roman: 'rdo rje sems dpa\'', khamPronunciation: 'dor je sem pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 59, notes: '金剛薩埵', context: '淨障修持' },
  { id: 'sdig_sgrib', tibetan: 'སྡིག་སྒྲིབ', roman: 'sdig sgrib', khamPronunciation: 'dik drip', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 60, notes: '罪障，業障', context: '需要淨化' },
  { id: 'bshags_pa', tibetan: 'བཤགས་པ', roman: 'bshags pa', khamPronunciation: 'shak pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 61, notes: '懺悔，悔過', context: '淨障方法' },
  { id: 'sbyang_ba', tibetan: 'སྦྱང་བ', roman: 'sbyang ba', khamPronunciation: 'jang wa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 62, notes: '淨化，清淨', context: '障礙清除' },

  // 曼達供養
  { id: 'mandal', tibetan: 'མཎྜལ', roman: 'mandal', khamPronunciation: 'mendel', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 63, notes: '曼達，宇宙供養', context: '廣大供養' },
  { id: 'ri_rab', tibetan: 'རི་རབ', roman: 'ri rab', khamPronunciation: 'ri rap', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 64, notes: '須彌山，世界中心', context: '曼達供養' },
  { id: 'gling_bzhi', tibetan: 'གླིང་བཞི', roman: 'gling bzhi', khamPronunciation: 'ling zhi', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 65, notes: '四大洲', context: '曼達供養' },
  { id: 'nor_bu', tibetan: 'ནོར་བུ', roman: 'nor bu', khamPronunciation: 'nor bu', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 66, notes: '寶珠，珍寶', context: '供養物品' },

  // 上師瑜伽
  { id: 'bla_ma_rnal_byor', tibetan: 'བླ་མ་རྣལ་འབྱོར', roman: 'bla ma rnal \'byor', khamPronunciation: 'lama nel jor', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 67, notes: '上師瑜伽', context: '上師相應' },
  { id: 'byin_rlabs', tibetan: 'བྱིན་རླབས', roman: 'byin rlabs', khamPronunciation: 'jin lap', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 68, notes: '加持，祝福', context: '上師加持' },
  { id: 'thugs_dam', tibetan: 'ཐུགས་དམ', roman: 'thugs dam', khamPronunciation: 'tuk dam', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 69, notes: '心印，心要', context: '上師心意' },
  { id: 'dbyer_med', tibetan: 'དབྱེར་མེད', roman: 'dbyer med', khamPronunciation: 'yer me', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 70, notes: '無別，不二', context: '師徒一如' },

  // 噶舉派特有前行
  { id: 'phyag_rgya_chen_po', tibetan: 'ཕྱག་རྒྱ་ཆེན་པོ', roman: 'phyag rgya chen po', khamPronunciation: 'chak gya chen po', category: 'preliminary', level: 2, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 4, order: 71, notes: '大手印', context: '噶舉派核心' },
  { id: 'naro_chos_drug', tibetan: 'ནཱ་རོ་ཆོས་དྲུག', roman: 'na ro chos drug', khamPronunciation: 'naro chö druk', category: 'preliminary', level: 2, tradition: 'kagyu', practice: 'common', stage: 'learning', difficulty: 4, order: 72, notes: '那洛六法', context: '噶舉派修法' },
  { id: 'gtum_mo', tibetan: 'གཏུམ་མོ', roman: 'gtum mo', khamPronunciation: 'tum mo', category: 'preliminary', level: 2, tradition: 'kagyu', practice: 'common', stage: 'learning', difficulty: 3, order: 73, notes: '拙火，內火', context: '六法之一' },
  { id: 'sgyu_lus', tibetan: 'སྒྱུ་ལུས', roman: 'sgyu lus', khamPronunciation: 'gyu lü', category: 'preliminary', level: 2, tradition: 'kagyu', practice: 'common', stage: 'learning', difficulty: 3, order: 74, notes: '幻身，幻化身', context: '六法之一' },

  // 寧瑪派特有前行
  { id: 'rdzogs_pa_chen_po', tibetan: 'རྫོགས་པ་ཆེན་པོ', roman: 'rdzogs pa chen po', khamPronunciation: 'dzok pa chen po', category: 'preliminary', level: 2, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 4, order: 75, notes: '大圓滿', context: '寧瑪派核心' },
  { id: 'sems_sde', tibetan: 'སེམས་སྡེ', roman: 'sems sde', khamPronunciation: 'sem de', category: 'preliminary', level: 2, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 3, order: 76, notes: '心部，心性部', context: '大圓滿三部' },
  { id: 'klong_sde', tibetan: 'ཀློང་སྡེ', roman: 'klong sde', khamPronunciation: 'long de', category: 'preliminary', level: 2, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 3, order: 77, notes: '界部，虛空部', context: '大圓滿三部' },
  { id: 'man_ngag_sde', tibetan: 'མན་ངག་སྡེ', roman: 'man ngag sde', khamPronunciation: 'men ngak de', category: 'preliminary', level: 2, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 4, order: 78, notes: '口訣部，竅訣部', context: '大圓滿三部' },

  // 共同前行續
  { id: 'bsod_nams', tibetan: 'བསོད་ནམས', roman: 'bsod nams', khamPronunciation: 'sö nam', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 79, notes: '福德，功德', context: '二資糧' },
  { id: 'ye_shes', tibetan: 'ཡེ་ཤེས', roman: 'ye shes', khamPronunciation: 'ye she', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 80, notes: '智慧，本智', context: '二資糧' },
  { id: 'tshogs_gnyis', tibetan: 'ཚོགས་གཉིས', roman: 'tshogs gnyis', khamPronunciation: 'tsok nyi', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 81, notes: '二資糧', context: '福慧雙修' },
  { id: 'sgrib_gnyis', tibetan: 'སྒྲིབ་གཉིས', roman: 'sgrib gnyis', khamPronunciation: 'drip nyi', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 82, notes: '二障', context: '需要清淨' },

  // 修持方法
  { id: 'bsgom_rim', tibetan: 'བསྒོམ་རིམ', roman: 'bsgom rim', khamPronunciation: 'gom rim', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 83, notes: '修次，修持次第', context: '循序漸進' },
  { id: 'lam_rim', tibetan: 'ལམ་རིམ', roman: 'lam rim', khamPronunciation: 'lam rim', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 84, notes: '道次第', context: '修行階段' },
  { id: 'gdams_pa', tibetan: 'གདམས་པ', roman: 'gdams pa', khamPronunciation: 'dam pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 85, notes: '教授，指導', context: '上師教導' },
  { id: 'khrid_yig', tibetan: 'ཁྲིད་ཡིག', roman: 'khrid yig', khamPronunciation: 'tri yik', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 86, notes: '引導文', context: '修持指南' },

  // 心性認識
  { id: 'sems_nyid', tibetan: 'སེམས་ཉིད', roman: 'sems nyid', khamPronunciation: 'sem nyi', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 87, notes: '心性，心之本性', context: '心性認識' },
  { id: 'gzhi_rig', tibetan: 'གཞི་རིག', roman: 'gzhi rig', khamPronunciation: 'zhi rik', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 88, notes: '基覺，根本覺性', context: '本覺認識' },
  { id: 'kun_gzhi', tibetan: 'ཀུན་གཞི', roman: 'kun gzhi', khamPronunciation: 'kün zhi', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 89, notes: '阿賴耶，根本識', context: '八識之一' },
  { id: 'rnam_shes', tibetan: 'རྣམ་ཤེས', roman: 'rnam shes', khamPronunciation: 'nam she', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 90, notes: '識，意識', context: '心識分類' },

  // 禪修基礎
  { id: 'bsgom_pa', tibetan: 'བསྒོམ་པ', roman: 'bsgom pa', khamPronunciation: 'gom pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 91, notes: '修習，禪修', context: '修持方法' },
  { id: 'dmigs_pa', tibetan: 'དམིགས་པ', roman: 'dmigs pa', khamPronunciation: 'mik pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 92, notes: '專注，所緣', context: '禪修對象' },
  { id: 'mi_dmigs', tibetan: 'མི་དམིགས', roman: 'mi dmigs', khamPronunciation: 'mi mik', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 93, notes: '無緣，無所緣', context: '高級禪修' },
  { id: 'gnyug_ma', tibetan: 'གཉུག་མ', roman: 'gnyug ma', khamPronunciation: 'nyuk ma', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 94, notes: '本然，自然', context: '自然狀態' },

  // 障礙和對治
  { id: 'bar_chad', tibetan: 'བར་ཆད', roman: 'bar chad', khamPronunciation: 'bar che', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 95, notes: '障礙，違緣', context: '修持困難' },
  { id: 'gnyen_po', tibetan: 'གཉེན་པོ', roman: 'gnyen po', khamPronunciation: 'nyen po', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 96, notes: '對治，對治法', context: '克服障礙' },
  { id: 'nyon_mongs', tibetan: 'ཉོན་མོངས', roman: 'nyon mongs', khamPronunciation: 'nyön mong', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 97, notes: '煩惱，情緒', context: '心理障礙' },
  { id: 'zhi_ba', tibetan: 'ཞི་བ', roman: 'zhi ba', khamPronunciation: 'zhi wa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 98, notes: '寂靜，平靜', context: '煩惱對治' },

  // 修持成果
  { id: 'nyams', tibetan: 'ཉམས', roman: 'nyams', khamPronunciation: 'nyam', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 99, notes: '覺受，體驗', context: '修持體驗' },
  { id: 'rtogs_pa', tibetan: 'རྟོགས་པ', roman: 'rtogs pa', khamPronunciation: 'tok pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 100, notes: '證悟，了悟', context: '修持成果' },
  { id: 'mthong_ba', tibetan: 'མཐོང་བ', roman: 'mthong ba', khamPronunciation: 'tong wa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 101, notes: '見，現觀', context: '直接體驗' },
  { id: 'myong_ba', tibetan: 'མྱོང་བ', roman: 'myong ba', khamPronunciation: 'nyong wa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 102, notes: '受，感受', context: '體驗層面' },

  // 傳承祖師
  { id: 'tilopa', tibetan: 'ཏི་ལོ་པ', roman: 'ti lo pa', khamPronunciation: 'tilopa', category: 'preliminary', level: 2, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 2, order: 103, notes: '帝洛巴', context: '噶舉祖師' },
  { id: 'naropa', tibetan: 'ནཱ་རོ་པ', roman: 'na ro pa', khamPronunciation: 'naropa', category: 'preliminary', level: 2, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 2, order: 104, notes: '那洛巴', context: '噶舉祖師' },
  { id: 'marpa', tibetan: 'མར་པ', roman: 'mar pa', khamPronunciation: 'marpa', category: 'preliminary', level: 2, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 2, order: 105, notes: '瑪爾巴', context: '噶舉祖師' },
  { id: 'milarepa', tibetan: 'མི་ལ་རས་པ', roman: 'mi la ras pa', khamPronunciation: 'milarepa', category: 'preliminary', level: 2, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 3, order: 106, notes: '密勒日巴', context: '噶舉祖師' },

  // 寧瑪祖師
  { id: 'padmasambhava', tibetan: 'པདྨ་སམྦྷ་ཝ', roman: 'padma sambha wa', khamPronunciation: 'pema sambhawa', category: 'preliminary', level: 2, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 3, order: 107, notes: '蓮花生大士', context: '寧瑪祖師' },
  { id: 'garab_dorje', tibetan: 'དགའ་རབ་རྡོ་རྗེ', roman: 'dga\' rab rdo rje', khamPronunciation: 'garap dor je', category: 'preliminary', level: 2, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 4, order: 108, notes: '極喜金剛', context: '大圓滿祖師' },
  { id: 'manjushrimitra', tibetan: 'འཇམ་དཔལ་བཤེས་གཉེན', roman: '\'jam dpal bshes gnyen', khamPronunciation: 'jam pel she nyen', category: 'preliminary', level: 2, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 4, order: 109, notes: '文殊友', context: '大圓滿祖師' },
  { id: 'shri_singha', tibetan: 'ཤྲཱི་སིང་ཧ', roman: 'shri sing ha', khamPronunciation: 'shri singha', category: 'preliminary', level: 2, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 3, order: 110, notes: '吉祥獅子', context: '大圓滿祖師' },

  // 修持環境
  { id: 'ri_khrod', tibetan: 'རི་ཁྲོད', roman: 'ri khrod', khamPronunciation: 'ri trö', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 111, notes: '山林，寂靜處', context: '修持環境' },
  { id: 'dben_pa', tibetan: 'དབེན་པ', roman: 'dben pa', khamPronunciation: 'wen pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 112, notes: '寂靜，獨處', context: '修持條件' },
  { id: 'mtshams', tibetan: 'མཚམས', roman: 'mtshams', khamPronunciation: 'tsam', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 113, notes: '閉關，隱修', context: '專修期間' },
  { id: 'sgrub_khang', tibetan: 'སྒྲུབ་ཁང', roman: 'sgrub khang', khamPronunciation: 'drub khang', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 114, notes: '修行室', context: '修持場所' },

  // 日常修持
  { id: 'nyin_re', tibetan: 'ཉིན་རེ', roman: 'nyin re', khamPronunciation: 'nyin re', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 115, notes: '每日，日常', context: '持續修持' },
  { id: 'dus_bzhi', tibetan: 'དུས་བཞི', roman: 'dus bzhi', khamPronunciation: 'dü zhi', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 116, notes: '四時，四座', context: '修持時間' },
  { id: 'thun_drug', tibetan: 'ཐུན་དྲུག', roman: 'thun drug', khamPronunciation: 'tün druk', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 117, notes: '六座', context: '密集修持' },
  { id: 'rgyun_du', tibetan: 'རྒྱུན་དུ', roman: 'rgyun du', khamPronunciation: 'gyün du', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 118, notes: '持續，不斷', context: '恆常修持' },

  // 修持態度
  { id: 'dad_pa', tibetan: 'དད་པ', roman: 'dad pa', khamPronunciation: 'de pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 119, notes: '信心，信仰', context: '修持基礎' },
  { id: 'mos_gus', tibetan: 'མོས་གུས', roman: 'mos gus', khamPronunciation: 'mö gü', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 120, notes: '敬信，虔誠', context: '對上師三寶' },
  { id: 'brtson_grus', tibetan: 'བརྩོན་འགྲུས', roman: 'brtson \'grus', khamPronunciation: 'tsön drü', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 121, notes: '精進，努力', context: '修持態度' },
  { id: 'sbyor_ba', tibetan: 'སྦྱོར་བ', roman: 'sbyor ba', khamPronunciation: 'jor wa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 122, notes: '修習，練習', context: '實際修持' },

  // 修持指導
  { id: 'gdams_ngag', tibetan: 'གདམས་ངག', roman: 'gdams ngag', khamPronunciation: 'dam ngak', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 123, notes: '口訣，教授', context: '上師指導' },
  { id: 'man_ngag', tibetan: 'མན་ངག', roman: 'man ngag', khamPronunciation: 'men ngak', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 124, notes: '竅訣，秘訣', context: '精要教授' },
  { id: 'zab_khrid', tibetan: 'ཟབ་ཁྲིད', roman: 'zab khrid', khamPronunciation: 'zap tri', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 125, notes: '深引導', context: '高深指導' },
  { id: 'nyams_khrid', tibetan: 'ཉམས་ཁྲིད', roman: 'nyams khrid', khamPronunciation: 'nyam tri', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 126, notes: '實修引導', context: '體驗指導' },

  // 修持驗證
  { id: 'rtags_mtshan', tibetan: 'རྟགས་མཚན', roman: 'rtags mtshan', khamPronunciation: 'tak tsen', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 127, notes: '徵象，標誌', context: '修持驗證' },
  { id: 'snang_ba', tibetan: 'སྣང་བ', roman: 'snang ba', khamPronunciation: 'nang wa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 128, notes: '顯現，現象', context: '修持體驗' },
  { id: 'gsal_ba', tibetan: 'གསལ་བ', roman: 'gsal ba', khamPronunciation: 'sel wa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 129, notes: '明，清明', context: '心性特質' },
  { id: 'bde_ba', tibetan: 'བདེ་བ', roman: 'bde ba', khamPronunciation: 'de wa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 130, notes: '樂，安樂', context: '修持體驗' },

  // 修持困難
  { id: 'rmugs_pa', tibetan: 'རྨུགས་པ', roman: 'rmugs pa', khamPronunciation: 'muk pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 131, notes: '昏沉，昏昧', context: '禪修障礙' },
  { id: 'rgod_pa', tibetan: 'རྒོད་པ', roman: 'rgod pa', khamPronunciation: 'gö pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 132, notes: '掉舉，散亂', context: '禪修障礙' },
  { id: 'le_lo', tibetan: 'ལེ་ལོ', roman: 'le lo', khamPronunciation: 'le lo', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 133, notes: '懈怠，懶惰', context: '修持障礙' },
  { id: 'yid_mi_bde', tibetan: 'ཡིད་མི་བདེ', roman: 'yid mi bde', khamPronunciation: 'yi mi de', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 134, notes: '不安，煩躁', context: '心理狀態' },

  // 修持成就
  { id: 'dngos_grub', tibetan: 'དངོས་གྲུབ', roman: 'dngos grub', khamPronunciation: 'ngö drup', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 135, notes: '成就，悉地', context: '修持成果' },
  { id: 'mchog_grub', tibetan: 'མཆོག་གྲུབ', roman: 'mchog grub', khamPronunciation: 'chok drup', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 136, notes: '勝成就', context: '最高成就' },
  { id: 'thun_mong_grub', tibetan: 'ཐུན་མོང་གྲུབ', roman: 'thun mong grub', khamPronunciation: 'tün mong drup', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 137, notes: '共成就', context: '一般成就' },
  { id: 'thun_min_grub', tibetan: 'ཐུན་མིན་གྲུབ', roman: 'thun min grub', khamPronunciation: 'tün min drup', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 138, notes: '不共成就', context: '特殊成就' },

  // 修持輔助
  { id: 'rten', tibetan: 'རྟེན', roman: 'rten', khamPronunciation: 'ten', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 139, notes: '所依，依靠', context: '修持支撐' },
  { id: 'brten_pa', tibetan: 'བརྟེན་པ', roman: 'brten pa', khamPronunciation: 'ten pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 140, notes: '依靠，依止', context: '修持方法' },
  { id: 'rogs_pa', tibetan: 'རོགས་པ', roman: 'rogs pa', khamPronunciation: 'rok pa', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 141, notes: '助伴，協助', context: '修持支援' },
  { id: 'rkyen', tibetan: 'རྐྱེན', roman: 'rkyen', khamPronunciation: 'kyen', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 142, notes: '緣，條件', context: '修持條件' },

  // 修持時機
  { id: 'dus_tshod', tibetan: 'དུས་ཚོད', roman: 'dus tshod', khamPronunciation: 'dü tsö', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 143, notes: '時間，時機', context: '修持安排' },
  { id: 'skabs', tibetan: 'སྐབས', roman: 'skabs', khamPronunciation: 'kap', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 144, notes: '時機，機會', context: '修持時機' },
  { id: 'gnas_skabs', tibetan: 'གནས་སྐབས', roman: 'gnas skabs', khamPronunciation: 'ne kap', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 145, notes: '情況，狀況', context: '修持環境' },
  { id: 'tshe_ring', tibetan: 'ཚེ་རིང', roman: 'tshe ring', khamPronunciation: 'tshe ring', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 146, notes: '長壽，壽命', context: '修持時間' },

  // 修持結果
  { id: 'bras_bu', tibetan: 'འབྲས་བུ', roman: '\'bras bu', khamPronunciation: 'dre bu', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 147, notes: '果，結果', context: '修持成果' },
  { id: 'phan_yon', tibetan: 'ཕན་ཡོན', roman: 'phan yon', khamPronunciation: 'pen yön', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 148, notes: '利益，好處', context: '修持利益' },
  { id: 'yon_tan', tibetan: 'ཡོན་ཏན', roman: 'yon tan', khamPronunciation: 'yön ten', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 149, notes: '功德，品質', context: '修持品質' },
  { id: 'mthus', tibetan: 'མཐུས', roman: 'mthus', khamPronunciation: 'tü', category: 'preliminary', level: 2, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 150, notes: '力量，威力', context: '修持力量' }
]

// 第三層：見地修持 (100個)
export const viewVocabulary: AdvancedTibetanCard[] = [
  // 大手印見地
  { id: 'lta_ba', tibetan: 'ལྟ་བ', roman: 'lta ba', khamPronunciation: 'ta wa', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 151, notes: '見地，見解', context: '哲學觀點' },
  { id: 'phyag_rgya_chen_po_lta', tibetan: 'ཕྱག་རྒྱ་ཆེན་པོ་ལྟ', roman: 'phyag rgya chen po lta', khamPronunciation: 'chak gya chen po ta', category: 'view', level: 3, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 4, order: 152, notes: '大手印見地', context: '噶舉派核心見地' },
  { id: 'gnyug_ma_rig_pa', tibetan: 'གཉུག་མ་རིག་པ', roman: 'gnyug ma rig pa', khamPronunciation: 'nyuk ma rik pa', category: 'view', level: 3, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 4, order: 153, notes: '本然覺性', context: '大手印本質' },
  { id: 'ma_bcos_pa', tibetan: 'མ་བཅོས་པ', roman: 'ma bcos pa', khamPronunciation: 'ma chö pa', category: 'view', level: 3, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 3, order: 154, notes: '無造作，自然', context: '大手印特質' },
  { id: 'lhan_cig_skyes_pa', tibetan: 'ལྷན་ཅིག་སྐྱེས་པ', roman: 'lhan cig skyes pa', khamPronunciation: 'lhen chik kye pa', category: 'view', level: 3, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 4, order: 155, notes: '俱生，本具', context: '大手印本性' },

  // 大圓滿見地
  { id: 'rdzogs_chen_lta', tibetan: 'རྫོགས་ཆེན་ལྟ', roman: 'rdzogs chen lta', khamPronunciation: 'dzok chen ta', category: 'view', level: 3, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 4, order: 156, notes: '大圓滿見地', context: '寧瑪派核心見地' },
  { id: 'ka_dag', tibetan: 'ཀ་དག', roman: 'ka dag', khamPronunciation: 'ka dak', category: 'view', level: 3, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 3, order: 157, notes: '本淨，原始清淨', context: '大圓滿本質' },
  { id: 'lhun_grub', tibetan: 'ལྷུན་གྲུབ', roman: 'lhun grub', khamPronunciation: 'lhün drup', category: 'view', level: 3, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 3, order: 158, notes: '任運，自然成就', context: '大圓滿特質' },
  { id: 'ye_nas_dag', tibetan: 'ཡེ་ནས་དག', roman: 'ye nas dag', khamPronunciation: 'ye ne dak', category: 'view', level: 3, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 3, order: 159, notes: '本來清淨', context: '原始狀態' },
  { id: 'gzhi_gnas_lugs', tibetan: 'གཞི་གནས་ལུགས', roman: 'gzhi gnas lugs', khamPronunciation: 'zhi ne luk', category: 'view', level: 3, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 4, order: 160, notes: '基之住法', context: '根本狀態' },

  // 空性見地
  { id: 'stong_nyid_lta', tibetan: 'སྟོང་ཉིད་ལྟ', roman: 'stong nyid lta', khamPronunciation: 'tong nyi ta', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 161, notes: '空性見地', context: '中觀見解' },
  { id: 'rang_stong', tibetan: 'རང་སྟོང', roman: 'rang stong', khamPronunciation: 'rang tong', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 162, notes: '自空，自性空', context: '中觀應成派' },
  { id: 'gzhan_stong', tibetan: 'གཞན་སྟོང', roman: 'gzhan stong', khamPronunciation: 'zhen tong', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 163, notes: '他空', context: '中觀他空派' },
  { id: 'spros_bral', tibetan: 'སྤྲོས་བྲལ', roman: 'spros bral', khamPronunciation: 'trö drel', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 164, notes: '離戲，無戲論', context: '究竟見地' },
  { id: 'mtha_bral', tibetan: 'མཐའ་བྲལ', roman: 'mtha\' bral', khamPronunciation: 'ta drel', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 165, notes: '離邊，無邊見', context: '中道見地' },

  // 心性認識
  { id: 'sems_nyid_ngos_bzung', tibetan: 'སེམས་ཉིད་ངོས་བཟུང', roman: 'sems nyid ngos bzung', khamPronunciation: 'sem nyi ngö zung', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 166, notes: '心性認識', context: '直指心性' },
  { id: 'ngo_sprod', tibetan: 'ངོ་སྤྲོད', roman: 'ngo sprod', khamPronunciation: 'ngo trö', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 167, notes: '指示，介紹', context: '心性指示' },
  { id: 'ngo_shes', tibetan: 'ངོ་ཤེས', roman: 'ngo shes', khamPronunciation: 'ngo she', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 168, notes: '認識，了知', context: '心性了知' },
  { id: 'rang_ngo', tibetan: 'རང་ངོ', roman: 'rang ngo', khamPronunciation: 'rang ngo', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 169, notes: '自面，本面目', context: '本來面目' },
  { id: 'gdod_ma', tibetan: 'གདོད་མ', roman: 'gdod ma', khamPronunciation: 'dö ma', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 170, notes: '本初，原始', context: '原始狀態' },

  // 覺性層面
  { id: 'rig_pa_gcer_bu', tibetan: 'རིག་པ་གཅེར་བུ', roman: 'rig pa gcer bu', khamPronunciation: 'rik pa cher bu', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 171, notes: '赤裸覺性', context: '純然覺知' },
  { id: 'ye_shes_kyi_rig_pa', tibetan: 'ཡེ་ཤེས་ཀྱི་རིག་པ', roman: 'ye shes kyi rig pa', khamPronunciation: 'ye she kyi rik pa', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 172, notes: '智慧覺性', context: '本智覺知' },
  { id: 'kun_gzhi_rig_pa', tibetan: 'ཀུན་གཞི་རིག་པ', roman: 'kun gzhi rig pa', khamPronunciation: 'kün zhi rik pa', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 173, notes: '基覺性', context: '根本覺性' },
  { id: 'gsal_rig', tibetan: 'གསལ་རིག', roman: 'gsal rig', khamPronunciation: 'sel rik', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 174, notes: '明覺，清明覺知', context: '覺性特質' },
  { id: 'stong_rig', tibetan: 'སྟོང་རིག', roman: 'stong rig', khamPronunciation: 'tong rik', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 175, notes: '空覺，空性覺知', context: '覺性特質' },

  // 無二見地
  { id: 'gnyis_med', tibetan: 'གཉིས་མེད', roman: 'gnyis med', khamPronunciation: 'nyi me', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 176, notes: '無二，不二', context: '究竟見地' },
  { id: 'bdag_gzhan_gnyis_med', tibetan: 'བདག་གཞན་གཉིས་མེད', roman: 'bdag gzhan gnyis med', khamPronunciation: 'dak zhen nyi me', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 177, notes: '自他無二', context: '慈悲見地' },
  { id: 'samsara_nirvana_gnyis_med', tibetan: 'འཁོར་འདས་གཉིས་མེད', roman: '\'khor \'das gnyis med', khamPronunciation: 'kor de nyi me', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 178, notes: '輪涅無二', context: '究竟見地' },
  { id: 'snang_stong_gnyis_med', tibetan: 'སྣང་སྟོང་གཉིས་མེད', roman: 'snang stong gnyis med', khamPronunciation: 'nang tong nyi me', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 179, notes: '顯空無二', context: '現空不二' },
  { id: 'bde_stong_gnyis_med', tibetan: 'བདེ་སྟོང་གཉིས་མེད', roman: 'bde stong gnyis med', khamPronunciation: 'de tong nyi me', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 180, notes: '樂空無二', context: '樂空不二' },

  // 法身見地
  { id: 'chos_sku', tibetan: 'ཆོས་སྐུ', roman: 'chos sku', khamPronunciation: 'chö ku', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 181, notes: '法身', context: '三身之一' },
  { id: 'chos_dbyings', tibetan: 'ཆོས་དབྱིངས', roman: 'chos dbyings', khamPronunciation: 'chö ying', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 182, notes: '法界，法性空間', context: '究竟實相' },
  { id: 'chos_nyid_sku', tibetan: 'ཆོས་ཉིད་སྐུ', roman: 'chos nyid sku', khamPronunciation: 'chö nyi ku', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 183, notes: '法性身', context: '法身本質' },
  { id: 'ye_shes_sku', tibetan: 'ཡེ་ཤེས་སྐུ', roman: 'ye shes sku', khamPronunciation: 'ye she ku', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 184, notes: '智慧身', context: '法身功德' },
  { id: 'don_dam_sku', tibetan: 'དོན་དམ་སྐུ', roman: 'don dam sku', khamPronunciation: 'dön dam ku', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 185, notes: '勝義身', context: '究竟法身' },

  // 本覺智慧
  { id: 'rang_byung_ye_shes', tibetan: 'རང་བྱུང་ཡེ་ཤེས', roman: 'rang byung ye shes', khamPronunciation: 'rang jung ye she', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 186, notes: '自生智慧', context: '本具智慧' },
  { id: 'lhan_skyes_ye_shes', tibetan: 'ལྷན་སྐྱེས་ཡེ་ཤེས', roman: 'lhan skyes ye shes', khamPronunciation: 'lhen kye ye she', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 187, notes: '俱生智慧', context: '與生俱來智慧' },
  { id: 'gnyug_ma_ye_shes', tibetan: 'གཉུག་མ་ཡེ་ཤེས', roman: 'gnyug ma ye shes', khamPronunciation: 'nyuk ma ye she', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 188, notes: '本然智慧', context: '自然智慧' },
  { id: 'ma_bsgom_ye_shes', tibetan: 'མ་བསྒོམ་ཡེ་ཤེས', roman: 'ma bsgom ye shes', khamPronunciation: 'ma gom ye she', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 189, notes: '無修智慧', context: '不修而得智慧' },
  { id: 'ma_bcos_ye_shes', tibetan: 'མ་བཅོས་ཡེ་ཤེས', roman: 'ma bcos ye shes', khamPronunciation: 'ma chö ye she', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 190, notes: '無造作智慧', context: '自然智慧' },

  // 五智
  { id: 'ye_shes_lnga', tibetan: 'ཡེ་ཤེས་ལྔ', roman: 'ye shes lnga', khamPronunciation: 'ye she nga', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 191, notes: '五智', context: '五種本智' },
  { id: 'me_long_ye_shes', tibetan: 'མེ་ལོང་ཡེ་ཤེས', roman: 'me long ye shes', khamPronunciation: 'me long ye she', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 192, notes: '大圓鏡智', context: '五智之一' },
  { id: 'mnyam_nyid_ye_shes', tibetan: 'མཉམ་ཉིད་ཡེ་ཤེས', roman: 'mnyam nyid ye shes', khamPronunciation: 'nyam nyi ye she', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 193, notes: '平等性智', context: '五智之一' },
  { id: 'so_sor_rtog_ye_shes', tibetan: 'སོ་སོར་རྟོག་ཡེ་ཤེས', roman: 'so sor rtog ye shes', khamPronunciation: 'so sor tok ye she', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 5, order: 194, notes: '妙觀察智', context: '五智之一' },
  { id: 'bya_grub_ye_shes', tibetan: 'བྱ་གྲུབ་ཡེ་ཤེས', roman: 'bya grub ye shes', khamPronunciation: 'ja drup ye she', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 195, notes: '成所作智', context: '五智之一' },

  // 見地修持
  { id: 'lta_sgom', tibetan: 'ལྟ་སྒོམ', roman: 'lta sgom', khamPronunciation: 'ta gom', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 196, notes: '見修，見地修持', context: '見修不二' },
  { id: 'lta_ba_mtho_ba', tibetan: 'ལྟ་བ་མཐོ་བ', roman: 'lta ba mtho ba', khamPronunciation: 'ta wa to wa', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 197, notes: '見地高', context: '高深見地' },
  { id: 'spyod_pa_dma_ba', tibetan: 'སྤྱོད་པ་དམའ་བ', roman: 'spyod pa dma\' ba', khamPronunciation: 'chö pa ma wa', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 198, notes: '行為低', context: '謙卑行為' },
  { id: 'lta_spyod_mthun', tibetan: 'ལྟ་སྤྱོད་མཐུན', roman: 'lta spyod mthun', khamPronunciation: 'ta chö tün', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 199, notes: '見行相符', context: '見行一致' },
  { id: 'lta_ba_dag', tibetan: 'ལྟ་བ་དག', roman: 'lta ba dag', khamPronunciation: 'ta wa dak', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 200, notes: '見地清淨', context: '正見' },

  // 見地偏差
  { id: 'lta_ba_log', tibetan: 'ལྟ་བ་ལོག', roman: 'lta ba log', khamPronunciation: 'ta wa lok', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 201, notes: '見地錯誤', context: '邪見' },
  { id: 'mu_stegs', tibetan: 'མུ་སྟེགས', roman: 'mu stegs', khamPronunciation: 'mu tek', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 202, notes: '外道，異教', context: '非佛教見地' },
  { id: 'rtag_lta', tibetan: 'རྟག་ལྟ', roman: 'rtag lta', khamPronunciation: 'tak ta', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 203, notes: '常見', context: '邊見之一' },
  { id: 'chad_lta', tibetan: 'ཆད་ལྟ', roman: 'chad lta', khamPronunciation: 'che ta', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 204, notes: '斷見', context: '邊見之一' },
  { id: 'mtha_gnyis', tibetan: 'མཐའ་གཉིས', roman: 'mtha\' gnyis', khamPronunciation: 'ta nyi', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 205, notes: '二邊', context: '常斷二見' },

  // 見地深化
  { id: 'lta_ba_zab_mo', tibetan: 'ལྟ་བ་ཟབ་མོ', roman: 'lta ba zab mo', khamPronunciation: 'ta wa zap mo', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 206, notes: '深見，甚深見地', context: '高深見地' },
  { id: 'don_la_nges_pa', tibetan: 'དོན་ལ་ངེས་པ', roman: 'don la nges pa', khamPronunciation: 'dön la nge pa', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 207, notes: '義決定', context: '見地確定' },
  { id: 'the_tshom_gcod', tibetan: 'ཐེ་ཚོམ་གཅོད', roman: 'the tshom gcod', khamPronunciation: 'te tsom chö', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 208, notes: '斷疑', context: '消除疑惑' },
  { id: 'yid_ches', tibetan: 'ཡིད་ཆེས', roman: 'yid ches', khamPronunciation: 'yi che', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 209, notes: '信解，確信', context: '見地確信' },
  { id: 'nges_shes', tibetan: 'ངེས་ཤེས', roman: 'nges shes', khamPronunciation: 'nge she', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 210, notes: '決定知', context: '確定了知' },

  // 見地傳承
  { id: 'lta_brgyud', tibetan: 'ལྟ་བརྒྱུད', roman: 'lta brgyud', khamPronunciation: 'ta gyü', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 211, notes: '見傳承', context: '見地傳承' },
  { id: 'dgongs_pa', tibetan: 'དགོངས་པ', roman: 'dgongs pa', khamPronunciation: 'gong pa', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 212, notes: '密意，本意', context: '佛意' },
  { id: 'zhal_gdams', tibetan: 'ཞལ་གདམས', roman: 'zhal gdams', khamPronunciation: 'zhal dam', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 213, notes: '口教，親授', context: '上師教授' },
  { id: 'snyan_brgyud', tibetan: 'སྙན་བརྒྱུད', roman: 'snyan brgyud', khamPronunciation: 'nyen gyü', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 214, notes: '耳傳，口傳', context: '密傳教授' },
  { id: 'thugs_brgyud', tibetan: 'ཐུགས་བརྒྱུད', roman: 'thugs brgyud', khamPronunciation: 'tuk gyü', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 215, notes: '心傳，意傳', context: '心心相印' },

  // 見地體驗
  { id: 'mthong_snang', tibetan: 'མཐོང་སྣང', roman: 'mthong snang', khamPronunciation: 'tong nang', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 216, notes: '見相，見到顯現', context: '見地體驗' },
  { id: 'nyams_snang', tibetan: 'ཉམས་སྣང', roman: 'nyams snang', khamPronunciation: 'nyam nang', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 217, notes: '覺受顯現', context: '修持體驗' },
  { id: 'rtogs_snang', tibetan: 'རྟོགས་སྣང', roman: 'rtogs snang', khamPronunciation: 'tok nang', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 218, notes: '證悟顯現', context: '證悟體驗' },
  { id: 'ye_shes_snang', tibetan: 'ཡེ་ཤེས་སྣང', roman: 'ye shes snang', khamPronunciation: 'ye she nang', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 219, notes: '智慧顯現', context: '智慧體驗' },
  { id: 'chos_nyid_snang', tibetan: 'ཆོས་ཉིད་སྣང', roman: 'chos nyid snang', khamPronunciation: 'chö nyi nang', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 220, notes: '法性顯現', context: '法性體驗' },

  // 見地穩固
  { id: 'lta_ba_brtan', tibetan: 'ལྟ་བ་བརྟན', roman: 'lta ba brtan', khamPronunciation: 'ta wa ten', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 221, notes: '見地穩固', context: '見地穩定' },
  { id: 'mi_gyo_ba', tibetan: 'མི་གཡོ་བ', roman: 'mi gyo ba', khamPronunciation: 'mi yo wa', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 222, notes: '不動，穩定', context: '見地不動' },
  { id: 'g_yo_med', tibetan: 'གཡོ་མེད', roman: 'g.yo med', khamPronunciation: 'yo me', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 223, notes: '無動搖', context: '見地穩定' },
  { id: 'nges_pa_can', tibetan: 'ངེས་པ་ཅན', roman: 'nges pa can', khamPronunciation: 'nge pa chen', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 224, notes: '有決定', context: '見地確定' },
  { id: 'the_tshom_med', tibetan: 'ཐེ་ཚོམ་མེད', roman: 'the tshom med', khamPronunciation: 'te tsom me', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 225, notes: '無疑', context: '無疑惑' },

  // 見地功德
  { id: 'lta_ba_yon_tan', tibetan: 'ལྟ་བ་ཡོན་ཏན', roman: 'lta ba yon tan', khamPronunciation: 'ta wa yön ten', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 226, notes: '見地功德', context: '正見利益' },
  { id: 'thar_pa_sgo', tibetan: 'ཐར་པ་སྒོ', roman: 'thar pa sgo', khamPronunciation: 'tar pa go', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 227, notes: '解脫門', context: '解脫之門' },
  { id: 'byang_chub_sems', tibetan: 'བྱང་ཆུབ་སེམས', roman: 'byang chub sems', khamPronunciation: 'jang chup sem', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 228, notes: '菩提心', context: '覺悟之心' },
  { id: 'sangs_rgyas_sa', tibetan: 'སངས་རྒྱས་ས', roman: 'sangs rgyas sa', khamPronunciation: 'sang gye sa', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 229, notes: '佛地', context: '成佛境界' },
  { id: 'mchog_gi_dngos_grub', tibetan: 'མཆོག་གི་དངོས་གྲུབ', roman: 'mchog gi dngos grub', khamPronunciation: 'chok gi ngö drup', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 230, notes: '勝成就', context: '最高成就' },

  // 見地障礙
  { id: 'lta_ba_sgrib', tibetan: 'ལྟ་བ་སྒྲིབ', roman: 'lta ba sgrib', khamPronunciation: 'ta wa drip', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 231, notes: '見障', context: '見地障礙' },
  { id: 'shes_sgrib', tibetan: 'ཤེས་སྒྲིབ', roman: 'shes sgrib', khamPronunciation: 'she drip', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 232, notes: '所知障', context: '智慧障礙' },
  { id: 'nyon_sgrib', tibetan: 'ཉོན་སྒྲིབ', roman: 'nyon sgrib', khamPronunciation: 'nyön drip', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 233, notes: '煩惱障', context: '情緒障礙' },
  { id: 'bag_chags', tibetan: 'བག་ཆགས', roman: 'bag chags', khamPronunciation: 'bak chak', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 234, notes: '習氣', context: '潛在傾向' },
  { id: 'kun_tu_rtog', tibetan: 'ཀུན་ཏུ་རྟོག', roman: 'kun tu rtog', khamPronunciation: 'kün tu tok', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 235, notes: '遍計，遍計所執', context: '妄想執著' },

  // 見地清淨
  { id: 'lta_ba_dag_pa', tibetan: 'ལྟ་བ་དག་པ', roman: 'lta ba dag pa', khamPronunciation: 'ta wa dak pa', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 236, notes: '見地清淨', context: '正見清淨' },
  { id: 'sgrib_pa_dag', tibetan: 'སྒྲིབ་པ་དག', roman: 'sgrib pa dag', khamPronunciation: 'drip pa dak', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 237, notes: '障礙清淨', context: '障礙淨除' },
  { id: 'bag_chags_dag', tibetan: 'བག་ཆགས་དག', roman: 'bag chags dag', khamPronunciation: 'bak chak dak', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 238, notes: '習氣清淨', context: '習氣淨除' },
  { id: 'kun_rtog_dag', tibetan: 'ཀུན་རྟོག་དག', roman: 'kun rtog dag', khamPronunciation: 'kün tok dak', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 239, notes: '分別清淨', context: '分別念淨除' },
  { id: 'rnam_dag', tibetan: 'རྣམ་དག', roman: 'rnam dag', khamPronunciation: 'nam dak', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 240, notes: '完全清淨', context: '究竟清淨' },

  // 見地成熟
  { id: 'lta_ba_smin', tibetan: 'ལྟ་བ་སྨིན', roman: 'lta ba smin', khamPronunciation: 'ta wa min', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 241, notes: '見地成熟', context: '見地圓熟' },
  { id: 'rdzogs_pa', tibetan: 'རྫོགས་པ', roman: 'rdzogs pa', khamPronunciation: 'dzok pa', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 242, notes: '圓滿，完成', context: '見地圓滿' },
  { id: 'yongs_su_rdzogs', tibetan: 'ཡོངས་སུ་རྫོགས', roman: 'yongs su rdzogs', khamPronunciation: 'yong su dzok', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 243, notes: '完全圓滿', context: '究竟圓滿' },
  { id: 'mthar_phyin', tibetan: 'མཐར་ཕྱིན', roman: 'mthar phyin', khamPronunciation: 'tar chin', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 244, notes: '到究竟', context: '達到究竟' },
  { id: 'don_la_pheb', tibetan: 'དོན་ལ་ཕེབ', roman: 'don la pheb', khamPronunciation: 'dön la pep', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 245, notes: '達到義', context: '達到目標' },

  // 見地應用
  { id: 'lta_ba_spyod', tibetan: 'ལྟ་བ་སྤྱོད', roman: 'lta ba spyod', khamPronunciation: 'ta wa chö', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 246, notes: '見地行為', context: '見行合一' },
  { id: 'spyod_pa_la_bab', tibetan: 'སྤྱོད་པ་ལ་བབ', roman: 'spyod pa la bab', khamPronunciation: 'chö pa la bap', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 247, notes: '落實到行為', context: '見地實踐' },
  { id: 'nyams_su_len', tibetan: 'ཉམས་སུ་ལེན', roman: 'nyams su len', khamPronunciation: 'nyam su len', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 248, notes: '實修，體驗', context: '見地實修' },
  { id: 'lag_len', tibetan: 'ལག་ལེན', roman: 'lag len', khamPronunciation: 'lak len', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 249, notes: '實踐，修持', context: '實際修持' },
  { id: 'spyod_yul', tibetan: 'སྤྱོད་ཡུལ', roman: 'spyod yul', khamPronunciation: 'chö yül', category: 'view', level: 3, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 250, notes: '行境，行為範圍', context: '修行範圍' }
]

// 第四層：高級修持 (150個) - 這裡先定義前50個，後續可以繼續擴展
export const advancedVocabulary: AdvancedTibetanCard[] = [
  // 大手印高級修持
  { id: 'phyag_chen_lta_sgom', tibetan: 'ཕྱག་ཆེན་ལྟ་སྒོམ', roman: 'phyag chen lta sgom', khamPronunciation: 'chak chen ta gom', category: 'advanced', level: 4, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 4, order: 251, notes: '大手印見修', context: '噶舉派高級修持' },
  { id: 'gcig_car_ba', tibetan: 'གཅིག་ཅར་བ', roman: 'gcig car ba', khamPronunciation: 'chik char wa', category: 'advanced', level: 4, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 4, order: 252, notes: '頓悟，一時成就', context: '大手印特色' },
  { id: 'rim_gyis_pa', tibetan: 'རིམ་གྱིས་པ', roman: 'rim gyis pa', khamPronunciation: 'rim gyi pa', category: 'advanced', level: 4, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 3, order: 253, notes: '漸悟，次第成就', context: '修持方式' },
  { id: 'cig_car_ba', tibetan: 'ཅིག་ཅར་བ', roman: 'cig car ba', khamPronunciation: 'chik char wa', category: 'advanced', level: 4, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 4, order: 254, notes: '頓門，頓悟法門', context: '大手印法門' },
  { id: 'ma_sgom_sangs_rgyas', tibetan: 'མ་སྒོམ་སངས་རྒྱས', roman: 'ma sgom sangs rgyas', khamPronunciation: 'ma gom sang gye', category: 'advanced', level: 4, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 5, order: 255, notes: '不修成佛', context: '大手印究竟' },

  // 大圓滿高級修持
  { id: 'rdzogs_chen_khregs_chod', tibetan: 'རྫོགས་ཆེན་ཁྲེགས་ཆོད', roman: 'rdzogs chen khregs chod', khamPronunciation: 'dzok chen trek chö', category: 'advanced', level: 4, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 5, order: 256, notes: '大圓滿立斷', context: '寧瑪派高級修持' },
  { id: 'thod_rgal', tibetan: 'ཐོད་རྒལ', roman: 'thod rgal', khamPronunciation: 'tö gel', category: 'advanced', level: 4, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 5, order: 257, notes: '頓超', context: '大圓滿最高修持' },
  { id: 'ka_dag_khregs_chod', tibetan: 'ཀ་དག་ཁྲེགས་ཆོད', roman: 'ka dag khregs chod', khamPronunciation: 'ka dak trek chö', category: 'advanced', level: 4, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 5, order: 258, notes: '本淨立斷', context: '大圓滿修持' },
  { id: 'lhun_grub_thod_rgal', tibetan: 'ལྷུན་གྲུབ་ཐོད་རྒལ', roman: 'lhun grub thod rgal', khamPronunciation: 'lhün drup tö gel', category: 'advanced', level: 4, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 5, order: 259, notes: '任運頓超', context: '大圓滿修持' },
  { id: 'rig_pa_rang_shar', tibetan: 'རིག་པ་རང་ཤར', roman: 'rig pa rang shar', khamPronunciation: 'rik pa rang shar', category: 'advanced', level: 4, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 4, order: 260, notes: '覺性自顯', context: '大圓滿體驗' },

  // 高級禪修狀態
  { id: 'bsgom_med_bsgom', tibetan: 'བསྒོམ་མེད་བསྒོམ', roman: 'bsgom med bsgom', khamPronunciation: 'gom me gom', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 261, notes: '無修之修', context: '高級禪修' },
  { id: 'mi_sgom_bsgom', tibetan: 'མི་སྒོམ་བསྒོམ', roman: 'mi sgom bsgom', khamPronunciation: 'mi gom gom', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 262, notes: '不修而修', context: '自然禪修' },
  { id: 'rang_bsgom', tibetan: 'རང་བསྒོམ', roman: 'rang bsgom', khamPronunciation: 'rang gom', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 263, notes: '自修，自然修持', context: '無為修持' },
  { id: 'lhun_gyis_grub', tibetan: 'ལྷུན་གྱིས་གྲུབ', roman: 'lhun gyis grub', khamPronunciation: 'lhün gyi drup', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 264, notes: '任運成就', context: '自然成就' },
  { id: 'rang_bzhin_gyis_rdzogs', tibetan: 'རང་བཞིན་གྱིས་རྫོགས', roman: 'rang bzhin gyis rdzogs', khamPronunciation: 'rang zhin gyi dzok', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 265, notes: '自性圓滿', context: '本性圓滿' },

  // 高級證悟狀態
  { id: 'ye_shes_chen_po', tibetan: 'ཡེ་ཤེས་ཆེན་པོ', roman: 'ye shes chen po', khamPronunciation: 'ye she chen po', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 266, notes: '大智慧', context: '高級證悟' },
  { id: 'rtogs_pa_chen_po', tibetan: 'རྟོགས་པ་ཆེན་པོ', roman: 'rtogs pa chen po', khamPronunciation: 'tok pa chen po', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 267, notes: '大證悟', context: '深度證悟' },
  { id: 'mngon_rtogs', tibetan: 'མངོན་རྟོགས', roman: 'mngon rtogs', khamPronunciation: 'ngön tok', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 268, notes: '現證，直接證悟', context: '直接體驗' },
  { id: 'don_rtogs', tibetan: 'དོན་རྟོགས', roman: 'don rtogs', khamPronunciation: 'dön tok', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 269, notes: '義證，證悟真義', context: '真義證悟' },
  { id: 'zab_rtogs', tibetan: 'ཟབ་རྟོགས', roman: 'zab rtogs', khamPronunciation: 'zap tok', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 270, notes: '深證，深度證悟', context: '甚深證悟' },

  // 高級成就
  { id: 'grub_thob', tibetan: 'གྲུབ་ཐོབ', roman: 'grub thob', khamPronunciation: 'drup top', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 271, notes: '成就者，悉地者', context: '修持成就者' },
  { id: 'maha_siddha', tibetan: 'མ་ཧཱ་སིདྡྷ', roman: 'ma ha siddha', khamPronunciation: 'maha siddha', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 272, notes: '大成就者', context: '印度大成就者' },
  { id: 'rigs_ldan', tibetan: 'རིགས་ལྡན', roman: 'rigs ldan', khamPronunciation: 'rik den', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 273, notes: '持明者', context: '密法成就者' },
  { id: 'mkhas_grub', tibetan: 'མཁས་གྲུབ', roman: 'mkhas grub', khamPronunciation: 'khe drup', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 274, notes: '智成就者', context: '智慧成就者' },
  { id: 'spyod_grub', tibetan: 'སྤྱོད་གྲུབ', roman: 'spyod grub', khamPronunciation: 'chö drup', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 275, notes: '行成就者', context: '行為成就者' },

  // 高級修持方法
  { id: 'lta_ba_mtho_ba', tibetan: 'ལྟ་བ་མཐོ་བ', roman: 'lta ba mtho ba', khamPronunciation: 'ta wa to wa', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 276, notes: '見地高', context: '高深見地' },
  { id: 'sgom_pa_zab_mo', tibetan: 'སྒོམ་པ་ཟབ་མོ', roman: 'sgom pa zab mo', khamPronunciation: 'gom pa zap mo', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 277, notes: '修持深', context: '甚深修持' },
  { id: 'spyod_pa_rgya_che', tibetan: 'སྤྱོད་པ་རྒྱ་ཆེ', roman: 'spyod pa rgya che', khamPronunciation: 'chö pa gya che', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 278, notes: '行為廣', context: '廣大行為' },
  { id: 'bras_bu_myur_ba', tibetan: 'འབྲས་བུ་མྱུར་བ', roman: '\'bras bu myur ba', khamPronunciation: 'dre bu nyur wa', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 279, notes: '果快', context: '快速成果' },
  { id: 'thabs_mkhas', tibetan: 'ཐབས་མཁས', roman: 'thabs mkhas', khamPronunciation: 'tap khe', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 280, notes: '方便善巧', context: '善巧方便' },

  // 高級體驗
  { id: 'nyams_chen', tibetan: 'ཉམས་ཆེན', roman: 'nyams chen', khamPronunciation: 'nyam chen', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 281, notes: '大覺受', context: '深度體驗' },
  { id: 'mthong_ba_chen_po', tibetan: 'མཐོང་བ་ཆེན་པོ', roman: 'mthong ba chen po', khamPronunciation: 'tong wa chen po', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 282, notes: '大見', context: '深度見解' },
  { id: 'myong_ba_zab_mo', tibetan: 'མྱོང་བ་ཟབ་མོ', roman: 'myong ba zab mo', khamPronunciation: 'nyong wa zap mo', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 283, notes: '深受', context: '深度感受' },
  { id: 'rtogs_pa_zab_rgyas', tibetan: 'རྟོགས་པ་ཟབ་རྒྱས', roman: 'rtogs pa zab rgyas', khamPronunciation: 'tok pa zap gye', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 284, notes: '證悟深廣', context: '深廣證悟' },
  { id: 'ye_shes_rgya_mtsho', tibetan: 'ཡེ་ཤེས་རྒྱ་མཚོ', roman: 'ye shes rgya mtsho', khamPronunciation: 'ye she gya tso', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 285, notes: '智慧海', context: '廣大智慧' },

  // 高級傳承
  { id: 'dam_pa_brgyud_pa', tibetan: 'དམ་པ་བརྒྱུད་པ', roman: 'dam pa brgyud pa', khamPronunciation: 'dam pa gyü pa', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 286, notes: '聖傳承', context: '神聖傳承' },
  { id: 'gsang_brgyud', tibetan: 'གསང་བརྒྱུད', roman: 'gsang brgyud', khamPronunciation: 'sang gyü', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 287, notes: '密傳承', context: '秘密傳承' },
  { id: 'zab_chos', tibetan: 'ཟབ་ཆོས', roman: 'zab chos', khamPronunciation: 'zap chö', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 288, notes: '深法', context: '甚深法門' },
  { id: 'gsang_ba_chen_po', tibetan: 'གསང་བ་ཆེན་པོ', roman: 'gsang ba chen po', khamPronunciation: 'sang wa chen po', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 289, notes: '大秘密', context: '最高秘密' },
  { id: 'man_ngag_gi_sde', tibetan: 'མན་ངག་གི་སྡེ', roman: 'man ngag gi sde', khamPronunciation: 'men ngak gi de', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 290, notes: '口訣部', context: '竅訣傳承' },

  // 高級成果
  { id: 'sangs_rgyas_go_phang', tibetan: 'སངས་རྒྱས་གོ་འཕང', roman: 'sangs rgyas go \'phang', khamPronunciation: 'sang gye go pang', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 291, notes: '佛果位', context: '成佛果位' },
  { id: 'byang_chub_snying_po', tibetan: 'བྱང་ཆུབ་སྙིང་པོ', roman: 'byang chub snying po', khamPronunciation: 'jang chup nying po', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 292, notes: '菩提心要', context: '覺悟精髓' },
  { id: 'chos_sku_ye_shes', tibetan: 'ཆོས་སྐུ་ཡེ་ཤེས', roman: 'chos sku ye shes', khamPronunciation: 'chö ku ye she', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 293, notes: '法身智慧', context: '法身本智' },
  { id: 'mtha_yas_ye_shes', tibetan: 'མཐའ་ཡས་ཡེ་ཤེས', roman: 'mtha\' yas ye shes', khamPronunciation: 'ta ye ye she', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 294, notes: '無邊智慧', context: '無限智慧' },
  { id: 'kun_mkhyen', tibetan: 'ཀུན་མཁྱེན', roman: 'kun mkhyen', khamPronunciation: 'kün kyen', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 295, notes: '一切智', context: '全知智慧' },

  // 高級境界
  { id: 'zab_mo_lta_ba', tibetan: 'ཟབ་མོ་ལྟ་བ', roman: 'zab mo lta ba', khamPronunciation: 'zap mo ta wa', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 296, notes: '甚深見地', context: '深奧見解' },
  { id: 'rgya_che_spyod_pa', tibetan: 'རྒྱ་ཆེ་སྤྱོད་པ', roman: 'rgya che spyod pa', khamPronunciation: 'gya che chö pa', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 297, notes: '廣大行為', context: '廣大修行' },
  { id: 'mtho_ris_sa', tibetan: 'མཐོ་རིས་ས', roman: 'mtho ris sa', khamPronunciation: 'to ri sa', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 298, notes: '高地', context: '高級境界' },
  { id: 'nges_legs_sa', tibetan: 'ངེས་ལེགས་ས', roman: 'nges legs sa', khamPronunciation: 'nge lek sa', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 299, notes: '決定善地', context: '解脫境界' },
  { id: 'mchog_gi_go_phang', tibetan: 'མཆོག་གི་གོ་འཕང', roman: 'mchog gi go \'phang', khamPronunciation: 'chok gi go pang', category: 'advanced', level: 4, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 300, notes: '勝果位', context: '最高果位' }
]

// 第五層：儀軌修持 (100個)
export const ritualVocabulary: AdvancedTibetanCard[] = [
  // 日常儀軌
  { id: 'cho_ga', tibetan: 'ཆོ་ག', roman: 'cho ga', khamPronunciation: 'cho ga', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 301, notes: '儀軌，修法儀式', context: '修持儀軌' },
  { id: 'las_tshogs', tibetan: 'ལས་ཚོགས', roman: 'las tshogs', khamPronunciation: 'le tsok', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 302, notes: '事業法會', context: '特殊儀軌' },
  { id: 'tshogs_kyi_cho_ga', tibetan: 'ཚོགས་ཀྱི་ཆོ་ག', roman: 'tshogs kyi cho ga', khamPronunciation: 'tsok kyi cho ga', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 303, notes: '薈供儀軌', context: '集體修持' },
  { id: 'gsol_kha', tibetan: 'གསོལ་ཁ', roman: 'gsol kha', khamPronunciation: 'söl kha', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 304, notes: '祈請文', context: '祈禱儀軌' },
  { id: 'smon_lam', tibetan: 'སྨོན་ལམ', roman: 'smon lam', khamPronunciation: 'mön lam', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 305, notes: '發願，祈願', context: '願文儀軌' },

  // 火供儀軌
  { id: 'sbyin_sreg', tibetan: 'སྦྱིན་སྲེག', roman: 'sbyin sreg', khamPronunciation: 'jin sek', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 306, notes: '火供，護摩', context: '火供儀軌' },
  { id: 'homa', tibetan: 'ཧོ་མ', roman: 'ho ma', khamPronunciation: 'homa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 307, notes: '護摩，火供', context: '梵語火供' },
  { id: 'me_lha', tibetan: 'མེ་ལྷ', roman: 'me lha', khamPronunciation: 'me lha', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 308, notes: '火神', context: '火供本尊' },
  { id: 'sbyin_sreg_gi_rdzas', tibetan: 'སྦྱིན་སྲེག་གི་རྫས', roman: 'sbyin sreg gi rdzas', khamPronunciation: 'jin sek gi dze', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 309, notes: '火供物品', context: '供養材料' },
  { id: 'thab_khung', tibetan: 'ཐབ་ཁུང', roman: 'thab khung', khamPronunciation: 'tap kung', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 310, notes: '火壇', context: '火供設施' },

  // 薈供儀軌
  { id: 'tshogs_mchod', tibetan: 'ཚོགས་མཆོད', roman: 'tshogs mchod', khamPronunciation: 'tsok chö', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 311, notes: '薈供', context: '集體供養' },
  { id: 'ganachakra', tibetan: 'གཎ་ཙཀྲ', roman: 'gana chakra', khamPronunciation: 'gana chakra', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 312, notes: '薈供輪', context: '梵語薈供' },
  { id: 'tshogs_rdzas', tibetan: 'ཚོགས་རྫས', roman: 'tshogs rdzas', khamPronunciation: 'tsok dze', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 313, notes: '薈供物品', context: '供養食物' },
  { id: 'dkar_gsum', tibetan: 'དཀར་གསུམ', roman: 'dkar gsum', khamPronunciation: 'kar sum', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 314, notes: '三白：奶、酪、酥', context: '薈供材料' },
  { id: 'mngar_gsum', tibetan: 'མངར་གསུམ', roman: 'mngar gsum', khamPronunciation: 'ngar sum', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 315, notes: '三甜：糖、蜜、冰糖', context: '薈供材料' },

  // 會供儀軌
  { id: 'dus_chen', tibetan: 'དུས་ཆེན', roman: 'dus chen', khamPronunciation: 'dü chen', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 316, notes: '大節日', context: '重要法會' },
  { id: 'tshes_bcu', tibetan: 'ཚེས་བཅུ', roman: 'tshes bcu', khamPronunciation: 'tse chu', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 317, notes: '初十日', context: '蓮師節日' },
  { id: 'tshes_nyer_lnga', tibetan: 'ཚེས་ཉེར་ལྔ', roman: 'tshes nyer lnga', khamPronunciation: 'tse nyer nga', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 318, notes: '二十五日', context: '空行母節日' },
  { id: 'zla_ba_gsar_pa', tibetan: 'ཟླ་བ་གསར་པ', roman: 'zla ba gsar pa', khamPronunciation: 'da wa sar pa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 319, notes: '新月', context: '月相法會' },
  { id: 'zla_ba_yar_ngo', tibetan: 'ཟླ་བ་ཡར་ངོ', roman: 'zla ba yar ngo', khamPronunciation: 'da wa yar ngo', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 320, notes: '上弦月', context: '月相修持' },

  // 護法儀軌
  { id: 'srung_ma', tibetan: 'སྲུང་མ', roman: 'srung ma', khamPronunciation: 'sung ma', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 321, notes: '護法，守護者', context: '護法修持' },
  { id: 'chos_skyong', tibetan: 'ཆོས་སྐྱོང', roman: 'chos skyong', khamPronunciation: 'chö kyong', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 322, notes: '法護，護法', context: '護法本尊' },
  { id: 'mgon_po', tibetan: 'མགོན་པོ', roman: 'mgon po', khamPronunciation: 'gön po', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 323, notes: '怙主，護法主', context: '主要護法' },
  { id: 'drag_gshed', tibetan: 'དྲག་གཤེད', roman: 'drag gshed', khamPronunciation: 'drak she', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 324, notes: '忿怒護法', context: '威猛護法' },
  { id: 'zhi_khro', tibetan: 'ཞི་ཁྲོ', roman: 'zhi khro', khamPronunciation: 'zhi tro', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 325, notes: '寂忿，寂靜忿怒', context: '本尊類型' },

  // 薦亡儀軌
  { id: 'shi_ba_khrid', tibetan: 'ཤི་བ་ཁྲིད', roman: 'shi ba khrid', khamPronunciation: 'shi wa tri', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 326, notes: '死亡引導', context: '臨終指導' },
  { id: 'bar_do_thos_grol', tibetan: 'བར་དོ་ཐོས་གྲོལ', roman: 'bar do thos grol', khamPronunciation: 'bar do tö dröl', category: 'ritual', level: 5, tradition: 'nyingma', practice: 'common', stage: 'learning', difficulty: 4, order: 327, notes: '中陰聞解脫', context: '中陰教法' },
  { id: 'zhags_pa', tibetan: 'ཞགས་པ', roman: 'zhags pa', khamPronunciation: 'zhak pa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 328, notes: '薦亡，超度', context: '亡者修法' },
  { id: 'srog_bslu', tibetan: 'སྲོག་བསླུ', roman: 'srog bslu', khamPronunciation: 'sok lü', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 329, notes: '贖命，延壽', context: '延命儀軌' },
  { id: 'tshe_dbang', tibetan: 'ཚེ་དབང', roman: 'tshe dbang', khamPronunciation: 'tshe wang', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 330, notes: '長壽灌頂', context: '延壽修法' },

  // 除障儀軌
  { id: 'gegs_sel', tibetan: 'གེགས་སེལ', roman: 'gegs sel', khamPronunciation: 'gek sel', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 331, notes: '除障', context: '遣除違緣' },
  { id: 'bar_chad_kun_sel', tibetan: 'བར་ཆད་ཀུན་སེལ', roman: 'bar chad kun sel', khamPronunciation: 'bar che kün sel', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 332, notes: '遣除一切障礙', context: '除障修法' },
  { id: 'bzlog_pa', tibetan: 'བཟློག་པ', roman: 'bzlog pa', khamPronunciation: 'dok pa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 333, notes: '遮止，回遮', context: '防護修法' },
  { id: 'srung_ba', tibetan: 'སྲུང་བ', roman: 'srung ba', khamPronunciation: 'sung wa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 334, notes: '守護，保護', context: '護身修法' },
  { id: 'bsrung_ba', tibetan: 'བསྲུང་བ', roman: 'bsrung ba', khamPronunciation: 'sung wa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 335, notes: '護持，守護', context: '保護修法' },

  // 增益儀軌
  { id: 'rgyas_pa', tibetan: 'རྒྱས་པ', roman: 'rgyas pa', khamPronunciation: 'gye pa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 336, notes: '增益，增長', context: '增益修法' },
  { id: 'yang_dag_rgyas', tibetan: 'ཡང་དག་རྒྱས', roman: 'yang dag rgyas', khamPronunciation: 'yang dak gye', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 337, notes: '真實增益', context: '如法增益' },
  { id: 'nor_bu_rgyas', tibetan: 'ནོར་བུ་རྒྱས', roman: 'nor bu rgyas', khamPronunciation: 'nor bu gye', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 338, notes: '財富增長', context: '財富修法' },
  { id: 'tshe_ring_rgyas', tibetan: 'ཚེ་རིང་རྒྱས', roman: 'tshe ring rgyas', khamPronunciation: 'tshe ring gye', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 339, notes: '壽命增長', context: '延壽修法' },
  { id: 'dbang_thang_rgyas', tibetan: 'དབང་ཐང་རྒྱས', roman: 'dbang thang rgyas', khamPronunciation: 'wang tang gye', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 340, notes: '權勢增長', context: '威力修法' },

  // 懷愛儀軌
  { id: 'dbang_bsdu', tibetan: 'དབང་བསྡུ', roman: 'dbang bsdu', khamPronunciation: 'wang dü', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 341, notes: '懷攝，攝受', context: '懷愛修法' },
  { id: 'mthun_rkyen', tibetan: 'མཐུན་རྐྱེན', roman: 'mthun rkyen', khamPronunciation: 'tün kyen', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 342, notes: '順緣', context: '助緣修法' },
  { id: 'byin_gyis_rlobs', tibetan: 'བྱིན་གྱིས་རློབས', roman: 'byin gyis rlobs', khamPronunciation: 'jin gyi lop', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 343, notes: '加持', context: '加持修法' },
  { id: 'mchog_sbyin', tibetan: 'མཆོག་སྦྱིན', roman: 'mchog sbyin', khamPronunciation: 'chok jin', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 344, notes: '勝施', context: '殊勝布施' },
  { id: 'bde_skyid', tibetan: 'བདེ་སྐྱིད', roman: 'bde skyid', khamPronunciation: 'de kyi', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 345, notes: '安樂', context: '幸福修法' },

  // 降伏儀軌
  { id: 'mnan_pa', tibetan: 'མནན་པ', roman: 'mnan pa', khamPronunciation: 'nen pa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 346, notes: '降伏，鎮壓', context: '降伏修法' },
  { id: 'drag_po', tibetan: 'དྲག་པོ', roman: 'drag po', khamPronunciation: 'drak po', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 347, notes: '威猛', context: '威猛修法' },
  { id: 'khro_bo_las', tibetan: 'ཁྲོ་བོ་ལས', roman: 'khro bo las', khamPronunciation: 'tro wo le', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 348, notes: '忿怒事業', context: '忿怒修法' },
  { id: 'dgra_bgegs_mnan', tibetan: 'དགྲ་བགེགས་མནན', roman: 'dgra bgegs mnan', khamPronunciation: 'dra gek nen', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 349, notes: '降伏怨敵障礙', context: '降魔修法' },
  { id: 'bdud_rtsi_myur_mgyogs', tibetan: 'བདུད་རྩི་མྱུར་མགྱོགས', roman: 'bdud rtsi myur mgyogs', khamPronunciation: 'dü tsi nyur gyok', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 5, order: 350, notes: '甘露迅疾', context: '快速成就' },

  // 修法用品
  { id: 'phur_ba', tibetan: 'ཕུར་བ', roman: 'phur ba', khamPronunciation: 'pur wa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 351, notes: '普巴杵', context: '法器' },
  { id: 'rdo_rje', tibetan: 'རྡོ་རྗེ', roman: 'rdo rje', khamPronunciation: 'dor je', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 352, notes: '金剛杵', context: '法器' },
  { id: 'dril_bu', tibetan: 'དྲིལ་བུ', roman: 'dril bu', khamPronunciation: 'dril bu', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 353, notes: '金剛鈴', context: '法器' },
  { id: 'damaru', tibetan: 'ཌ་མ་རུ', roman: 'da ma ru', khamPronunciation: 'damaru', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 354, notes: '手鼓', context: '法器' },
  { id: 'thod_pa', tibetan: 'ཐོད་པ', roman: 'thod pa', khamPronunciation: 'tö pa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 355, notes: '顱器', context: '法器' },

  // 供養物品
  { id: 'me_tog', tibetan: 'མེ་ཏོག', roman: 'me tog', khamPronunciation: 'me tok', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 356, notes: '花', context: '供養' },
  { id: 'bdug_pa', tibetan: 'བདུག་པ', roman: 'bdug pa', khamPronunciation: 'duk pa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 357, notes: '香', context: '供養' },
  { id: 'mar_me', tibetan: 'མར་མེ', roman: 'mar me', khamPronunciation: 'mar me', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 358, notes: '酥油燈', context: '供養' },
  { id: 'dri_chab', tibetan: 'དྲི་ཆབ', roman: 'dri chab', khamPronunciation: 'dri chap', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 359, notes: '香水', context: '供養' },
  { id: 'zhal_zas', tibetan: 'ཞལ་ཟས', roman: 'zhal zas', khamPronunciation: 'zhal ze', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 360, notes: '食子，朵瑪', context: '供養' },

  // 修法時間
  { id: 'thun_bzhi', tibetan: 'ཐུན་བཞི', roman: 'thun bzhi', khamPronunciation: 'tün zhi', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 361, notes: '四座', context: '修法時段' },
  { id: 'nam_gsum', tibetan: 'ནམ་གསུམ', roman: 'nam gsum', khamPronunciation: 'nam sum', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 362, notes: '三時', context: '修法時間' },
  { id: 'snga_dro', tibetan: 'སྔ་དྲོ', roman: 'snga dro', khamPronunciation: 'nga dro', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 363, notes: '早晨', context: '修法時間' },
  { id: 'nyin_gung', tibetan: 'ཉིན་གུང', roman: 'nyin gung', khamPronunciation: 'nyin gung', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 364, notes: '中午', context: '修法時間' },
  { id: 'dgongs_ka', tibetan: 'དགོངས་ཀ', roman: 'dgongs ka', khamPronunciation: 'gong ka', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 365, notes: '傍晚', context: '修法時間' },

  // 修法地點
  { id: 'gtsug_lag_khang', tibetan: 'གཙུག་ལག་ཁང', roman: 'gtsug lag khang', khamPronunciation: 'tsuk lak khang', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 366, notes: '大殿', context: '修法場所' },
  { id: 'lha_khang', tibetan: 'ལྷ་ཁང', roman: 'lha khang', khamPronunciation: 'lha khang', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 367, notes: '佛殿', context: '修法場所' },
  { id: 'mchod_khang', tibetan: 'མཆོད་ཁང', roman: 'mchod khang', khamPronunciation: 'chö khang', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 368, notes: '供養殿', context: '修法場所' },
  { id: 'sgrub_pa_khang', tibetan: 'སྒྲུབ་པ་ཁང', roman: 'sgrub pa khang', khamPronunciation: 'drup pa khang', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 369, notes: '修行室', context: '修法場所' },
  { id: 'ri_khrod_gnas', tibetan: 'རི་ཁྲོད་གནས', roman: 'ri khrod gnas', khamPronunciation: 'ri trö ne', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 370, notes: '山林聖地', context: '修法場所' },

  // 修法成就
  { id: 'rtags_mtshan_bzang', tibetan: 'རྟགས་མཚན་བཟང', roman: 'rtags mtshan bzang', khamPronunciation: 'tak tsen zang', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 371, notes: '善相', context: '修法驗相' },
  { id: 'ltas_ngan', tibetan: 'ལྟས་ངན', roman: 'ltas ngan', khamPronunciation: 'te ngen', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 372, notes: '惡相', context: '不好徵象' },
  { id: 'rmi_lam_bzang', tibetan: 'རྨི་ལམ་བཟང', roman: 'rmi lam bzang', khamPronunciation: 'mi lam zang', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 373, notes: '好夢', context: '修法驗相' },
  { id: 'byin_rlabs_thob', tibetan: 'བྱིན་རླབས་ཐོབ', roman: 'byin rlabs thob', khamPronunciation: 'jin lap top', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 374, notes: '得加持', context: '修法成就' },
  { id: 'dngos_grub_thob', tibetan: 'དངོས་གྲུབ་ཐོབ', roman: 'dngos grub thob', khamPronunciation: 'ngö drup top', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 375, notes: '得成就', context: '修法成就' },

  // 修法障礙
  { id: 'bgegs_rkyen', tibetan: 'བགེགས་རྐྱེན', roman: 'bgegs rkyen', khamPronunciation: 'gek kyen', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 376, notes: '障緣', context: '修法障礙' },
  { id: 'mi_mthun_rkyen', tibetan: 'མི་མཐུན་རྐྱེན', roman: 'mi mthun rkyen', khamPronunciation: 'mi tün kyen', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 377, notes: '違緣', context: '不順條件' },
  { id: 'log_lta', tibetan: 'ལོག་ལྟ', roman: 'log lta', khamPronunciation: 'lok ta', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 378, notes: '邪見', context: '見地障礙' },
  { id: 'nyes_pa', tibetan: 'ཉེས་པ', roman: 'nyes pa', khamPronunciation: 'nye pa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 379, notes: '過失', context: '修法錯誤' },
  { id: 'ltung_ba', tibetan: 'ལྟུང་བ', roman: 'ltung ba', khamPronunciation: 'tung wa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 380, notes: '墮罪', context: '戒律違犯' },

  // 修法圓滿
  { id: 'mthar_thug', tibetan: 'མཐར་ཐུག', roman: 'mthar thug', khamPronunciation: 'tar tuk', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 381, notes: '究竟', context: '修法圓滿' },
  { id: 'rdzogs_rim', tibetan: 'རྫོགས་རིམ', roman: 'rdzogs rim', khamPronunciation: 'dzok rim', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 382, notes: '圓滿次第', context: '密法修持' },
  { id: 'bskyed_rim', tibetan: 'བསྐྱེད་རིམ', roman: 'bskyed rim', khamPronunciation: 'kye rim', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 383, notes: '生起次第', context: '密法修持' },
  { id: 'zung_jug', tibetan: 'ཟུང་འཇུག', roman: 'zung \'jug', khamPronunciation: 'zung juk', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 3, order: 384, notes: '雙運', context: '究竟成就' },
  { id: 'ye_shes_pa', tibetan: 'ཡེ་ཤེས་པ', roman: 'ye shes pa', khamPronunciation: 'ye she pa', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 385, notes: '智慧尊', context: '本尊修持' },

  // 特殊修法
  { id: 'gcod_yul', tibetan: 'གཅོད་ཡུལ', roman: 'gcod yul', khamPronunciation: 'chö yül', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 386, notes: '斷境', context: '斷法修持' },
  { id: 'zhije', tibetan: 'ཞི་བྱེད', roman: 'zhi byed', khamPronunciation: 'zhi je', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 387, notes: '息苦法', context: '特殊修法' },
  { id: 'lam_rim_chen_mo', tibetan: 'ལམ་རིམ་ཆེན་མོ', roman: 'lam rim chen mo', khamPronunciation: 'lam rim chen mo', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 388, notes: '菩提道次第廣論', context: '修持教授' },
  { id: 'blo_sbyong', tibetan: 'བློ་སྦྱོང', roman: 'blo sbyong', khamPronunciation: 'lo jong', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 389, notes: '修心', context: '心性訓練' },
  { id: 'gdams_ngag_mdzod', tibetan: 'གདམས་ངག་མཛོད', roman: 'gdams ngag mdzod', khamPronunciation: 'dam ngak dzö', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 390, notes: '教授藏', context: '口訣集' },

  // 傳承特色
  { id: 'bka_brgyud_sngags', tibetan: 'བཀའ་བརྒྱུད་སྔགས', roman: 'bka\' brgyud sngags', khamPronunciation: 'ka gyü ngak', category: 'ritual', level: 5, tradition: 'kagyu', practice: 'common', stage: 'learning', difficulty: 4, order: 391, notes: '噶舉密法', context: '噶舉傳承' },
  { id: 'rnying_ma_sngags', tibetan: 'རྙིང་མ་སྔགས', roman: 'rnying ma sngags', khamPronunciation: 'nying ma ngak', category: 'ritual', level: 5, tradition: 'nyingma', practice: 'common', stage: 'learning', difficulty: 4, order: 392, notes: '寧瑪密法', context: '寧瑪傳承' },
  { id: 'gter_ma', tibetan: 'གཏེར་མ', roman: 'gter ma', khamPronunciation: 'ter ma', category: 'ritual', level: 5, tradition: 'nyingma', practice: 'common', stage: 'learning', difficulty: 2, order: 393, notes: '伏藏', context: '寧瑪特色' },
  { id: 'gter_ston', tibetan: 'གཏེར་སྟོན', roman: 'gter ston', khamPronunciation: 'ter tön', category: 'ritual', level: 5, tradition: 'nyingma', practice: 'common', stage: 'learning', difficulty: 2, order: 394, notes: '伏藏師', context: '取藏者' },
  { id: 'zab_lam', tibetan: 'ཟབ་ལམ', roman: 'zab lam', khamPronunciation: 'zap lam', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 2, order: 395, notes: '深道', context: '甚深修法' },

  // 最終成就
  { id: 'ja_lus_pho_ba', tibetan: 'འཇའ་ལུས་འཕོ་བ', roman: '\'ja\' lus \'pho ba', khamPronunciation: 'ja lü po wa', category: 'ritual', level: 5, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 5, order: 396, notes: '虹身成就', context: '大圓滿成就' },
  { id: 'thod_rgal_snang_ba', tibetan: 'ཐོད་རྒལ་སྣང་བ', roman: 'thod rgal snang ba', khamPronunciation: 'tö gel nang wa', category: 'ritual', level: 5, tradition: 'nyingma', practice: 'dzogchen', stage: 'learning', difficulty: 5, order: 397, notes: '頓超顯現', context: '大圓滿體驗' },
  { id: 'phyag_chen_rtogs_pa', tibetan: 'ཕྱག་ཆེན་རྟོགས་པ', roman: 'phyag chen rtogs pa', khamPronunciation: 'chak chen tok pa', category: 'ritual', level: 5, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 4, order: 398, notes: '大手印證悟', context: '大手印成就' },
  { id: 'lhan_cig_skyes_sbyor', tibetan: 'ལྷན་ཅིག་སྐྱེས་སྦྱོར', roman: 'lhan cig skyes sbyor', khamPronunciation: 'lhen chik kye jor', category: 'ritual', level: 5, tradition: 'kagyu', practice: 'mahamudra', stage: 'learning', difficulty: 5, order: 399, notes: '俱生瑜伽', context: '大手印修持' },
  { id: 'chos_sku_mngon_gyur', tibetan: 'ཆོས་སྐུ་མངོན་གྱུར', roman: 'chos sku mngon gyur', khamPronunciation: 'chö ku ngön gyur', category: 'ritual', level: 5, tradition: 'common', practice: 'common', stage: 'learning', difficulty: 4, order: 400, notes: '法身現前', context: '究竟成就' }
]

// 導出所有詞彙的組合函數
export function getAllAdvancedVocabulary(): AdvancedTibetanCard[] {
  return [
    ...foundationVocabulary,
    ...preliminaryVocabulary,
    ...viewVocabulary,
    ...advancedVocabulary,
    ...ritualVocabulary
  ]
}

// 按傳承篩選詞彙
export function getVocabularyByTradition(tradition: 'kagyu' | 'nyingma' | 'common'): AdvancedTibetanCard[] {
  return getAllAdvancedVocabulary().filter(card => card.tradition === tradition)
}

// 按修持法門篩選詞彙
export function getVocabularyByPractice(practice: 'mahamudra' | 'dzogchen' | 'common'): AdvancedTibetanCard[] {
  return getAllAdvancedVocabulary().filter(card => card.practice === practice)
}

// 按修持層次篩選詞彙
export function getVocabularyByLevel(level: 1 | 2 | 3 | 4 | 5): AdvancedTibetanCard[] {
  return getAllAdvancedVocabulary().filter(card => card.level === level)
}

// 按類別篩選詞彙
export function getVocabularyByCategory(category: string): AdvancedTibetanCard[] {
  return getAllAdvancedVocabulary().filter(card => card.category === category)
}

export function getVocabularyByStage(stageName: string): AdvancedTibetanCard[] {
  const stage = advancedLearningStages[stageName as keyof typeof advancedLearningStages]
  return stage ? stage.vocabulary : []
}

// 高級學習階段定義（500個詞彙的五個層次）
export const advancedLearningStages = {
  // 第一層：基礎概念 (50個)
  foundation: {
    name: '基礎概念',
    description: '三寶皈依、業力輪迴、四聖諦、六度波羅蜜等基礎佛學概念',
    vocabulary: foundationVocabulary,
    target: 50,
    dailyGoal: 3,
    level: 1,
    tradition: 'common' as const,
    practice: 'common' as const,
    prerequisites: [], // 無前置要求
    estimatedDays: 17
  },
  
  // 第二層：前行修持 (100個)
  preliminary: {
    name: '前行修持',
    description: '四加行、皈依、金剛薩埵、曼達、上師瑜伽等前行修持詞彙',
    vocabulary: preliminaryVocabulary,
    target: 100,
    dailyGoal: 5,
    level: 2,
    tradition: 'common' as const,
    practice: 'common' as const,
    prerequisites: ['foundation'],
    estimatedDays: 20
  },
  
  // 第三層：見地修持 (100個)
  view: {
    name: '見地修持',
    description: '大手印見地、大圓滿見地、空性見地、心性認識等高深見地',
    vocabulary: viewVocabulary,
    target: 100,
    dailyGoal: 4,
    level: 3,
    tradition: 'common' as const,
    practice: 'common' as const,
    prerequisites: ['foundation', 'preliminary'],
    estimatedDays: 25
  },
  
  // 第四層：高級修持 (50個)
  advanced: {
    name: '高級修持',
    description: '立斷頓超、無修之修、俱生智慧、法身成就等最高修持',
    vocabulary: advancedVocabulary,
    target: 50,
    dailyGoal: 2,
    level: 4,
    tradition: 'common' as const,
    practice: 'common' as const,
    prerequisites: ['foundation', 'preliminary', 'view'],
    estimatedDays: 25
  },
  
  // 第五層：儀軌修持 (100個)
  ritual: {
    name: '儀軌修持',
    description: '火供薈供、護法除障、增益懷愛、降伏成就等實用儀軌',
    vocabulary: ritualVocabulary,
    target: 100,
    dailyGoal: 4,
    level: 5,
    tradition: 'common' as const,
    practice: 'common' as const,
    prerequisites: ['foundation', 'preliminary'],
    estimatedDays: 25
  }
}

// 按傳承特化的學習路徑
export const traditionPaths = {
  // 噶舉派大手印路徑
  kagyu: {
    name: '噶舉派大手印修持',
    description: '專注大手印見修、那洛六法、噶舉傳承祖師教授',
    stages: ['foundation', 'preliminary', 'view', 'advanced'],
    specialFocus: 'mahamudra' as const,
    estimatedMonths: 3,
    dailyCommitment: '1-2小時'
  },
  
  // 寧瑪派大圓滿路徑
  nyingma: {
    name: '寧瑪派大圓滿修持',
    description: '專注大圓滿立斷頓超、三部教授、伏藏法門',
    stages: ['foundation', 'preliminary', 'view', 'advanced'],
    specialFocus: 'dzogchen' as const,
    estimatedMonths: 3,
    dailyCommitment: '1-2小時'
  },
  
  // 綜合實修路徑
  comprehensive: {
    name: '綜合實修路徑',
    description: '涵蓋所有層次，包含儀軌修持，適合寺廟常住或深度修行者',
    stages: ['foundation', 'preliminary', 'view', 'advanced', 'ritual'],
    specialFocus: 'common' as const,
    estimatedMonths: 4,
    dailyCommitment: '2-3小時'
  }
}

// 學習統計和進度追蹤
export interface AdvancedLearningStats {
  totalVocabulary: number
  completedStages: string[]
  currentStage: string | null
  masteredCards: number
  learningCards: number
  recallCards: number
  averageAccuracy: number
  studyStreak: number
  totalStudyTime: number // 分鐘
  estimatedCompletion: Date | null
}

// 獲取學習統計
export function getAdvancedLearningStats(): AdvancedLearningStats {
  const allCards = getAllAdvancedVocabulary()
  
  return {
    totalVocabulary: allCards.length,
    completedStages: [],
    currentStage: 'foundation',
    masteredCards: allCards.filter(card => card.stage === 'mastered').length,
    learningCards: allCards.filter(card => card.stage === 'learning').length,
    recallCards: allCards.filter(card => card.stage === 'recall').length,
    averageAccuracy: 0,
    studyStreak: 0,
    totalStudyTime: 0,
    estimatedCompletion: null
  }
}

// 獲取當前階段的學習建議
export function getCurrentStageGuidance(stageName: string): string {
  const stage = advancedLearningStages[stageName as keyof typeof advancedLearningStages]
  if (!stage) return '未知階段'
  
  const guidance = {
    foundation: '建議每日學習3個新詞彙，重點理解基礎佛學概念。配合《菩提道次第》等基礎教材。',
    preliminary: '建議每日學習5個新詞彙，結合實際前行修持。可參考《普賢上師言教》等前行教授。',
    view: '建議每日學習4個新詞彙，需要上師指導。配合大手印或大圓滿的見地教授。',
    advanced: '建議每日學習2個新詞彙，需要深度禪修體驗。建議閉關或密集修持期間學習。',
    ritual: '建議每日學習4個新詞彙，結合實際儀軌修持。適合寺廟環境或法會期間學習。'
  }
  
  return guidance[stageName as keyof typeof guidance] || '請按照您的修持進度循序漸進學習。'
}

// 檢查階段前置條件
export function checkStagePrerequisites(stageName: string, completedStages: string[]): boolean {
  const stage = advancedLearningStages[stageName as keyof typeof advancedLearningStages]
  if (!stage) return false
  
  return stage.prerequisites.every(prereq => completedStages.includes(prereq))
}

// 獲取推薦的學習路徑
export function getRecommendedPath(tradition: 'kagyu' | 'nyingma' | 'comprehensive'): typeof traditionPaths.kagyu {
  return traditionPaths[tradition]
}

// 計算完成時間估算
export function estimateCompletionTime(
  currentStage: string, 
  dailyGoal: number, 
  studyDaysPerWeek: number = 6
): { days: number; weeks: number; months: number } {
  const stages = Object.entries(advancedLearningStages)
  const currentIndex = stages.findIndex(([name]) => name === currentStage)
  
  if (currentIndex === -1) {
    return { days: 0, weeks: 0, months: 0 }
  }
  
  const remainingStages = stages.slice(currentIndex)
  const totalDays = remainingStages.reduce((sum, [, stage]) => {
    return sum + Math.ceil(stage.target / dailyGoal)
  }, 0)
  
  const actualDays = Math.ceil(totalDays * (7 / studyDaysPerWeek))
  const weeks = Math.ceil(actualDays / 7)
  const months = Math.ceil(weeks / 4)
  
  return { days: actualDays, weeks, months }
}
