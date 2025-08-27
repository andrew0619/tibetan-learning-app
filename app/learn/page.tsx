'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Flashcard } from '@/components/flashcards/Flashcard'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { ArrowLeft, Lightbulb, BookOpen, Brain, Mic } from 'lucide-react'
import Link from 'next/link'
import { 
  completeLearningStages as learningStages,
  getLearningModeCards,
  getRecallModeCards,
  getMasteredCards,
  getCardById
} from '@/lib/complete-tibetan-data'
import { cn } from '@/lib/utils'

export default function LearnPage() {
  const searchParams = useSearchParams()
  const [currentStage, setCurrentStage] = useState<'stage1' | 'stage2' | 'stage3' | 'stage4' | 'stage5' | 'stage6' | 'stage7'>('stage1')
  const [learningMode, setLearningMode] = useState<'learning' | 'recall' | 'practice'>('learning')
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)

  // 處理 URL 參數，如果指定了特定字母，則跳轉到該字母
  useEffect(() => {
    const cardId = searchParams.get('card')
    if (cardId) {
      // 找到該字母所在的階段
      let targetStage: typeof currentStage = 'stage1'
      let targetIndex = 0
      
      // 在所有階段中查找該字母
      const allStages: (typeof currentStage)[] = ['stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6', 'stage7']
      for (const stage of allStages) {
        const cards = getLearningModeCards(stage)
        const cardIndex = cards.findIndex(card => card.id === cardId)
        if (cardIndex !== -1) {
          targetStage = stage
          targetIndex = cardIndex
          break
        }
      }
      
      setCurrentStage(targetStage)
      setCurrentCardIndex(targetIndex)
      setLearningMode('learning')
      setCorrectCount(0)
      setTotalAttempts(0)
    }
  }, [searchParams])

  // 獲取當前階段的字卡
  const getCurrentCards = () => {
    switch (learningMode) {
      case 'learning':
        return getLearningModeCards(currentStage)
      case 'recall':
        return getRecallModeCards(currentStage)
      case 'practice':
        return getMasteredCards(currentStage)
      default:
        return getLearningModeCards(currentStage)
    }
  }

  const currentCards = getCurrentCards()
  const currentCard = currentCards[currentCardIndex]
  const progressPercentage = currentCards.length > 0 ? ((currentCardIndex + 1) / currentCards.length) * 100 : 0
  const accuracy = totalAttempts > 0 ? (correctCount / totalAttempts) * 100 : 0

  const handleCardAnswer = (isCorrect: boolean) => {
    setTotalAttempts(prev => prev + 1)
    if (isCorrect) {
      setCorrectCount(prev => prev + 1)
    }
    
    // 這裡應該調用 API 更新學習進度
    console.log(`卡片 ${currentCard.id} 回答: ${isCorrect ? '正確' : '錯誤'}`)
    
    if (currentCardIndex < currentCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
    } else {
      // 當前模式完成
      if (learningMode === 'learning') {
        // 學習完成，進入背誦模式
        setLearningMode('recall')
        setCurrentCardIndex(0)
        setCorrectCount(0)
        setTotalAttempts(0)
      } else if (learningMode === 'recall') {
        // 背誦完成，進入練習模式
        setLearningMode('practice')
        setCurrentCardIndex(0)
        setCorrectCount(0)
        setTotalAttempts(0)
      } else {
        // 練習完成
        alert('恭喜！今日學習完成！')
      }
    }
  }

  const handleStageChange = (stage: typeof currentStage) => {
    setCurrentStage(stage)
    setLearningMode('learning')
    setCurrentCardIndex(0)
    setCorrectCount(0)
    setTotalAttempts(0)
  }

  const getModeDescription = () => {
    switch (learningMode) {
      case 'learning':
        return '學習模式：認識字母和拼音'
      case 'recall':
        return '背誦模式：回憶字母的拼音'
      case 'practice':
        return '練習模式：練習發音'
      default:
        return ''
    }
  }

  if (!currentCard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">學習完成！</h1>
            <p className="text-slate-600 mb-8">當前階段的所有字卡都已完成</p>
            <Link href="/" className="btn-primary">
              返回首頁
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* 導航 */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center text-slate-600 hover:text-slate-800 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回首頁
          </Link>
          <div className="text-sm text-slate-500">
            {learningStages[currentStage].name}
          </div>
        </div>

        {/* 標題 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            字卡學習
          </h1>
          <p className="text-lg text-slate-600">
            掌握藏文字母，建立堅實基礎
          </p>
        </div>

        {/* 學習階段選擇 */}
        <div className="card p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">學習階段</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(learningStages).map(([key, stage]) => (
              <button
                key={key}
                onClick={() => handleStageChange(key as typeof currentStage)}
                className={cn(
                  "p-4 rounded-lg text-left transition-all duration-300",
                  currentStage === key
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                    : "bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-md"
                )}
              >
                <div className="font-semibold mb-1">{stage.name}</div>
                <div className={cn(
                  "text-sm",
                  currentStage === key ? "text-white/80" : "text-slate-600"
                )}>
                  {stage.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 學習模式指示器 */}
        <div className="card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {learningMode === 'learning' && <BookOpen className="w-5 h-5 text-indigo-600" />}
                {learningMode === 'recall' && <Brain className="w-5 h-5 text-emerald-600" />}
                {learningMode === 'practice' && <Mic className="w-5 h-5 text-purple-600" />}
                <span className="font-semibold text-slate-800">{getModeDescription()}</span>
              </div>
            </div>
            <div className="text-sm text-slate-500">
              {currentCardIndex + 1} / {currentCards.length}
            </div>
          </div>
          
          <ProgressBar
            progress={progressPercentage}
            label="學習進度"
            className="mb-4"
          />

          {/* 統計信息 */}
          {learningMode !== 'learning' && (
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-slate-800">{totalAttempts}</div>
                <div className="text-sm text-slate-600">總嘗試</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600">{correctCount}</div>
                <div className="text-sm text-slate-600">正確</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600">{Math.round(accuracy)}%</div>
                <div className="text-sm text-slate-600">準確率</div>
              </div>
            </div>
          )}
        </div>

        {/* 字卡區域 */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-md">
            <Flashcard
              card={currentCard}
              mode={learningMode}
              onAnswer={handleCardAnswer}
            />
            
            {/* 學習導航按鈕 */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => {
                  if (currentCardIndex > 0) {
                    setCurrentCardIndex(currentCardIndex - 1)
                  }
                }}
                disabled={currentCardIndex === 0}
                className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← 上一個
              </button>
              
              <div className="text-center">
                <div className="text-sm text-slate-600 mb-1">
                  {currentCardIndex + 1} / {currentCards.length}
                </div>
                <div className="text-xs text-slate-500">
                  {learningMode === 'learning' && '學習模式'}
                  {learningMode === 'recall' && '背誦模式'}
                  {learningMode === 'practice' && '練習模式'}
                </div>
              </div>
              
              <button
                onClick={() => {
                  if (currentCardIndex < currentCards.length - 1) {
                    setCurrentCardIndex(currentCardIndex + 1)
                  } else if (learningMode === 'learning') {
                    // 學習完成，進入背誦模式
                    setLearningMode('recall')
                    setCurrentCardIndex(0)
                    setCorrectCount(0)
                    setTotalAttempts(0)
                  } else if (learningMode === 'recall') {
                    // 背誦完成，進入練習模式
                    setLearningMode('practice')
                    setCurrentCardIndex(0)
                    setCorrectCount(0)
                    setTotalAttempts(0)
                  }
                }}
                disabled={currentCardIndex === currentCards.length - 1 && learningMode === 'practice'}
                className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentCardIndex === currentCards.length - 1 && learningMode !== 'practice' 
                  ? '完成學習 →' 
                  : '下一個 →'}
              </button>
            </div>
          </div>
        </div>

        {/* 學習提示 */}
        <div className="card p-6 text-center">
          <div className="flex items-center justify-center text-slate-600 mb-2">
            <Lightbulb className="w-5 h-5 mr-2 text-amber-500" />
            <span className="text-sm font-medium">學習提示</span>
          </div>
          <p className="text-slate-600 text-sm">
            {learningMode === 'learning' && '仔細觀察字母和拼音的對應關係'}
            {learningMode === 'recall' && '嘗試回憶字母的拼音，然後翻轉卡片檢查'}
            {learningMode === 'practice' && '嘗試發音，然後聽正確的發音進行對比'}
          </p>
        </div>

        {/* 學習建議 */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
            <Lightbulb className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">每天堅持學習，效果會更好！</span>
          </div>
        </div>
      </div>
    </div>
  )
}
