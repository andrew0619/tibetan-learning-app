import { TibetanCard } from './tibetan-data'

// 學習進度記錄
export interface LearningProgress {
  cardId: string
  stage: 'learning' | 'recall' | 'mastered'
  correctCount: number
  totalAttempts: number
  lastReviewed: Date
  nextReview: Date
  masteryLevel: number // 0-5，5表示完全掌握
}

// 學習會話記錄
export interface LearningSession {
  id: string
  date: Date
  stage: string
  mode: 'learning' | 'recall' | 'practice'
  cardsStudied: number
  correctAnswers: number
  totalAttempts: number
  duration: number // 分鐘
}

// 學習進度管理器
export class LearningProgressManager {
  private progress: Map<string, LearningProgress> = new Map()
  private sessions: LearningSession[] = []

  // 初始化字卡進度
  initializeCard(cardId: string): LearningProgress {
    const progress: LearningProgress = {
      cardId,
      stage: 'learning',
      correctCount: 0,
      totalAttempts: 0,
      lastReviewed: new Date(),
      nextReview: new Date(),
      masteryLevel: 0
    }
    this.progress.set(cardId, progress)
    return progress
  }

  // 獲取字卡進度
  getCardProgress(cardId: string): LearningProgress {
    return this.progress.get(cardId) || this.initializeCard(cardId)
  }

  // 更新字卡進度
  updateCardProgress(cardId: string, isCorrect: boolean): LearningProgress {
    const progress = this.getCardProgress(cardId)
    
    progress.totalAttempts++
    if (isCorrect) {
      progress.correctCount++
    }
    
    progress.lastReviewed = new Date()
    
    // 計算掌握程度
    const accuracy = progress.correctCount / progress.totalAttempts
    if (accuracy >= 0.9 && progress.totalAttempts >= 5) {
      progress.masteryLevel = Math.min(5, progress.masteryLevel + 1)
    } else if (accuracy < 0.7) {
      progress.masteryLevel = Math.max(0, progress.masteryLevel - 1)
    }
    
    // 更新學習階段
    if (progress.masteryLevel >= 3 && progress.stage === 'learning') {
      progress.stage = 'recall'
    } else if (progress.masteryLevel >= 4 && progress.stage === 'recall') {
      progress.stage = 'mastered'
    }
    
    // 計算下次複習時間（SRS算法）
    progress.nextReview = this.calculateNextReview(progress)
    
    this.progress.set(cardId, progress)
    return progress
  }

  // SRS算法：計算下次複習時間
  private calculateNextReview(progress: LearningProgress): Date {
    const now = new Date()
    const daysSinceLastReview = (now.getTime() - progress.lastReviewed.getTime()) / (1000 * 60 * 60 * 24)
    
    let interval: number
    switch (progress.masteryLevel) {
      case 0: interval = 1; break // 1天後複習
      case 1: interval = 3; break // 3天後複習
      case 2: interval = 7; break // 1週後複習
      case 3: interval = 14; break // 2週後複習
      case 4: interval = 30; break // 1個月後複習
      case 5: interval = 90; break // 3個月後複習
      default: interval = 1; break
    }
    
    const nextReview = new Date(now)
    nextReview.setDate(nextReview.getDate() + interval)
    return nextReview
  }

  // 獲取需要複習的字卡
  getCardsForReview(): string[] {
    const now = new Date()
    const cardsForReview: string[] = []
    
    for (const [cardId, progress] of this.progress) {
      if (progress.nextReview <= now) {
        cardsForReview.push(cardId)
      }
    }
    
    return cardsForReview.sort((a, b) => {
      const progressA = this.progress.get(a)!
      const progressB = this.progress.get(b)!
      return progressA.nextReview.getTime() - progressB.nextReview.getTime()
    })
  }

  // 獲取學習模式的字卡
  getCardsForLearning(): string[] {
    const learningCards: string[] = []
    
    for (const [cardId, progress] of this.progress) {
      if (progress.stage === 'learning') {
        learningCards.push(cardId)
      }
    }
    
    return learningCards
  }

  // 獲取背誦模式的字卡
  getCardsForRecall(): string[] {
    const recallCards: string[] = []
    
    for (const [cardId, progress] of this.progress) {
      if (progress.stage === 'recall') {
        recallCards.push(cardId)
      }
    }
    
    return recallCards
  }

  // 獲取已掌握的字卡
  getMasteredCards(): string[] {
    const masteredCards: string[] = []
    
    for (const [cardId, progress] of this.progress) {
      if (progress.stage === 'mastered') {
        masteredCards.push(cardId)
      }
    }
    
    return masteredCards
  }

  // 記錄學習會話
  recordSession(session: Omit<LearningSession, 'id'>): void {
    const newSession: LearningSession = {
      ...session,
      id: Date.now().toString()
    }
    this.sessions.push(newSession)
  }

  // 獲取學習統計
  getLearningStats() {
    const totalCards = this.progress.size
    const masteredCards = this.getMasteredCards().length
    const learningCards = this.getCardsForLearning().length
    const recallCards = this.getCardsForRecall().length
    
    const totalCorrect = Array.from(this.progress.values())
      .reduce((sum, progress) => sum + progress.correctCount, 0)
    const totalAttempts = Array.from(this.progress.values())
      .reduce((sum, progress) => sum + progress.totalAttempts, 0)
    
    const overallAccuracy = totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0
    
    return {
      totalCards,
      masteredCards,
      learningCards,
      recallCards,
      overallAccuracy: Math.round(overallAccuracy),
      masteryPercentage: totalCards > 0 ? Math.round((masteredCards / totalCards) * 100) : 0
    }
  }

  // 獲取今日學習目標
  getTodayGoal(): { cardsToLearn: number; cardsToReview: number } {
    const cardsForReview = this.getCardsForReview()
    const cardsForLearning = this.getCardsForLearning()
    
    return {
      cardsToLearn: Math.min(3, cardsForLearning.length), // 每天最多學習3個新字卡
      cardsToReview: Math.min(10, cardsForReview.length) // 每天最多複習10個字卡
    }
  }

  // 重置進度（用於測試）
  resetProgress(): void {
    this.progress.clear()
    this.sessions = []
  }
}

// 全局學習進度管理器實例
export const learningProgressManager = new LearningProgressManager()
