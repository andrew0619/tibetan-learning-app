'use client'

import { useState, useEffect } from 'react'
import { Type, Settings } from 'lucide-react'

export interface FontSettings {
  tibetanFont: 'noto' | 'yagpo-uni' | 'yagpo-sambhota'
  fontSize: 'small' | 'medium' | 'large' | 'xl' | '2xl'
}

interface FontSelectorProps {
  currentSettings: FontSettings
  onSettingsChange: (settings: FontSettings) => void
  className?: string
}

const fontOptions = [
  {
    id: 'noto' as const,
    name: 'Noto Sans Tibetan',
    description: '標準 Google 字體，跨平台兼容',
    className: 'font-noto-tibetan',
    pros: ['跨平台兼容', '載入速度快', '現代設計'],
    cons: ['字符較少', '傳統感不足']
  },
  {
    id: 'yagpo-uni' as const,
    name: 'Yagpo Unicode',
    description: '專業藏文字體，字符完整',
    className: 'font-yagpo-uni',
    pros: ['字符完整', '學習友好', '清晰易讀'],
    cons: ['檔案較大', '載入時間長']
  },
  {
    id: 'yagpo-sambhota' as const,
    name: 'Yagpo Sambhota',
    description: '傳統書法風格，經典美感',
    className: 'font-yagpo-sambhota',
    pros: ['傳統美感', '經典風格', '正式文檔'],
    cons: ['檔案最大', '現代感不足']
  }
]

const sizeOptions = [
  { id: 'small' as const, name: '小', className: 'tibetan-small', size: '1rem' },
  { id: 'medium' as const, name: '中', className: 'tibetan-medium', size: '1.5rem' },
  { id: 'large' as const, name: '大', className: 'tibetan-large', size: '2.5rem' },
  { id: 'xl' as const, name: '特大', className: 'tibetan-xl', size: '3rem' },
  { id: '2xl' as const, name: '超大', className: 'tibetan-2xl', size: '4rem' }
]

export default function FontSelector({ currentSettings, onSettingsChange, className = '' }: FontSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [previewText] = useState('སངས་རྒྱས་ཆོས་དགེ་འདུན')

  // 保存設定到 localStorage
  useEffect(() => {
    localStorage.setItem('tibetan-font-settings', JSON.stringify(currentSettings))
  }, [currentSettings])

  const handleFontChange = (font: FontSettings['tibetanFont']) => {
    onSettingsChange({ ...currentSettings, tibetanFont: font })
  }

  const handleSizeChange = (size: FontSettings['fontSize']) => {
    onSettingsChange({ ...currentSettings, fontSize: size })
  }

  const getCurrentFontClass = () => {
    const fontClass = fontOptions.find(f => f.id === currentSettings.tibetanFont)?.className || 'font-noto-tibetan'
    const sizeClass = sizeOptions.find(s => s.id === currentSettings.fontSize)?.className || 'tibetan-medium'
    return `${fontClass} ${sizeClass}`
  }

  return (
    <div className={`relative ${className}`}>
      {/* 觸發按鈕 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
      >
        <Type className="w-4 h-4 text-slate-600" />
        <span className="text-sm font-medium text-slate-700">字體設定</span>
        <Settings className="w-4 h-4 text-slate-500" />
      </button>

      {/* 設定面板 */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-6 z-50">
          {/* 標題 */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800">藏文字體設定</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* 預覽區域 */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
            <p className="text-sm text-slate-600 mb-2">預覽效果</p>
            <div className={`text-center ${getCurrentFontClass()}`}>
              {previewText}
            </div>
            <p className="text-xs text-slate-500 text-center mt-2">三寶 (佛法僧)</p>
          </div>

          {/* 字體選擇 */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-slate-700 mb-3">選擇字體</h4>
            <div className="space-y-3">
              {fontOptions.map((font) => (
                <div
                  key={font.id}
                  className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    currentSettings.tibetanFont === font.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                  onClick={() => handleFontChange(font.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h5 className="font-medium text-slate-800">{font.name}</h5>
                      <p className="text-xs text-slate-600 mt-1">{font.description}</p>
                      
                      {/* 優缺點 */}
                      <div className="flex gap-4 mt-2">
                        <div>
                          <p className="text-xs text-green-600 font-medium">優點:</p>
                          <ul className="text-xs text-green-600">
                            {font.pros.map((pro, idx) => (
                              <li key={idx}>• {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs text-orange-600 font-medium">注意:</p>
                          <ul className="text-xs text-orange-600">
                            {font.cons.map((con, idx) => (
                              <li key={idx}>• {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* 字體預覽 */}
                    <div className={`ml-3 text-xl ${font.className}`}>
                      ཨོཾ
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 字體大小 */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-slate-700 mb-3">字體大小</h4>
            <div className="grid grid-cols-5 gap-2">
              {sizeOptions.map((size) => (
                <button
                  key={size.id}
                  onClick={() => handleSizeChange(size.id)}
                  className={`p-2 rounded-lg text-sm font-medium transition-all ${
                    currentSettings.fontSize === size.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
            <div className="mt-2 text-xs text-slate-500 text-center">
              當前大小: {sizeOptions.find(s => s.id === currentSettings.fontSize)?.size}
            </div>
          </div>

          {/* 建議 */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-3">
            <h4 className="text-sm font-medium text-amber-800 mb-2">💡 使用建議</h4>
            <div className="text-xs text-amber-700 space-y-1">
              <p>• <strong>初學者</strong>：推薦 Yagpo Unicode + 中等大小</p>
              <p>• <strong>經典研讀</strong>：推薦 Yagpo Sambhota + 大字體</p>
              <p>• <strong>移動設備</strong>：推薦 Noto Sans Tibetan + 小字體</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// 從 localStorage 載入字體設定
export function loadFontSettings(): FontSettings {
  if (typeof window === 'undefined') {
    return { tibetanFont: 'yagpo-uni', fontSize: 'medium' }
  }

  try {
    const saved = localStorage.getItem('tibetan-font-settings')
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (error) {
    console.warn('Failed to load font settings:', error)
  }

  return { tibetanFont: 'yagpo-uni', fontSize: 'medium' }
}
