'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Eye, EyeOff } from 'lucide-react'
import { 
  thirtyLetters, 
  superscripts, 
  subjoined, 
  prefixes, 
  suffixes, 
  vowelMarks,
  grammarWords,
  buddhistVocabulary,
  getAllAlphabetCards,

} from '@/lib/tibetan-data'
import { learningProgressManager } from '@/lib/learning-progress'

export default function AlphabetPage() {
  const [showPinyin, setShowPinyin] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'basic' | 'marks' | 'prefix' | 'vowel' | 'grammar' | 'vocabulary'>('all')

  const categories = [
    { id: 'all', name: '全部字母', count: getAllAlphabetCards().length },
    { id: 'basic', name: '三十字母', count: thirtyLetters.length },
    { id: 'marks', name: '字頭字足', count: superscripts.length + subjoined.length },
    { id: 'prefix', name: '前後音', count: prefixes.length + suffixes.length },
    { id: 'vowel', name: '母音記號', count: vowelMarks.length },
    { id: 'grammar', name: '語法小詞', count: grammarWords.length },
    { id: 'vocabulary', name: '佛學詞彙', count: buddhistVocabulary.length }
  ]

  const getFilteredCards = () => {
    switch (selectedCategory) {
      case 'basic':
        return thirtyLetters
      case 'marks':
        return [...superscripts, ...subjoined]
      case 'prefix':
        return [...prefixes, ...suffixes]
      case 'vowel':
        return vowelMarks
      case 'grammar':
        return grammarWords
      case 'vocabulary':
        return buddhistVocabulary
      default:
        return getAllAlphabetCards()
    }
  }

  const getCardProgress = (cardId: string) => {
    return learningProgressManager.getCardProgress(cardId)
  }

  const getProgressColor = (masteryLevel: number) => {
    if (masteryLevel >= 4) return 'bg-emerald-500'
    if (masteryLevel >= 2) return 'bg-yellow-500'
    return 'bg-slate-300'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* 頁面標題 */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首頁
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">藏文字母總表</h1>
          <p className="text-slate-600">按圖索驥，系統學習藏文字母</p>
        </div>

        {/* 控制面板 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* 分類選擇 */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            {/* 拼音顯示切換 */}
            <button
              onClick={() => setShowPinyin(!showPinyin)}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
            >
              {showPinyin ? (
                <>
                  <EyeOff className="w-4 h-4 mr-2" />
                  隱藏拼音
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 mr-2" />
                  顯示拼音
                </>
              )}
            </button>
          </div>
        </div>

        {/* 字母網格 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {getFilteredCards().map((card) => {
            const progress = getCardProgress(card.id)
            const isMastered = progress.masteryLevel >= 4
            
            return (
              <div
                key={card.id}
                className={`group relative bg-white/80 backdrop-blur-xl rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  isMastered ? 'ring-2 ring-emerald-200' : ''
                }`}
                onClick={() => {
                  // 可以導航到學習頁面並自動選擇這個字母
                  window.location.href = `/learn?card=${card.id}`
                }}
              >
                {/* 掌握度指示器 */}
                <div className="absolute top-2 right-2">
                  <div className={`w-3 h-3 rounded-full ${getProgressColor(progress.masteryLevel)}`} />
                </div>

                {/* 字母 */}
                <div className="text-center mb-3">
                  <div className="tibetan-medium text-slate-800 mb-2">
                    {card.tibetan}
                  </div>
                  
                  {/* 拼音 */}
                  {showPinyin && (
                    <div className="text-sm text-slate-600 font-medium">
                      {card.pinyin}
                    </div>
                  )}
                </div>

                {/* 進度條 */}
                <div className="w-full bg-slate-200 rounded-full h-1 mb-2">
                  <div 
                    className={`h-1 rounded-full transition-all ${
                      progress.masteryLevel >= 4 
                        ? 'bg-emerald-500' 
                        : progress.masteryLevel >= 2 
                        ? 'bg-yellow-500' 
                        : 'bg-slate-300'
                    }`}
                    style={{ width: `${(progress.masteryLevel / 5) * 100}%` }}
                  />
                </div>

                {/* 狀態文字 */}
                <div className="text-xs text-center text-slate-500">
                  {progress.masteryLevel >= 4 ? (
                    <span className="text-emerald-600 font-medium">已掌握</span>
                  ) : progress.masteryLevel >= 2 ? (
                    <span className="text-yellow-600">學習中</span>
                  ) : (
                    <span>未學習</span>
                  )}
                </div>

                {/* 懸停效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            )
          })}
        </div>

        {/* 學習統計 */}
        <div className="mt-12 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">學習統計</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => {
              const cards = category.id === 'all' 
                ? getAllAlphabetCards()
                : category.id === 'basic' 
                ? thirtyLetters 
                : category.id === 'marks' 
                ? [...superscripts, ...subjoined]
                : category.id === 'prefix'
                ? [...prefixes, ...suffixes]
                : category.id === 'vowel'
                ? vowelMarks
                : category.id === 'grammar'
                ? grammarWords
                : buddhistVocabulary
              
              const masteredCount = cards.filter(card => 
                learningProgressManager.getCardProgress(card.id).masteryLevel >= 4
              ).length
              
              const progressPercent = cards.length > 0 ? (masteredCount / cards.length) * 100 : 0
              
              return (
                <div key={category.id} className="text-center">
                  <div className="text-2xl font-bold text-slate-800">{category.name}</div>
                  <div className="text-sm text-slate-600 mb-2">
                    {masteredCount} / {cards.length} 已掌握
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {progressPercent.toFixed(0)}%
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
