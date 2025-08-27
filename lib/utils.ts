import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function calculateStreak(lastStudyDate: string | null): number {
  if (!lastStudyDate) return 0
  
  const today = new Date()
  const lastStudy = new Date(lastStudyDate)
  const diffTime = Math.abs(today.getTime() - lastStudy.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  return diffDays === 1 ? 1 : 0 // 簡化版本，實際應該從數據庫計算
}

export function getDailyGoalProgress(
  cardsStudied: number,
  dailyGoal: number
): { percentage: number; remaining: number } {
  const percentage = Math.min((cardsStudied / dailyGoal) * 100, 100)
  const remaining = Math.max(dailyGoal - cardsStudied, 0)
  
  return { percentage, remaining }
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
