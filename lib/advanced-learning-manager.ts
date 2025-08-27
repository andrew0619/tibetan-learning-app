// 高級藏文學習管理器 - 500個大手印/大圓滿修持必備詞彙
import { 
  AdvancedTibetanCard, 
  getAllAdvancedVocabulary,
  getVocabularyByTradition,
  getVocabularyByLevel,
  getVocabularyByPractice,
  advancedLearningStages,
  traditionPaths,
  AdvancedLearningStats,
  getAdvancedLearningStats,
  getCurrentStageGuidance,
  checkStagePrerequisites,
  getRecommendedPath,
  estimateCompletionTime
} from './advanced-tibetan-vocabulary'

export interface AdvancedLearningSession {
  id: string
  date: Date
  stageName: string
  cardsStudied: string[] // card IDs
  correctAnswers: number
  totalAnswers: number
  studyTimeMinutes: number
  notes?: string
}

export interface AdvancedLearningProfile {
  userId: string
  selectedPath: 'kagyu' | 'nyingma' | 'comprehensive'
  currentStage: string
  completedStages: string[]
  cardProgress: Record<string, {
    stage: 'learning' | 'recall' | 'mastered'
    lastReviewed: Date
    correctCount: number
    totalAttempts: number
    difficulty: number
    nextReview: Date
  }>
  sessions: AdvancedLearningSession[]
  preferences: {
    dailyGoal: number
    studyDaysPerWeek: number
    focusOnTradition: boolean
    includeKhamPronunciation: boolean
    preferredStudyTime: 'morning' | 'afternoon' | 'evening'
  }
  achievements: string[]
  createdAt: Date
  updatedAt: Date
}

export class AdvancedLearningManager {
  private profile: AdvancedLearningProfile

  constructor(profile: AdvancedLearningProfile) {
    this.profile = profile
  }

  // 獲取當前學習統計
  getCurrentStats(): AdvancedLearningStats {
    const allCards = getAllAdvancedVocabulary()
    const cardProgress = this.profile.cardProgress

    const masteredCards = Object.values(cardProgress).filter(p => p.stage === 'mastered').length
    const learningCards = Object.values(cardProgress).filter(p => p.stage === 'learning').length
    const recallCards = Object.values(cardProgress).filter(p => p.stage === 'recall').length

    const totalAttempts = Object.values(cardProgress).reduce((sum, p) => sum + p.totalAttempts, 0)
    const totalCorrect = Object.values(cardProgress).reduce((sum, p) => sum + p.correctCount, 0)
    const averageAccuracy = totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0

    const studyStreak = this.calculateStudyStreak()
    const totalStudyTime = this.profile.sessions.reduce((sum, s) => sum + s.studyTimeMinutes, 0)

    return {
      totalVocabulary: allCards.length,
      completedStages: this.profile.completedStages,
      currentStage: this.profile.currentStage,
      masteredCards,
      learningCards,
      recallCards,
      averageAccuracy,
      studyStreak,
      totalStudyTime,
      estimatedCompletion: this.calculateEstimatedCompletion()
    }
  }

  // 獲取今日學習卡片
  getTodaysCards(): AdvancedTibetanCard[] {
    const currentStageCards = this.getCurrentStageCards()
    const reviewCards = this.getCardsForReview()
    const newCards = this.getNewCardsToLearn()

    // 優先複習，然後新學習
    return [...reviewCards, ...newCards].slice(0, this.profile.preferences.dailyGoal)
  }

  // 獲取當前階段的卡片
  getCurrentStageCards(): AdvancedTibetanCard[] {
    const stage = advancedLearningStages[this.profile.currentStage as keyof typeof advancedLearningStages]
    if (!stage) return []

    let cards = stage.cards

    // 根據選擇的路徑過濾卡片
    if (this.profile.preferences.focusOnTradition) {
      const path = getRecommendedPath(this.profile.selectedPath)
      if (path.specialFocus !== 'common') {
        cards = cards.filter(card => 
          card.practice === path.specialFocus || 
          card.tradition === this.profile.selectedPath ||
          card.tradition === 'common'
        )
      }
    }

    return cards
  }

  // 獲取需要複習的卡片
  getCardsForReview(): AdvancedTibetanCard[] {
    const now = new Date()
    const allCards = getAllAdvancedVocabulary()
    
    return allCards.filter(card => {
      const progress = this.profile.cardProgress[card.id]
      if (!progress) return false
      
      return progress.nextReview <= now && progress.stage !== 'mastered'
    }).sort((a, b) => {
      const progressA = this.profile.cardProgress[a.id]
      const progressB = this.profile.cardProgress[b.id]
      return progressA.nextReview.getTime() - progressB.nextReview.getTime()
    })
  }

  // 獲取新的學習卡片
  getNewCardsToLearn(): AdvancedTibetanCard[] {
    const currentStageCards = this.getCurrentStageCards()
    const newCardsNeeded = Math.max(0, this.profile.preferences.dailyGoal - this.getCardsForReview().length)
    
    return currentStageCards
      .filter(card => !this.profile.cardProgress[card.id])
      .slice(0, newCardsNeeded)
  }

