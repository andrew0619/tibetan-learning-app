import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 數據庫類型定義
export interface Flashcard {
  id: number
  tibetan: string
  pinyin: string
  chinese: string | null
  english: string | null
  audio_url: string | null
  category: 'alphabet' | 'combination' | 'vocabulary'
  difficulty: number
  created_at: string
}

export interface UserProgress {
  id: number
  user_id: string
  flashcard_id: number
  level: number
  next_review: string
  review_count: number
  correct_count: number
  incorrect_count: number
  last_reviewed: string | null
  created_at: string
  updated_at: string
}

export interface StudySession {
  id: number
  user_id: string
  session_date: string
  cards_studied: number
  cards_correct: number
  cards_incorrect: number
  study_time_minutes: number
  created_at: string
}
