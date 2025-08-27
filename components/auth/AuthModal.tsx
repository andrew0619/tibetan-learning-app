'use client'

import { useState } from 'react'
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { signIn, signUp, signInWithGoogle } from '@/lib/auth'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (mode === 'register') {
        const { user, error } = await signUp(email, password, displayName)
        if (error) throw error
        if (user) {
          onSuccess()
          onClose()
        }
      } else {
        const { user, error } = await signIn(email, password)
        if (error) throw error
        if (user) {
          onSuccess()
          onClose()
        }
      }
    } catch (err: unknown) {
      setError((err as Error).message || '操作失敗，請重試')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError('')
    
    try {
      const { error } = await signInWithGoogle()
      if (error) throw error
    } catch (err: unknown) {
      setError((err as Error).message || 'Google 登入失敗')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setDisplayName('')
    setError('')
    setShowPassword(false)
  }

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login')
    resetForm()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative">
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {/* 標題 */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              {mode === 'login' ? '歡迎回來' : '開始學習'}
            </h2>
            <p className="text-slate-600">
              {mode === 'login' ? '登入您的帳戶繼續學習' : '創建帳戶開始您的藏文學習之旅'}
            </p>
          </div>

          {/* 錯誤訊息 */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* 表單 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 顯示名稱（僅註冊時） */}
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  顯示名稱
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="輸入您的名稱"
                    required
                  />
                </div>
              </div>
            )}

            {/* 電子郵件 */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                電子郵件
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="輸入您的電子郵件"
                  required
                />
              </div>
            </div>

            {/* 密碼 */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                密碼
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="輸入您的密碼"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {mode === 'register' && (
                <p className="mt-1 text-xs text-slate-500">密碼至少需要 6 個字符</p>
              )}
            </div>

            {/* 提交按鈕 */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '處理中...' : (mode === 'login' ? '登入' : '註冊')}
            </button>
          </form>

          {/* 分隔線 */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-slate-300"></div>
            <span className="px-4 text-sm text-slate-500">或</span>
            <div className="flex-1 border-t border-slate-300"></div>
          </div>

          {/* Google 登入 */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            使用 Google 登入
          </button>

          {/* 切換模式 */}
          <div className="mt-6 text-center">
            <p className="text-slate-600">
              {mode === 'login' ? '還沒有帳戶？' : '已經有帳戶了？'}
              <button
                onClick={switchMode}
                className="ml-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
              >
                {mode === 'login' ? '立即註冊' : '立即登入'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