  // 記錄學習結果
  recordStudyResult(cardId: string, correct: boolean, studyTimeSeconds: number): void {
    const card = getAllAdvancedVocabulary().find(c => c.id === cardId)
    if (!card) return

    let progress = this.profile.cardProgress[cardId]
    if (!progress) {
      progress = {
        stage: 'learning',
        lastReviewed: new Date(),
        correctCount: 0,
        totalAttempts: 0,
        difficulty: card.difficulty,
        nextReview: new Date()
      }
      this.profile.cardProgress[cardId] = progress
    }

    progress.totalAttempts++
    if (correct) {
      progress.correctCount++
    }
    progress.lastReviewed = new Date()

    // 更新學習階段
    this.updateCardStage(cardId, correct)

    // 計算下次複習時間
    this.scheduleNextReview(cardId)

    this.profile.updatedAt = new Date()
  }

  // 更新卡片學習階段
  private updateCardStage(cardId: string, correct: boolean): void {
    const progress = this.profile.cardProgress[cardId]
    if (!progress) return

    const accuracy = progress.correctCount / progress.totalAttempts

    switch (progress.stage) {
      case 'learning':
        if (accuracy >= 0.8 && progress.totalAttempts >= 3) {
          progress.stage = 'recall'
        }
        break
      case 'recall':
        if (accuracy >= 0.9 && progress.totalAttempts >= 6) {
          progress.stage = 'mastered'
        } else if (accuracy < 0.6) {
          progress.stage = 'learning'
        }
        break
      case 'mastered':
        if (accuracy < 0.8) {
          progress.stage = 'recall'
        }
        break
    }
  }

  // 安排下次複習時間（間隔重複算法）
  private scheduleNextReview(cardId: string): void {
    const progress = this.profile.cardProgress[cardId]
    if (!progress) return

    const now = new Date()
    let intervalDays = 1

    switch (progress.stage) {
      case 'learning':
        intervalDays = 1
        break
      case 'recall':
        const accuracy = progress.correctCount / progress.totalAttempts
        intervalDays = Math.min(7, Math.max(2, Math.floor(accuracy * 7)))
        break
      case 'mastered':
        intervalDays = 30
        break
    }

    progress.nextReview = new Date(now.getTime() + intervalDays * 24 * 60 * 60 * 1000)
  }

  // 檢查是否可以進入下一階段
  canAdvanceToNextStage(): boolean {
    const currentStage = advancedLearningStages[this.profile.currentStage as keyof typeof advancedLearningStages]
    if (!currentStage) return false

    const stageCards = this.getCurrentStageCards()
    const masteredCount = stageCards.filter(card => {
      const progress = this.profile.cardProgress[card.id]
      return progress && progress.stage === 'mastered'
    }).length

    return masteredCount >= Math.floor(currentStage.target * 0.8) // 80% 掌握即可進階
  }

  // 進入下一階段
  advanceToNextStage(): boolean {
    if (!this.canAdvanceToNextStage()) return false

    const stages = Object.keys(advancedLearningStages)
    const currentIndex = stages.indexOf(this.profile.currentStage)
    
    if (currentIndex === -1 || currentIndex === stages.length - 1) return false

    const nextStage = stages[currentIndex + 1]
    
    // 檢查前置條件
    if (!checkStagePrerequisites(nextStage, this.profile.completedStages)) return false

    this.profile.completedStages.push(this.profile.currentStage)
    this.profile.currentStage = nextStage
    this.profile.updatedAt = new Date()

    // 添加成就
    this.addAchievement(`completed_${this.profile.currentStage}`)

    return true
  }

  // 獲取學習建議
  getStudyGuidance(): string {
    return getCurrentStageGuidance(this.profile.currentStage)
  }

  // 獲取進度百分比
  getOverallProgress(): number {
    const allCards = getAllAdvancedVocabulary()
    const masteredCount = Object.values(this.profile.cardProgress)
      .filter(p => p.stage === 'mastered').length
    
    return allCards.length > 0 ? (masteredCount / allCards.length) * 100 : 0
  }

  // 計算學習連續天數
  private calculateStudyStreak(): number {
    const sessions = this.profile.sessions.sort((a, b) => b.date.getTime() - a.date.getTime())
    if (sessions.length === 0) return 0

    let streak = 0
    let currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0)

    for (const session of sessions) {
      const sessionDate = new Date(session.date)
      sessionDate.setHours(0, 0, 0, 0)

      const daysDiff = Math.floor((currentDate.getTime() - sessionDate.getTime()) / (24 * 60 * 60 * 1000))

      if (daysDiff === streak) {
        streak++
        currentDate = sessionDate
      } else if (daysDiff === streak + 1) {
        streak++
        currentDate = sessionDate
      } else {
        break
      }
    }

