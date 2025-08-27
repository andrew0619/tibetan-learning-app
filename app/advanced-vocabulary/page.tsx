'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Target, Users, Flame, Eye, EyeOff, Volume2 } from 'lucide-react'
import { 
  advancedLearningStages, 
  traditionPaths, 
  getVocabularyByStage,
  getVocabularyByTradition,
  type AdvancedTibetanCard 
} from '@/lib/advanced-tibetan-vocabulary'

type LearningMode = 'stage' | 'tradition' | 'all'
type CardMode = 'learning' | 'recall' | 'test'

export default function AdvancedVocabularyPage() {
  const [learningMode, setLearningMode] = useState<LearningMode>('stage')
  const [selectedStage, setSelectedStage] = useState<string>('foundation')
  const [selectedTradition, setSelectedTradition] = useState<string>('kagyu')
  const [cardMode, setCardMode] = useState<CardMode>('learning')
  const [currentCards, setCurrentCards] = useState<AdvancedTibetanCard[]>([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showTranslation, setShowTranslation] = useState(true)
  const [showPronunciation, setShowPronunciation] = useState(true)
  const [masteredCards, setMasteredCards] = useState<Set<string>>(new Set())

  // 載入學習進度
  useEffect(() => {
    const saved = localStorage.getItem('advanced-vocabulary-progress')
    if (saved) {
      try {
        const progress = JSON.parse(saved)
        setMasteredCards(new Set(progress.masteredCards || []))
      } catch (error) {
        console.error('Failed to load progress:', error)
      }
    }
  }, [])

  // 保存學習進度
  const saveProgress = (newMasteredCards: Set<string>) => {
    const progress = {
      masteredCards: Array.from(newMasteredCards),
      lastUpdated: new Date().toISOString()
    }
    localStorage.setItem('advanced-vocabulary-progress', JSON.stringify(progress))
  }

  // 更新當前卡片
  useEffect(() => {
    let cards: AdvancedTibetanCard[] = []
    
    switch (learningMode) {
      case 'stage':
        cards = getVocabularyByStage(selectedStage)
        break
      case 'tradition':
        cards = getVocabularyByTradition(selectedTradition)
        break
      case 'all':
        cards = Object.values(advancedLearningStages).flatMap(stage => stage.vocabulary)
        break
    }
    
    setCurrentCards(cards)
    setCurrentCardIndex(0)
  }, [learningMode, selectedStage, selectedTradition])

  const currentCard = currentCards[currentCardIndex]

  const handleNext = () => {
    if (currentCardIndex < currentCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
    }
  }

  const handleMastered = () => {
    if (currentCard) {
      const newMasteredCards = new Set(masteredCards)
      if (masteredCards.has(currentCard.id)) {
        newMasteredCards.delete(currentCard.id)
      } else {
        newMasteredCards.add(currentCard.id)
      }
      setMasteredCards(newMasteredCards)
      saveProgress(newMasteredCards)
    }
  }

  const getProgressStats = () => {
    const total = currentCards.length
    const mastered = currentCards.filter(card => masteredCards.has(card.id)).length
    const progress = total > 0 ? Math.round((mastered / total) * 100) : 0
    return { total, mastered, progress }
  }

  const stats = getProgressStats()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
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
              <h1 className="text-4xl font-bold text-slate-800">佛學詞彙學習</h1>
              <p className="text-lg text-slate-600 mt-2">500個藏傳佛教修持必備詞彙</p>
            </div>
          </div>
        </div>

        {/* 學習模式選擇 */}
        <div className="card p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">學習模式</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => setLearningMode('stage')}
              className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                learningMode === 'stage'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-transparent shadow-lg'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5" />
                <span className="font-semibold">階段學習</span>
              </div>
              <p className="text-sm opacity-90">按修行階段循序漸進</p>
            </button>

            <button
              onClick={() => setLearningMode('tradition')}
              className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                learningMode === 'tradition'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white border-transparent shadow-lg'
                  : 'bg-white border-slate-200 hover:border-purple-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">傳承學習</span>
              </div>
              <p className="text-sm opacity-90">按噶舉/寧瑪傳承分類</p>
            </button>

            <button
              onClick={() => setLearningMode('all')}
              className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                learningMode === 'all'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-transparent shadow-lg'
                  : 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">全部詞彙</span>
              </div>
              <p className="text-sm opacity-90">學習全部500個詞彙</p>
            </button>
          </div>

          {/* 子分類選擇 */}
          {learningMode === 'stage' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">選擇學習階段</label>
              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {Object.entries(advancedLearningStages).map(([key, stage]) => (
                  <option key={key} value={key}>
                    {stage.name} ({stage.vocabulary.length}個詞彙)
                  </option>
                ))}
              </select>
            </div>
          )}

          {learningMode === 'tradition' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">選擇傳承</label>
              <select
                value={selectedTradition}
                onChange={(e) => setSelectedTradition(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {Object.entries(traditionPaths).map(([key, tradition]) => (
                  <option key={key} value={key}>
                    {tradition.name} ({getVocabularyByTradition(key).length}個詞彙)
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* 學習進度 */}
        <div className="card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800">學習進度</h3>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <span>{currentCardIndex + 1} / {currentCards.length}</span>
              <span>{stats.progress}% 完成</span>
            </div>
          </div>
          
          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden mb-4">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${stats.progress}%` }}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-800">{stats.total}</div>
              <div className="text-sm text-slate-600">總詞彙</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">{stats.mastered}</div>
              <div className="text-sm text-slate-600">已掌握</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-600">{stats.total - stats.mastered}</div>
              <div className="text-sm text-slate-600">待學習</div>
            </div>
          </div>
        </div>

        {/* 字卡學習區 */}
        {currentCard && (
          <div className="card p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-800">詞彙學習</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPronunciation(!showPronunciation)}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                  title={showPronunciation ? "隱藏發音" : "顯示發音"}
                >
                  {showPronunciation ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                  title={showTranslation ? "隱藏中文" : "顯示中文"}
                >
                  {showTranslation ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="text-center mb-8">
              {/* 藏文詞彙 - 超大字體 */}
              <div className="flashcard-tibetan text-slate-800 mb-6">
                {currentCard.tibetan}
              </div>

              {/* 發音信息 */}
              {showPronunciation && (
                <div className="space-y-2 mb-6">
                  <div className="text-2xl text-slate-600 font-medium">
                    {currentCard.roman}
                  </div>
                  {currentCard.khamPronunciation && (
                    <div className="text-xl text-indigo-600 font-medium">
                      康巴音: {currentCard.khamPronunciation}
                    </div>
                  )}
                </div>
              )}

              {/* 中文翻譯 */}
              {showTranslation && (
                <div className="space-y-3 mb-6">
                  <div className="text-2xl font-semibold text-slate-700">
                    {currentCard.notes}
                  </div>
                  {currentCard.context && (
                    <div className="text-lg text-slate-600">
                      使用情境: {currentCard.context}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 詳細信息 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentCard.category && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="font-semibold text-blue-800 mb-1">分類</div>
                  <div className="text-blue-700">{currentCard.category}</div>
                </div>
              )}

              {currentCard.stage && (
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="font-semibold text-green-800 mb-1">學習階段</div>
                  <div className="text-green-700">
                    {advancedLearningStages[currentCard.stage]?.name || currentCard.stage}
                  </div>
                </div>
              )}

              {currentCard.tradition && (
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="font-semibold text-purple-800 mb-1">相關傳承</div>
                  <div className="text-purple-700">
                    {traditionPaths[currentCard.tradition]?.name || currentCard.tradition}
                  </div>
                </div>
              )}

              <div className="bg-amber-50 rounded-lg p-4">
                <div className="font-semibold text-amber-800 mb-1">重要程度</div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Flame 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < currentCard.level 
                          ? 'text-amber-500 fill-current' 
                          : 'text-amber-300'
                      }`} 
                    />
                  ))}
                  <span className="ml-2 text-amber-700">{currentCard.level}/5</span>
                </div>
              </div>
            </div>

            {/* 使用說明 */}
            {currentCard.examples && currentCard.examples.length > 0 && (
              <div className="bg-slate-50 rounded-lg p-4 mb-8">
                <div className="font-semibold text-slate-800 mb-2">相關詞彙</div>
                <div className="text-slate-700">
                  {currentCard.examples.map((example, index) => (
                    <div key={index} className="tibetan-small mb-1">{example}</div>
                  ))}
                </div>
              </div>
            )}

            {/* 控制按鈕 */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentCardIndex === 0}
                className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← 上一個
              </button>

              <button
                onClick={handleMastered}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  masteredCards.has(currentCard.id)
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {masteredCards.has(currentCard.id) ? '已掌握 ✓' : '標記為已掌握'}
              </button>

              <button
                onClick={handleNext}
                disabled={currentCardIndex === currentCards.length - 1}
                className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                下一個 →
              </button>
            </div>
          </div>
        )}

        {/* 快速導航 */}
        {currentCards.length > 0 && (
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">快速導航</h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-15 lg:grid-cols-20 gap-2">
              {currentCards.map((card, index) => (
                <button
                  key={card.id}
                  onClick={() => setCurrentCardIndex(index)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
                    index === currentCardIndex
                      ? 'bg-blue-500 text-white shadow-lg scale-110'
                      : masteredCards.has(card.id)
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                  title={`${card.notes} (${card.roman})`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
