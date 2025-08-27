import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { User } from '@supabase/supabase-js'

export const supabase = createClientComponentClient()

// 用戶註冊
export async function signUp(email: string, password: string, displayName: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
        }
      }
    })

    if (error) throw error

    return { user: data.user, error: null }
  } catch (error) {
    console.error('註冊錯誤:', error)
    return { user: null, error: error as Error }
  }
}

// 用戶登入
export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    return { user: data.user, error: null }
  } catch (error) {
    console.error('登入錯誤:', error)
    return { user: null, error: error as Error }
  }
}

// 用戶登出
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('登出錯誤:', error)
    return { error: error as Error }
  }
}

// 獲取當前用戶
export async function getCurrentUser(): Promise<User | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch (error) {
    console.error('獲取用戶錯誤:', error)
    return null
  }
}

// Google 登入
export async function signInWithGoogle() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })

    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('Google 登入錯誤:', error)
    return { error: error as Error }
  }
}

// 重置密碼
export async function resetPassword(email: string) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`
    })

    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('重置密碼錯誤:', error)
    return { error: error as Error }
  }
}
