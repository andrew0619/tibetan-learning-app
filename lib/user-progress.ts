import { supabase } from './auth'
import { User } from '@supabase/supabase-js'

export interface UserProgress {
  id?: string
  user_id: string
  card_id: string
  stage: 'learning' | 'recall' | 'mastered'
  difficulty: number
  last_reviewed: string
  next_review: string
  review_count: number
  correct_count: number
  created_at?: string
  updated_at?: string
}

export interface UserStats {
  total_cards: number
  learning_cards: number
  recall_cards: number
  mastered_cards: number
  daily_streak: number
  total_study_time: number
  last_study_date: string
}

// 獲取用戶學習進度
export async function getUserProgress(userId: string): Promise<UserProgress[]> {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('獲取用戶進度錯誤:', error)
    return []
  }
}

// 更新用戶學習進度
export async function updateUserProgress(progress: Partial<UserProgress>): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('user_progress')
      .upsert({
        ...progress,
        updated_at: new Date().toISOString()
      })

    if (error) throw error
    return true
  } catch (error) {
    console.error('更新用戶進度錯誤:', error)
    return false
  }
}

// 獲取用戶統計數據
export async function getUserStats(userId: string): Promise<UserStats | null> {
  try {
    const { data, error } = await supabase
      .from('user_stats')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error && error.code !== 'PGRST116') throw error
    
    // 如果沒有統計數據，創建默認數據
    if (!data) {
      const defaultStats: UserStats = {
        total_cards: 0,
        learning_cards: 0,
        recall_cards: 0,
        mastered_cards: 0,
        daily_streak: 0,
        total_study_time: 0,
        last_study_date: new Date().toISOString()
      }
      
      await supabase
        .from('user_stats')
        .insert({ user_id: userId, ...defaultStats })
      
      return defaultStats
    }

    return data
  } catch (error) {
    console.error('獲取用戶統計錯誤:', error)
    return null
  }
}

// 更新用戶統計數據
export async function updateUserStats(userId: string, stats: Partial<UserStats>): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('user_stats')
      .upsert({
        user_id: userId,
        ...stats,
        updated_at: new Date().toISOString()
      })

    if (error) throw error
    return true
  } catch (error) {
    console.error('更新用戶統計錯誤:', error)
    return false
  }
}

// 記錄學習會話
export async function recordStudySession(userId: string, cardId: string, isCorrect: boolean, studyTime: number): Promise<boolean> {
  try {
    // 更新卡片進度
    const progress = await getUserProgress(userId)
    const cardProgress = progress.find(p => p.card_id === cardId)
    
    const now = new Date().toISOString()
    const nextReview = new Date(Date.now() + (isCorrect ? 24 * 60 * 60 * 1000 : 60 * 60 * 1000)).toISOString()
    
    const updatedProgress: Partial<UserProgress> = {
      user_id: userId,
      card_id: cardId,
      stage: cardProgress?.stage || 'learning',
      difficulty: cardProgress?.difficulty || 1,
      last_reviewed: now,
      next_review: nextReview,
      review_count: (cardProgress?.review_count || 0) + 1,
      correct_count: (cardProgress?.correct_count || 0) + (isCorrect ? 1 : 0)
    }

    // 根據正確率調整階段
    if (updatedProgress.review_count && updatedProgress.correct_count) {
      const accuracy = updatedProgress.correct_count / updatedProgress.review_count
      if (accuracy >= 0.8 && updatedProgress.review_count >= 3) {
        updatedProgress.stage = 'mastered'
      } else if (accuracy >= 0.6) {
        updatedProgress.stage = 'recall'
      }
    }

    await updateUserProgress(updatedProgress)

    // 更新統計數據
    const stats = await getUserStats(userId)
    if (stats) {
      const updatedStats: Partial<UserStats> = {
        total_study_time: stats.total_study_time + studyTime,
        last_study_date: now
      }

      // 計算連續學習天數
      const lastStudyDate = new Date(stats.last_study_date)
      const today = new Date()
      const daysDiff = Math.floor((today.getTime() - lastStudyDate.getTime()) / (1000 * 60 * 60 * 24))
      
      if (daysDiff === 1) {
        updatedStats.daily_streak = stats.daily_streak + 1
      } else if (daysDiff > 1) {
        updatedStats.daily_streak = 1
      }

      await updateUserStats(userId, updatedStats)
    }

    return true
  } catch (error) {
    console.error('記錄學習會話錯誤:', error)
    return false
  }
}

// 獲取今日學習目標進度
export async function getTodayProgress(userId: string): Promise<{
  studied: number
  target: number
  streak: number
}> {
  try {
    const today = new Date().toISOString().split('T')[0]
    
    const { data: todayProgress, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .gte('last_reviewed', `${today}T00:00:00.000Z`)
      .lt('last_reviewed', `${today}T23:59:59.999Z`)

    if (error) throw error

    const stats = await getUserStats(userId)
    
    return {
      studied: todayProgress?.length || 0,
      target: 20, // 默認每日目標
      streak: stats?.daily_streak || 0
    }
  } catch (error) {
    console.error('獲取今日進度錯誤:', error)
    return { studied: 0, target: 20, streak: 0 }
  }
}
