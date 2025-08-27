'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Target, Clock, Flame, BookOpen, ArrowRight, TrendingUp, Grid, Type, Layers, Heart, User, LogIn, ArrowLeft } from 'lucide-react'
import { getCurrentUser } from '@/lib/auth'
import { AuthModal } from '@/components/auth/AuthModal'
import { UserDashboard } from '@/components/dashboard/UserDashboard'
import type { User } from '@supabase/supabase-js'

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser()
      setUser(currentUser)
      if (!currentUser) {
        setShowAuthModal(true)
      }
    } catch (error) {
      console.error('檢查用戶狀態錯誤:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAuthSuccess = () => {
    checkUser()
    setShowAuthModal(false)
  }

  const handleSignOut = () => {
    setUser(null)
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-slate-600">載入中...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto p-8 max-w-4xl">
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-slate-600 hover:text-slate-800 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回主頁
            </Link>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-12 h-12 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-4">歡迎來到個人學習中心</h1>
            <p className="text-lg text-slate-600 mb-8">登入或註冊以開始追蹤您的學習進度</p>
            
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowAuthModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                <LogIn className="w-5 h-5" />
                登入
              </button>
              <button
                onClick={() => setShowAuthModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <User className="w-5 h-5" />
                註冊
              </button>
            </div>
          </div>
        </div>
        
        <AuthModal 
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onSuccess={handleAuthSuccess}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto p-8 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center text-slate-600 hover:text-slate-800 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回主頁
          </Link>
          <h1 className="text-3xl font-bold text-slate-800">個人學習中心</h1>
          <div className="w-20"></div> {/* Spacer for alignment */}
        </div>

        {/* 用戶儀表板 */}
        <div className="mb-8">
          <UserDashboard user={user} onSignOut={handleSignOut} />
        </div>

        {/* 學習功能快速入口 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/learn" className="group">
            <div className="card p-6 hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">開始學習</h3>
                    <p className="text-slate-600">字卡學習模式</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          </Link>

          <Link href="/alphabet-complete" className="group">
            <div className="card p-6 hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Grid className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">完整字母系統</h3>
                    <p className="text-slate-600">查看所有藏文字母</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
              </div>
            </div>
          </Link>

          <Link href="/advanced-vocabulary" className="group">
            <div className="card p-6 hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] bg-gradient-to-r from-amber-50 to-orange-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">佛學詞彙</h3>
                    <p className="text-slate-600">500個專業詞彙</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 transition-colors" />
              </div>
            </div>
          </Link>

          <Link href="/review" className="group">
            <div className="card p-6 hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] bg-gradient-to-r from-emerald-50 to-teal-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">複習模式</h3>
                    <p className="text-slate-600">鞏固已學內容</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </div>
            </div>
          </Link>

          <Link href="/guide" className="group">
            <div className="card p-6 hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] bg-gradient-to-r from-cyan-50 to-blue-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">學習指南</h3>
                    <p className="text-slate-600">藏文拼音教學</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 transition-colors" />
              </div>
            </div>
          </Link>

          <Link href="/font-demo" className="group">
            <div className="card p-6 hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] bg-gradient-to-r from-violet-50 to-purple-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Type className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">字體展示</h3>
                    <p className="text-slate-600">專業藏文字體</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-violet-600 transition-colors" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
