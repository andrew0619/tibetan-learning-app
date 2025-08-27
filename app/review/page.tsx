'use client'

import { useState } from 'react'
import { Flashcard } from '@/components/flashcards/Flashcard'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Check, X, ArrowLeft, TrendingUp, Target, Clock } from 'lucide-react'
import Link from 'next/link'

// 模擬複習字卡數據
const mockReviewCards = [
  {
    id: 1,
    tibetan: 'ཀ',
    pinyin: 'ka',
    chinese: '卡',
    english: 'ka',
    level: 2,
    next_review: '2024-01-15'
  },
  {
    id: 2,
    tibetan: 'ཁ',
    pinyin: 'kha',
    chinese: '卡哈',
    english: 'kha',
    level: 1,
    next_review: '2024-01-14'
  }
]

export default function ReviewPage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  const currentCard = mockReviewCards[currentCardIndex]
  const progressPercentage = ((currentCardIndex + 1) / mockReviewCards.length) * 100

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
    setShowAnswer(true)
  }

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectCount(correctCount + 1)
    }
    
    // 這裡應該調用 API 更新 SRS 進度
    console.log(`複習卡片 ${currentCard.id} 回答: ${isCorrect ? '正確' : '錯誤'}`)
    
    if (currentCardIndex < mockReviewCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
      setShowAnswer(false)
    } else {
      // 複習完成
      const accuracy = (correctCount / mockReviewCards.length) * 100
      alert(`複習完成！正確率: ${Math.round(accuracy)}%`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* 導航 */}
        <div className="flex items-center mb-8">
          <Link
            href="/"
            className="nav-link text-slate-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回首頁
          </Link>
        </div>

        {/* 頁面標題 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">複習</h1>
          <p className="text-slate-600">使用間隔重複算法，鞏固記憶</p>
        </div>

        {/* 進度和統計 */}
        <div className="card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-slate-600">
                <Target className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">
                  {currentCardIndex + 1}/{mockReviewCards.length}
                </span>
              </div>
              <div className="flex items-center text-slate-600">
                <Clock className="w-5 h-5 mr-2" />
                <span className="text-sm">建議複習時間: 15分鐘</span>
              </div>
            </div>
            <div className="text-sm text-slate-500">
              複習進度 {Math.round(progressPercentage)}%
            </div>
          </div>
          
          <ProgressBar
            progress={progressPercentage}
            label="複習進度"
          />
        </div>

        {/* 統計卡片 */}
        <div className="card p-6 mb-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-800 mb-1">
                {mockReviewCards.length}
              </div>
              <div className="text-sm text-slate-600">今日複習</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600 mb-1">
                {correctCount}
              </div>
              <div className="text-sm text-slate-600">正確</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600 mb-1">
                {currentCardIndex - correctCount}
              </div>
              <div className="text-sm text-slate-600">錯誤</div>
            </div>
          </div>
        </div>

        {/* 字卡區域 */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-md">
            <Flashcard
              tibetan={currentCard.tibetan}
              pinyin={currentCard.pinyin}
              chinese={currentCard.chinese}
              english={currentCard.english}
              onFlip={handleFlip}
            />
          </div>
        </div>

        {/* 答案按鈕 */}
        {showAnswer && (
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => handleAnswer(false)}
              className="btn-outline border-red-500 text-red-600 hover:bg-red-500 hover:text-white"
            >
              <X className="w-5 h-5 mr-2" />
              不記得
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="btn-outline border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white"
            >
              <Check className="w-5 h-5 mr-2" />
              記得
            </button>
          </div>
        )}

        {/* 複習提示 */}
        {!showAnswer && (
          <div className="card p-6 text-center">
            <div className="flex items-center justify-center text-slate-600 mb-2">
              <TrendingUp className="w-5 h-5 mr-2 text-emerald-500" />
              <span className="text-sm font-medium">複習提示</span>
            </div>
            <p className="text-slate-600 text-sm">
              點擊字卡查看中文意思，然後選擇是否記得
            </p>
          </div>
        )}

        {/* 複習建議 */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full shadow-lg">
            <TrendingUp className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">定期複習是記憶的關鍵！</span>
          </div>
        </div>
      </div>
    </div>
  )
}