    return streak
  }

  // 計算預估完成時間
  private calculateEstimatedCompletion(): Date | null {
    const estimation = estimateCompletionTime(
      this.profile.currentStage,
      this.profile.preferences.dailyGoal,
      this.profile.preferences.studyDaysPerWeek
    )

    if (estimation.days === 0) return null

    const now = new Date()
    return new Date(now.getTime() + estimation.days * 24 * 60 * 60 * 1000)
  }

  // 添加成就
  private addAchievement(achievement: string): void {
    if (!this.profile.achievements.includes(achievement)) {
      this.profile.achievements.push(achievement)
    }
  }

  // 開始學習會話
  startStudySession(stageName: string): string {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    const session: AdvancedLearningSession = {
      id: sessionId,
      date: new Date(),
      stageName,
      cardsStudied: [],
      correctAnswers: 0,
      totalAnswers: 0,
      studyTimeMinutes: 0,
      notes: ''
    }

    this.profile.sessions.push(session)
    return sessionId
  }

  // 結束學習會話
  endStudySession(sessionId: string, studyTimeMinutes: number, notes?: string): void {
    const session = this.profile.sessions.find(s => s.id === sessionId)
    if (session) {
      session.studyTimeMinutes = studyTimeMinutes
      if (notes) session.notes = notes
      this.profile.updatedAt = new Date()
    }
  }

  // 獲取學習路徑信息
  getPathInfo(): typeof traditionPaths.kagyu {
    return getRecommendedPath(this.profile.selectedPath)
  }

  // 獲取傳承特定的詞彙
  getTraditionVocabulary(): AdvancedTibetanCard[] {
    return getVocabularyByTradition(this.profile.selectedPath)
  }

  // 獲取修持法門特定的詞彙
  getPracticeVocabulary(): AdvancedTibetanCard[] {
    const path = this.getPathInfo()
    return getVocabularyByPractice(path.specialFocus)
  }

  // 導出學習數據
  exportLearningData(): string {
    return JSON.stringify({
      profile: this.profile,
      stats: this.getCurrentStats(),
      exportDate: new Date()
    }, null, 2)
  }

  // 導入學習數據
  static importLearningData(jsonData: string): AdvancedLearningManager {
    const data = JSON.parse(jsonData)
    return new AdvancedLearningManager(data.profile)
  }
}

// 創建默認學習檔案
export function createDefaultAdvancedProfile(
  userId: string, 
  selectedPath: 'kagyu' | 'nyingma' | 'comprehensive'
): AdvancedLearningProfile {
  return {
    userId,
    selectedPath,
    currentStage: 'foundation',
    completedStages: [],
    cardProgress: {},
    sessions: [],
    preferences: {
      dailyGoal: selectedPath === 'comprehensive' ? 5 : 4,
      studyDaysPerWeek: 6,
      focusOnTradition: selectedPath !== 'comprehensive',
      includeKhamPronunciation: true,
      preferredStudyTime: 'morning'
    },
    achievements: [],
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

// 學習成就定義
export const achievements = {
  // 階段完成成就
  completed_foundation: {
    name: '基礎圓滿',
    description: '完成基礎概念學習，掌握50個核心佛學詞彙',
    icon: '🏛️'
  },
  completed_preliminary: {
    name: '前行成就',
    description: '完成前行修持學習，掌握100個前行詞彙',
    icon: '🙏'
  },
  completed_view: {
    name: '見地通達',
    description: '完成見地修持學習，掌握100個高深見地詞彙',
    icon: '👁️'
  },
  completed_advanced: {
    name: '高級修持',
    description: '完成高級修持學習，掌握50個最高修持詞彙',
    icon: '⚡'
  },
  completed_ritual: {
    name: '儀軌精通',
    description: '完成儀軌修持學習，掌握100個實用儀軌詞彙',
    icon: '🔥'
  },

  // 特殊成就
  mahamudra_master: {
    name: '大手印行者',
    description: '精通大手印相關詞彙，完成噶舉派修持路徑',
    icon: '🤲'
  },
  dzogchen_master: {
    name: '大圓滿行者',
    description: '精通大圓滿相關詞彙，完成寧瑪派修持路徑',
    icon: '🌈'
  },
  comprehensive_master: {
    name: '圓滿行者',
    description: '完成所有500個詞彙的學習，成為真正的藏傳佛教行者',
    icon: '🏆'
  },

  // 學習成就
  study_streak_7: {
    name: '精進七日',
    description: '連續學習7天',
    icon: '🔥'
  },
  study_streak_30: {
    name: '精進月圓',
    description: '連續學習30天',
    icon: '🌕'
  },
  study_streak_100: {
    name: '百日精進',
    description: '連續學習100天',
    icon: '💎'
  },

  // 準確率成就
  accuracy_90: {
    name: '智慧明燈',
    description: '整體準確率達到90%',
    icon: '💡'
  },
  accuracy_95: {
    name: '般若光明',
    description: '整體準確率達到95%',
    icon: '✨'
  }
}
