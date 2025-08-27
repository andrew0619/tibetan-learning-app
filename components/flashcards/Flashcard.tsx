'use client'

import { useState } from 'react'
import { Play, Volume2, RotateCcw, Eye, EyeOff } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TibetanCard } from '@/lib/tibetan-data'

interface FlashcardProps {
  card: TibetanCard
  mode: 'learning' | 'recall' | 'practice'
  onFlip?: () => void
  onAnswer?: (isCorrect: boolean) => void
  className?: string
}

export function Flashcard({
  card,
  mode,
  onFlip,
  onAnswer,
  className
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [showPinyin, setShowPinyin] = useState(false) // 學習模式一開始隱藏拼音
  const [isPlaying, setIsPlaying] = useState(false)

  const handleFlip = () => {
    if (mode === 'recall') {
      // 背誦模式：翻轉顯示拼音答案
      setIsFlipped(!isFlipped)
      onFlip?.()
    } else if (mode === 'practice') {
      // 練習模式：翻轉顯示正確發音
      setIsFlipped(!isFlipped)
      onFlip?.()
    }
  }

  const handlePlayAudio = async () => {
    if (!card.audioUrl) return
    
    setIsPlaying(true)
    try {
      const audio = new Audio(card.audioUrl)
      await audio.play()
    } catch (error) {
      console.error('播放音頻失敗:', error)
    } finally {
      setIsPlaying(false)
    }
  }

  const handleTogglePinyin = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowPinyin(!showPinyin)
  }

  const renderCardContent = () => {
    switch (mode) {
      case 'learning':
        // 學習模式：顯示字母 + 拼音（可切換顯示）
        return (
          <div className="text-center">
            <div className="flashcard-tibetan text-slate-800 mb-6">
              {card.tibetan}
            </div>
            {showPinyin ? (
              <div className="space-y-2 mb-4">
                <div className="text-2xl text-slate-600 font-medium">
                  {card.roman}
                </div>
                {card.khamPronunciation && (
                  <div className="text-lg text-indigo-600 font-medium">
                    康巴音: {card.khamPronunciation}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-lg text-slate-500 mb-4">
                點擊眼睛按鈕顯示發音
              </div>
            )}
            {card.examples && card.examples.length > 0 && showPinyin && (
              <div className="text-sm text-slate-500 mt-4">
                <div className="font-medium mb-2">包含此字母的詞彙：</div>
                <div className="tibetan-text text-lg">
                  {card.examples[0]}
                </div>
              </div>
            )}
          </div>
        )

      case 'recall':
        // 背誦模式：只顯示字母，翻轉後顯示拼音
        return (
          <div className="text-center">
            <div className="flashcard-tibetan text-slate-800 mb-6">
              {card.tibetan}
            </div>
            {isFlipped ? (
              <div className="space-y-2 mb-4">
                <div className="text-2xl text-emerald-600 font-medium">
                  {card.roman}
                </div>
                {card.khamPronunciation && (
                  <div className="text-lg text-indigo-600 font-medium">
                    康巴音: {card.khamPronunciation}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-lg text-slate-500 mb-4">
                請回憶這個字母的發音
              </div>
            )}
            {isFlipped && onAnswer && (
              <div className="flex justify-center space-x-4 mt-6">
                <button
                  onClick={() => onAnswer(false)}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                >
                  不記得
                </button>
                <button
                  onClick={() => onAnswer(true)}
                  className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-200 transition-colors"
                >
                  記得
                </button>
              </div>
            )}
          </div>
        )

      case 'practice':
        // 練習模式：顯示詞彙，翻轉後顯示發音指導
        return (
          <div className="text-center">
            <div className="flashcard-tibetan text-slate-800 mb-6">
              {card.tibetan}
            </div>
            {isFlipped ? (
              <div>
                <div className="space-y-2 mb-4">
                  <div className="text-2xl text-emerald-600 font-medium">
                    {card.roman}
                  </div>
                  {card.khamPronunciation && (
                    <div className="text-lg text-indigo-600 font-medium">
                      康巴音: {card.khamPronunciation}
                    </div>
                  )}
                </div>
                <div className="text-sm text-slate-600 mb-4">
                  請嘗試發音，然後點擊播放按鈕聽正確發音
                </div>
                {card.audioUrl && (
                  <button
                    onClick={handlePlayAudio}
                    className={cn(
                      "p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white",
                      "hover:from-indigo-600 hover:to-purple-700 transition-all duration-300",
                      "transform hover:scale-110 shadow-lg hover:shadow-xl",
                      isPlaying && "animate-pulse"
                    )}
                    disabled={isPlaying}
                  >
                    {isPlaying ? (
                      <Volume2 className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>
                )}
              </div>
            ) : (
              <div className="text-lg text-slate-500 mb-4">
                請嘗試讀出這個詞彙
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className={cn(
      "relative w-full max-w-md mx-auto aspect-[4/3] cursor-pointer group",
      className
    )}>
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700 transform-style-preserve-3d",
          isFlipped && "rotate-y-180"
        )}
        onClick={handleFlip}
      >
        {/* 正面 */}
        <div className={cn(
          "absolute inset-0 backface-hidden",
          "bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl",
          "flex flex-col items-center justify-center p-8",
          "hover:shadow-3xl transition-all duration-300 group-hover:scale-[1.02]",
          "bg-gradient-to-br from-white/90 to-blue-50/50"
        )}>
          {renderCardContent()}
          
          {/* 學習模式：拼音顯示切換按鈕 */}
          {mode === 'learning' && (
            <button
              onClick={handleTogglePinyin}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              title={showPinyin ? "隱藏拼音" : "顯示拼音"}
            >
              {showPinyin ? (
                <EyeOff className="w-4 h-4 text-slate-600" />
              ) : (
                <Eye className="w-4 h-4 text-slate-600" />
              )}
            </button>
          )}

          {/* 音頻播放按鈕（學習模式） */}
          {mode === 'learning' && card.audioUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePlayAudio()
              }}
              className={cn(
                "absolute bottom-4 right-4 p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white",
                "hover:from-indigo-600 hover:to-purple-700 transition-all duration-300",
                "transform hover:scale-110 shadow-lg hover:shadow-xl",
                isPlaying && "animate-pulse"
              )}
              disabled={isPlaying}
            >
              {isPlaying ? (
                <Volume2 className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>
          )}

          {/* 翻轉提示 */}
          {(mode === 'recall' || mode === 'practice') && !isFlipped && (
            <div className="absolute bottom-4 left-4 text-sm text-slate-500 flex items-center">
              <RotateCcw className="w-4 h-4 mr-2" />
              點擊查看答案
            </div>
          )}
        </div>

        {/* 背面（背誦和練習模式） */}
        {(mode === 'recall' || mode === 'practice') && (
          <div className={cn(
            "absolute inset-0 backface-hidden",
            "bg-gradient-to-br from-emerald-500/90 to-teal-600/90 border border-white/20 rounded-2xl shadow-2xl",
            "flex flex-col items-center justify-center p-8",
            "transform rotate-y-180"
          )}>
            {renderCardContent()}
          </div>
        )}
      </div>
    </div>
  )
}
