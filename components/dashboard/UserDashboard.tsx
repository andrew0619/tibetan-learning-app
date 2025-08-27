'use client'

import { useState, useEffect } from 'react'
import type { User } from '@supabase/supabase-js'
import { 
  Trophy, 
  Calendar, 
  Clock, 
  Target, 
  TrendingUp, 
  BookOpen,
  Flame,
  Award,
  LogOut
} from 'lucide-react'
import { getUserStats, getTodayProgress, type UserStats } from '@/lib/user-progress'
import { signOut } from '@/lib/auth'

interface UserDashboardProps {
  user: User
  onSignOut: () => void
}

export function UserDashboard({ user, onSignOut }: UserDashboardProps) {
  const [stats, setStats] = useState<UserStats | null>(null)
  const [todayProgress, setTodayProgress] = useState({ studied: 0, target: 20, streak: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadUserData()
  }, [user.id])

  const loadUserData = async () => {
    try {
      const [userStats, progress] = await Promise.all([
        getUserStats(user.id),
        getTodayProgress(user.id)
      ])
      
      setStats(userStats)
      setTodayProgress(progress)
    } catch (error) {
      console.error('載入用戶數據錯誤:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      onSignOut()
    } catch (error) {
      console.error('登出錯誤:', error)
    }
  }

  const progressPercentage = Math.min((todayProgress.studied / todayProgress.target) * 100, 100)

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-slate-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-3 bg-slate-200 rounded"></div>
            <div className="h-3 bg-slate-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* 用戶信息頭部 */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                {user.user_metadata?.display_name || user.email?.split('@')[0] || '學習者'}
              </h3>
              <p className="text-indigo-100 text-sm">{user.email}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            title="登出"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* 今日進度 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              今日學習目標
            </h4>
            <span className="text-sm text-slate-600">
              {todayProgress.studied} / {todayProgress.target}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-600 mt-2">
            {progressPercentage >= 100 ? '🎉 今日目標已完成！' : `還需學習 ${todayProgress.target - todayProgress.studied} 個字卡`}
          </p>
        </div>

        {/* 統計卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">{todayProgress.streak}</p>
                <p className="text-sm text-orange-700">連續天數</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">{stats?.mastered_cards || 0}</p>
                <p className="text-sm text-green-700">已掌握</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{stats?.learning_cards || 0}</p>
                <p className="text-sm text-blue-700">學習中</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">
                  {Math.floor((stats?.total_study_time || 0) / 60)}
                </p>
                <p className="text-sm text-purple-700">學習分鐘</p>
              </div>
            </div>
          </div>
        </div>

        {/* 學習階段進度 */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            學習進度
          </h4>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">學習中</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-slate-200 rounded-full h-2">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ 
                      width: `${stats?.total_cards ? (stats.learning_cards / stats.total_cards) * 100 : 0}%` 
                    }}
                  ></div>
                </div>
                <span className="text-sm text-slate-600">{stats?.learning_cards || 0}</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">複習中</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-slate-200 rounded-full h-2">
                  <div 
                    className="h-full bg-yellow-500 rounded-full"
                    style={{ 
                      width: `${stats?.total_cards ? (stats.recall_cards / stats.total_cards) * 100 : 0}%` 
                    }}
                  ></div>
                </div>
                <span className="text-sm text-slate-600">{stats?.recall_cards || 0}</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">已掌握</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-slate-200 rounded-full h-2">
                  <div 
                    className="h-full bg-green-500 rounded-full"
                    style={{ 
                      width: `${stats?.total_cards ? (stats.mastered_cards / stats.total_cards) * 100 : 0}%` 
                    }}
                  ></div>
                </div>
                <span className="text-sm text-slate-600">{stats?.mastered_cards || 0}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 成就徽章 */}
        {(todayProgress.streak >= 7 || (stats?.mastered_cards || 0) >= 10) && (
          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
            <h4 className="text-lg font-semibold text-yellow-800 flex items-center gap-2 mb-2">
              <Award className="w-5 h-5" />
              獲得成就
            </h4>
            <div className="flex flex-wrap gap-2">
              {todayProgress.streak >= 7 && (
                <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                  🔥 連續學習 7 天
                </span>
              )}
              {(stats?.mastered_cards || 0) >= 10 && (
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                  🏆 掌握 10 個字卡
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
