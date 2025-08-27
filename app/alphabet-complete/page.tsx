'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Eye } from 'lucide-react'
import { 
  thirtyLetters, 
  vowelMarks, 
  suffixes, 
  secondSuffixes, 
  prefixes, 
  superscripts, 
  subjoined, 
  grammarWords,
  type CompleteTibetanCard 
} from '@/lib/complete-tibetan-data'

interface CategoryInfo {
  id: string
  name: string
  description: string
  cards: CompleteTibetanCard[]
  color: string
  bgColor: string
}

export default function CompleteAlphabetPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('thirty')
  const [selectedCard, setSelectedCard] = useState<CompleteTibetanCard | null>(null)

  const categories: CategoryInfo[] = [
    {
      id: 'thirty',
      name: '三十字母',
      description: '基礎藏文字母，按發音部位分組',
      cards: thirtyLetters,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'vowels',
      name: '元音符號',
      description: '四個基本元音符號',
      cards: vowelMarks,
      color: 'text-green-700',
      bgColor: 'bg-green-50'
    },
    {
      id: 'suffixes',
      name: '後音系統',
      description: '十個後音和兩個再後音',
      cards: [...suffixes, ...secondSuffixes],
      color: 'text-purple-700',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'prefixes',
      name: '前音系統',
      description: '五個前音，影響清濁變化',
      cards: prefixes,
      color: 'text-orange-700',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'superscripts',
      name: '字頭系統',
      description: '三個字頭，加在字母上方',
      cards: superscripts,
      color: 'text-red-700',
      bgColor: 'bg-red-50'
    },
    {
      id: 'subjoined',
      name: '字足系統',
      description: '四個字足，加在字母下方',
      cards: subjoined,
      color: 'text-indigo-700',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 'grammar',
      name: '語法小詞',
      description: '常用語法標記和介詞',
      cards: grammarWords,
      color: 'text-gray-700',
      bgColor: 'bg-gray-50'
    }
  ]

  const currentCategory = categories.find(cat => cat.id === selectedCategory)

  const handleCardClick = (card: CompleteTibetanCard) => {
    setSelectedCard(card)
  }

  const closeModal = () => {
    setSelectedCard(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
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
              <h1 className="text-4xl font-bold text-slate-800">完整藏文字母系統</h1>
              <p className="text-lg text-slate-600 mt-2">系統學習藏文字母的完整結構</p>
            </div>
          </div>
        </div>

        {/* 分類選擇器 */}
        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl text-center transition-all duration-300 border-2 ${
                  selectedCategory === category.id
                    ? `${category.bgColor} ${category.color} border-current shadow-lg scale-105`
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="font-semibold text-sm mb-1">{category.name}</div>
                <div className="text-xs opacity-75">{category.cards.length}個</div>
              </button>
            ))}
          </div>
        </div>

        {/* 當前分類信息 */}
        {currentCategory && (
          <div className={`${currentCategory.bgColor} rounded-2xl p-6 mb-8 border border-opacity-20`}>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className={`w-6 h-6 ${currentCategory.color}`} />
              <h2 className={`text-2xl font-bold ${currentCategory.color}`}>
                {currentCategory.name}
              </h2>
            </div>
            <p className="text-slate-700 mb-4">{currentCategory.description}</p>
            <div className="text-sm text-slate-600">
              共 <span className="font-semibold">{currentCategory.cards.length}</span> 個字母/符號
            </div>
          </div>
        )}

        {/* 字母網格 */}
        {currentCategory && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {currentCategory.cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 border border-white/20"
              >
                <div className="text-center">
                  {/* 藏文字母 - 超大顯示 */}
                  <div className="alphabet-tibetan text-slate-800 mb-4">
                    {card.tibetan}
                  </div>
                  
                  {/* 羅馬音 */}
                  <div className="text-lg font-medium text-slate-600 mb-2">
                    {card.roman}
                  </div>
                  
                  {/* 康巴音 */}
                  {card.khamPronunciation && (
                    <div className="text-sm text-indigo-600 font-medium mb-2">
                      康巴音: {card.khamPronunciation}
                    </div>
                  )}
                  
                  {/* 分組信息 */}
                  {card.group && (
                    <div className="text-xs text-slate-500 bg-slate-100 rounded-full px-2 py-1 inline-block">
                      {card.group}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 字母詳情模態框 */}
        {selectedCard && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800">字母詳情</h3>
                <button
                  onClick={closeModal}
                  className="text-slate-400 hover:text-slate-600 text-2xl font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="text-center mb-8">
                {/* 超大藏文顯示 */}
                <div className="tibetan-3xl text-slate-800 mb-6">
                  {selectedCard.tibetan}
                </div>
                
                {/* 發音信息 */}
                <div className="space-y-3 mb-6">
                  <div className="text-2xl font-semibold text-slate-700">
                    羅馬音: {selectedCard.roman}
                  </div>
                  {selectedCard.khamPronunciation && (
                    <div className="text-xl text-indigo-600 font-medium">
                      康巴音: {selectedCard.khamPronunciation}
                    </div>
                  )}
                </div>
              </div>

              {/* 詳細信息 */}
              <div className="space-y-4">
                {selectedCard.group && (
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="font-semibold text-blue-800 mb-1">分組</div>
                    <div className="text-blue-700">{selectedCard.group}</div>
                  </div>
                )}

                {selectedCard.notes && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="font-semibold text-green-800 mb-1">說明</div>
                    <div className="text-green-700">{selectedCard.notes}</div>
                  </div>
                )}

                {selectedCard.examples && selectedCard.examples.length > 0 && (
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="font-semibold text-purple-800 mb-3">示例詞彙</div>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedCard.examples.map((example, index) => (
                        <div key={index} className="text-center p-2 bg-white rounded-lg">
                          <div className="tibetan-medium text-purple-700 mb-1">
                            {example}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 學習提示 */}
                <div className="bg-amber-50 rounded-lg p-4">
                  <div className="font-semibold text-amber-800 mb-2">學習提示</div>
                  <div className="text-amber-700 text-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-4 h-4" />
                      <span>難度等級: {selectedCard.difficulty}/5</span>
                    </div>
                    <div>分類: {selectedCard.category === 'root' ? '基礎字母' : 
                                selectedCard.category === 'vowel' ? '元音符號' :
                                selectedCard.category === 'suffix' ? '後音' :
                                selectedCard.category === 'second-suffix' ? '再後音' :
                                selectedCard.category === 'prefix' ? '前音' :
                                selectedCard.category === 'superscript' ? '字頭' :
                                selectedCard.category === 'subjoined' ? '字足' :
                                selectedCard.category === 'grammar' ? '語法詞' : '詞彙'}</div>
                  </div>
                </div>
              </div>

              {/* 學習按鈕 */}
              <div className="mt-8 flex gap-4">
                <Link
                  href={`/learn?card=${selectedCard.id}`}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 text-center"
                  onClick={closeModal}
                >
                  開始學習此字母
                </Link>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border-2 border-slate-300 text-slate-600 font-semibold rounded-xl hover:border-slate-400 hover:text-slate-700 transition-all duration-300"
                >
                  關閉
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
