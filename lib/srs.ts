// 間隔重複記憶算法 (Spaced Repetition System)

export interface SRSLevel {
  level: number
  interval: number // 天數
  description: string
}

export const SRS_LEVELS: SRSLevel[] = [
  { level: 0, interval: 0, description: '新卡片' },
  { level: 1, interval: 1, description: '1天後複習' },
  { level: 2, interval: 3, description: '3天後複習' },
  { level: 3, interval: 7, description: '1週後複習' },
  { level: 4, interval: 14, description: '2週後複習' },
  { level: 5, interval: 30, description: '1個月後複習' },
  { level: 6, interval: 90, description: '3個月後複習' },
  { level: 7, interval: 180, description: '6個月後複習' },
  { level: 8, interval: 365, description: '1年後複習' },
]

export function getNextReviewDate(currentLevel: number, isCorrect: boolean): Date {
  const today = new Date()
  
  if (!isCorrect) {
    // 答錯，回到第1級
    return new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000)
  }
  
  // 答對，升級
  const newLevel = Math.min(currentLevel + 1, SRS_LEVELS.length - 1)
  const interval = SRS_LEVELS[newLevel].interval
  
  return new Date(today.getTime() + interval * 24 * 60 * 60 * 1000)
}

export function getLevelDescription(level: number): string {
  const srsLevel = SRS_LEVELS.find(l => l.level === level)
  return srsLevel?.description || '未知級別'
}

export function calculateMastery(progress: {
  correct_count: number
  incorrect_count: number
  review_count: number
}): number {
  if (progress.review_count === 0) return 0
  
  const accuracy = progress.correct_count / progress.review_count
  const totalReviews = progress.review_count
  
  // 基於準確率和總複習次數計算掌握度
  let mastery = accuracy * 100
  
  // 獎勵持續學習
  if (totalReviews >= 10) mastery += 10
  if (totalReviews >= 20) mastery += 10
  if (totalReviews >= 50) mastery += 20
  
  return Math.min(mastery, 100)
}
