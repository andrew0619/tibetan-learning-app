import Link from 'next/link'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Target, Clock, Flame, BookOpen, ArrowRight, TrendingUp, Grid, Type, Layers, Heart } from 'lucide-react'
import { learningProgressManager } from '@/lib/learning-progress'

export default function HomePage() {
  // 從學習進度管理器獲取實際數據
  const stats = learningProgressManager.getLearningStats()
  // const todayGoal = learningProgressManager.getTodayGoal()
  
  // 模擬連續學習天數（實際應該從數據庫獲取）
  const streakDays = 5
  
  // 計算今日完成度
  const todayProgress = Math.min(100, Math.round((stats.masteredCards / 30) * 100)) // 假設總目標是30個字母

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* 標題區域 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            藏文學習
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            循序漸進，掌握藏文拼音，開啟你的藏文學習之旅
          </p>
        </div>

        {/* 今日進度卡片 */}
        <div className="card mb-8 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 flex items-center">
              <Target className="w-6 h-6 mr-3 text-indigo-600" />
              今日進度
            </h2>
            <div className="text-sm text-slate-500">
              {new Date().toLocaleDateString('zh-TW', { 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="stat-card">
              <div className="text-3xl font-bold mb-2">{todayProgress}%</div>
              <div className="text-sm opacity-90">今日完成度</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold mb-2 flex items-center justify-center">
                <Flame className="w-6 h-6 mr-2" />
                {streakDays}
              </div>
              <div className="text-sm opacity-90">連續學習天數</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold mb-2">{stats.masteryPercentage}%</div>
              <div className="text-sm opacity-90">掌握程度</div>
            </div>
          </div>

          <ProgressBar
            progress={todayProgress}
            label="學習進度"
            className="mb-4"
          />

          <div className="flex items-center justify-between text-sm text-slate-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              目標: 30分鐘
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              目標達成中
            </div>
          </div>
        </div>

        {/* 學習選項 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link href="/learn" className="group">
            <div className="card p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">開始學習</h3>
              <p className="text-slate-600 leading-relaxed">
                學習新的藏文字母和拼音，建立堅實的基礎
              </p>
              <div className="mt-4 text-sm text-indigo-600 font-medium">
                立即開始 →
              </div>
            </div>
          </Link>

          <Link href="/guide" className="group">
            <div className="card p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">學習指南</h3>
              <p className="text-slate-600 leading-relaxed">
                藏文拼音教學法說明，掌握學習要點
              </p>
              <div className="mt-4 text-sm text-cyan-600 font-medium">
                查看指南 →
              </div>
            </div>
          </Link>

          <Link href="/alphabet" className="group">
            <div className="card p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Grid className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">字母總表</h3>
              <p className="text-slate-600 leading-relaxed">
                按圖索驥，查看所有藏文字母的學習進度
              </p>
              <div className="mt-4 text-sm text-purple-600 font-medium">
                查看總表 →
              </div>
            </div>
          </Link>

          <Link href="/review" className="group">
            <div className="card p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">複習</h3>
              <p className="text-slate-600 leading-relaxed">
                使用間隔重複算法，鞏固已學過的內容
              </p>
              <div className="mt-4 text-sm text-emerald-600 font-medium">
                開始複習 →
              </div>
            </div>
          </Link>
        </div>

        {/* 學習統計 */}
        <div className="card p-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">學習統計</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 mb-2">
                {stats.totalCards}
              </div>
              <div className="text-sm text-slate-600">總字卡數</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                {stats.masteredCards}
              </div>
              <div className="text-sm text-slate-600">已掌握</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                {stats.learningCards + stats.recallCards}
              </div>
              <div className="text-sm text-slate-600">待學習</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                {stats.overallAccuracy}%
              </div>
              <div className="text-sm text-slate-600">準確率</div>
            </div>
          </div>
        </div>

        {/* 專業功能區域 */}
        <div className="mt-8 space-y-4">
          {/* 佛學詞彙學習 */}
          <Link href="/advanced-vocabulary" className="group">
            <div className="card p-6 hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.01] bg-gradient-to-r from-amber-50 to-orange-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">佛學詞彙學習</h3>
                    <p className="text-slate-600">500個藏傳佛教修持必備詞彙，噶舉/寧瑪傳承</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-yagpo-uni text-2xl text-amber-600">བླ་མ</div>
                  <div className="font-yagpo-uni text-2xl text-orange-600">ཆོས</div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 transition-colors" />
                </div>
              </div>
            </div>
          </Link>

          {/* 完整字母系統 */}
          <Link href="/alphabet-complete" className="group">
            <div className="card p-6 hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.01] bg-gradient-to-r from-emerald-50 to-teal-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">完整藏文字母系統</h3>
                    <p className="text-slate-600">系統學習前後加字、上下加字的完整結構</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-yagpo-uni text-2xl text-emerald-600">རྒྱལ</div>
                  <div className="font-yagpo-uni text-2xl text-teal-600">སྐུ</div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </div>
              </div>
            </div>
          </Link>

          {/* 字體展示 */}
          <Link href="/font-demo" className="group">
            <div className="card p-6 hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.01] bg-gradient-to-r from-violet-50 to-purple-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Type className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">專業藏文字體</h3>
                    <p className="text-slate-600">體驗 Yagpo 專業字體，提升學習效果</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-yagpo-uni text-2xl text-purple-600">སངས་རྒྱས</div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
