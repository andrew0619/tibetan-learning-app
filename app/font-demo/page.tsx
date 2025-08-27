'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import FontSelector, { FontSettings, loadFontSettings } from '@/components/ui/FontSelector'

// 測試用的藏文文本
const testTexts = [
  { 
    tibetan: 'སངས་རྒྱས', 
    roman: 'sangs rgyas', 
    kham: 'sang gye',
    meaning: '佛陀' 
  },
  { 
    tibetan: 'བྱང་ཆུབ་སེམས', 
    roman: 'byang chub sems', 
    kham: 'jang chup sem',
    meaning: '菩提心' 
  },
  { 
    tibetan: 'ཕྱག་རྒྱ་ཆེན་པོ', 
    roman: 'phyag rgya chen po', 
    kham: 'chak gya chen po',
    meaning: '大手印' 
  },
  { 
    tibetan: 'རྫོགས་པ་ཆེན་པོ', 
    roman: 'rdzogs pa chen po', 
    kham: 'dzok pa chen po',
    meaning: '大圓滿' 
  },
  { 
    tibetan: 'སྔོན་འགྲོ་བཞི', 
    roman: 'sngon \'gro bzhi', 
    kham: 'ngön dro zhi',
    meaning: '四前行' 
  },
  { 
    tibetan: 'བླ་མ་རྣལ་འབྱོར', 
    roman: 'bla ma rnal \'byor', 
    kham: 'lama nel jor',
    meaning: '上師瑜伽' 
  }
]

const mantraText = {
  tibetan: 'ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྃ',
  roman: 'om mani padme hum',
  kham: 'om mani peme hung',
  meaning: '六字大明咒'
}

export default function FontDemoPage() {
  const [fontSettings, setFontSettings] = useState<FontSettings>(() => loadFontSettings())

  const getFontClass = () => {
    const fontMap = {
      'noto': 'font-noto-tibetan',
      'yagpo-uni': 'font-yagpo-uni',
      'yagpo-sambhota': 'font-yagpo-sambhota'
    }
    
    const sizeMap = {
      'small': 'text-lg',
      'medium': 'text-2xl',
      'large': 'text-4xl',
      'xl': 'text-5xl',
      '2xl': 'text-6xl'
    }
    
    return `${fontMap[fontSettings.tibetanFont]} ${sizeMap[fontSettings.fontSize]}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* 頁面標題 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="flex items-center text-slate-600 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回首頁
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">藏文字體展示</h1>
              <p className="text-lg text-slate-600 mt-2">比較 Yagpo 字體與 Noto Sans Tibetan 的顯示效果</p>
            </div>
          </div>
          
          {/* 字體選擇器 */}
          <FontSelector 
            currentSettings={fontSettings}
            onSettingsChange={setFontSettings}
          />
        </div>

        {/* 字體信息卡片 */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Noto Sans Tibetan</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>• Google 開發的標準藏文字體</p>
              <p>• 跨平台兼容性最佳</p>
              <p>• 現代化設計，適合數位閱讀</p>
              <p>• 載入速度快，檔案較小</p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Yagpo Unicode</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>• 開源佛教圖書館開發</p>
              <p>• 支持完整 Unicode 藏文</p>
              <p>• 包含 11,250 個字符</p>
              <p>• 適合學習和研究使用</p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Yagpo Sambhota</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>• 基於傳統 Sambhota 字體</p>
              <p>• 傳統書法風格</p>
              <p>• 適合正式文檔和經典</p>
              <p>• 具有濃厚的藏文美感</p>
            </div>
          </div>
        </div>

        {/* 大尺寸咒語展示 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">六字大明咒</h2>
          <div className="text-center">
            <div className={`mb-4 ${getFontClass()}`}>
              {mantraText.tibetan}
            </div>
            <p className="text-xl text-slate-600 mb-2">{mantraText.roman}</p>
            <p className="text-lg text-blue-600 mb-2">康巴音：{mantraText.kham}</p>
            <p className="text-base text-slate-500">{mantraText.meaning}</p>
          </div>
        </div>

        {/* 詞彙展示網格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testTexts.map((text, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className={`mb-3 ${getFontClass()}`}>
                  {text.tibetan}
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-slate-600">{text.roman}</p>
                  <p className="text-blue-600 font-medium">康巴音：{text.kham}</p>
                  <p className="text-slate-500">{text.meaning}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 字體比較表格 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">字體特性比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-700">特性</th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-700">Noto Sans Tibetan</th>
                  <th className="text-center py-4 px-4 font-semibold text-green-700">Yagpo Unicode</th>
                  <th className="text-center py-4 px-4 font-semibold text-purple-700">Yagpo Sambhota</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">字符完整性</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">傳統美感</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">數位優化</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">學習友好</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">載入速度</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">檔案大小</td>
                  <td className="text-center py-3 px-4">小 (~200KB)</td>
                  <td className="text-center py-3 px-4">中 (~1.8MB)</td>
                  <td className="text-center py-3 px-4">大 (~2.9MB)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 使用建議 */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mt-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">💡 使用建議</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/60 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">🌐 跨平台使用</h3>
              <p className="text-sm text-slate-600">推薦 <strong>Noto Sans Tibetan</strong>，確保在所有設備上都能正常顯示</p>
            </div>
            <div className="bg-white/60 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">📚 學習研究</h3>
              <p className="text-sm text-slate-600">推薦 <strong>Yagpo Unicode</strong>，字符完整，適合深度學習</p>
            </div>
            <div className="bg-white/60 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">📖 經典閱讀</h3>
              <p className="text-sm text-slate-600">推薦 <strong>Yagpo Sambhota</strong>，傳統美感，適合正式文檔</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
