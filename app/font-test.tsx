'use client'

import { useState } from 'react'

// 測試用的藏文文本
const testTexts = [
  { tibetan: 'སངས་རྒྱས', roman: 'sangs rgyas', meaning: '佛陀' },
  { tibetan: 'བྱང་ཆུབ་སེམས', roman: 'byang chub sems', meaning: '菩提心' },
  { tibetan: 'ཕྱག་རྒྱ་ཆེན་པོ', roman: 'phyag rgya chen po', meaning: '大手印' },
  { tibetan: 'རྫོགས་པ་ཆེན་པོ', roman: 'rdzogs pa chen po', meaning: '大圓滿' },
  { tibetan: 'སྔོན་འགྲོ་བཞི', roman: 'sngon \'gro bzhi', meaning: '四前行' },
  { tibetan: 'བླ་མ་རྣལ་འབྱོར', roman: 'bla ma rnal \'byor', meaning: '上師瑜伽' }
]

export default function FontTestPage() {
  const [selectedFont, setSelectedFont] = useState('noto')

  const fontClasses = {
    noto: 'font-["Noto_Sans_Tibetan"]',
    yagpo: 'font-["YagpoUni"]',
    sambhota: 'font-["YagpoSambhotaUni"]'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* 標題 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">藏文字體比較測試</h1>
          <p className="text-lg text-slate-600">比較三種藏文字體的顯示效果</p>
        </div>

        {/* 字體選擇器 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">選擇字體</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedFont('noto')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedFont === 'noto'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Noto Sans Tibetan (當前)
            </button>
            <button
              onClick={() => setSelectedFont('yagpo')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedFont === 'yagpo'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Yagpo Unicode
            </button>
            <button
              onClick={() => setSelectedFont('sambhota')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedFont === 'sambhota'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Yagpo Sambhota
            </button>
          </div>
        </div>

        {/* 字體比較 */}
        <div className="grid gap-6">
          {testTexts.map((text, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Noto Sans Tibetan */}
                <div className="text-center">
                  <h3 className="text-sm font-medium text-slate-600 mb-2">Noto Sans Tibetan</h3>
                  <div className={`text-4xl mb-2 font-["Noto_Sans_Tibetan"] ${selectedFont === 'noto' ? 'ring-2 ring-blue-500 rounded-lg p-2' : ''}`}>
                    {text.tibetan}
                  </div>
                </div>

                {/* Yagpo Unicode */}
                <div className="text-center">
                  <h3 className="text-sm font-medium text-slate-600 mb-2">Yagpo Unicode</h3>
                  <div className={`text-4xl mb-2 font-["YagpoUni"] ${selectedFont === 'yagpo' ? 'ring-2 ring-green-500 rounded-lg p-2' : ''}`}>
                    {text.tibetan}
                  </div>
                </div>

                {/* Yagpo Sambhota */}
                <div className="text-center">
                  <h3 className="text-sm font-medium text-slate-600 mb-2">Yagpo Sambhota</h3>
                  <div className={`text-4xl mb-2 font-["YagpoSambhotaUni"] ${selectedFont === 'sambhota' ? 'ring-2 ring-purple-500 rounded-lg p-2' : ''}`}>
                    {text.tibetan}
                  </div>
                </div>
              </div>

              {/* 羅馬音和中文 */}
              <div className="text-center mt-4 pt-4 border-t border-slate-200">
                <p className="text-lg text-slate-700 mb-1">{text.roman}</p>
                <p className="text-sm text-slate-500">{text.meaning}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 大尺寸測試 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 mt-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">大尺寸顯示測試</h2>
          <div className="text-center">
            <div className={`text-8xl mb-4 ${fontClasses[selectedFont as keyof typeof fontClasses]}`}>
              ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྃ
            </div>
            <p className="text-xl text-slate-600">om mani padme hum</p>
            <p className="text-lg text-slate-500">六字大明咒</p>
          </div>
        </div>

        {/* 字體特性比較 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">字體特性比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4">特性</th>
                  <th className="text-center py-3 px-4">Noto Sans Tibetan</th>
                  <th className="text-center py-3 px-4">Yagpo Unicode</th>
                  <th className="text-center py-3 px-4">Yagpo Sambhota</th>
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
                <tr>
                  <td className="py-3 px-4 font-medium">跨平台兼容</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 建議 */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">字體選擇建議</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/60 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Noto Sans Tibetan</h3>
              <p className="text-sm text-slate-600">適合：跨平台兼容、現代設計、初學者</p>
            </div>
            <div className="bg-white/60 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Yagpo Unicode</h3>
              <p className="text-sm text-slate-600">適合：學習應用、完整字符、清晰易讀</p>
            </div>
            <div className="bg-white/60 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">Yagpo Sambhota</h3>
              <p className="text-sm text-slate-600">適合：傳統文本、正式文檔、經典研讀</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
