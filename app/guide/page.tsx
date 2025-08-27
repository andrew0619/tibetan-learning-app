'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Target, Users, Award, Lightbulb } from 'lucide-react'


export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* 頁面標題 */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首頁
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">藏文拼音學習指南</h1>
          <p className="text-lg text-slate-600">基於藏文拼音教材，循序漸進掌握藏文拼音</p>
        </div>

        {/* 學習目標 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold text-slate-800">學習目標</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-medium text-slate-700">🎯 基礎目標</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 掌握藏文三十字母的發音</li>
                <li>• 理解音節結構的七個部件</li>
                <li>• 學會母音記號的讀法</li>
                <li>• 掌握後音和再後音規則</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-slate-700">🚀 進階目標</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 理解前音對清濁的影響</li>
                <li>• 掌握字頭和字足的組合</li>
                <li>• 學會常用語法小詞</li>
                <li>• 能讀懂基本佛學詞彙</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 音節結構 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold text-slate-800">音節結構（七個部件）</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-slate-700 mb-3">📝 基本結構</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>字根：</span>
                  <span className="font-mono">ཀ ka</span>
                </div>
                <div className="flex justify-between">
                  <span>音符（母音記號）：</span>
                  <span className="font-mono">ི i, ུ u, ེ e, ོ o</span>
                </div>
                <div className="flex justify-between">
                  <span>後音：</span>
                  <span className="font-mono">ག g, ང ng, ད d...</span>
                </div>
                <div className="flex justify-between">
                  <span>再後音：</span>
                  <span className="font-mono">ས s</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-slate-700 mb-3">🔧 進階結構</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>前音：</span>
                  <span className="font-mono">ག g, ད d, བ b...</span>
                </div>
                <div className="flex justify-between">
                  <span>字頭：</span>
                  <span className="font-mono">ར r, ལ l, ས s</span>
                </div>
                <div className="flex justify-between">
                  <span>字足：</span>
                  <span className="font-mono">ྱ ya, ྲ ra, ླ la, ྭ wa</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 三十字母分組 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold text-slate-800">三十字母（按口腔部位分組）</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h3 className="font-medium text-slate-700">👅 舌根音</h3>
              <div className="text-sm text-slate-600 space-y-1">
                <div>ཀ ka (清音)</div>
                <div>ཁ kha (送氣音)</div>
                <div>ག ga (濁音)</div>
                <div>ང nga (鼻音)</div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-slate-700">👅 舌面音</h3>
              <div className="text-sm text-slate-600 space-y-1">
                <div>ཅ ca (清音)</div>
                <div>ཆ cha (送氣音)</div>
                <div>ཇ ja (濁音)</div>
                <div>ཉ nya (鼻音)</div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-slate-700">👅 舌尖音</h3>
              <div className="text-sm text-slate-600 space-y-1">
                <div>ཏ ta (清音)</div>
                <div>ཐ tha (送氣音)</div>
                <div>ད da (濁音)</div>
                <div>ན na (鼻音)</div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-slate-700">👄 雙唇音</h3>
              <div className="text-sm text-slate-600 space-y-1">
                <div>པ pa (清音)</div>
                <div>ཕ pha (送氣音)</div>
                <div>བ ba (濁音)</div>
                <div>མ ma (鼻音)</div>
              </div>
            </div>
          </div>
        </div>

        {/* 重要規則 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center mb-4">
            <Lightbulb className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold text-slate-800">重要讀音規則</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="p-3 bg-amber-50 rounded-lg">
                <h4 className="font-medium text-amber-800 mb-1">末音節བ讀wa</h4>
                <p className="text-sm text-amber-700">例如：ཆོས་བཅུ་བ → chö chu wa</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-1">鼻音作清</h4>
                <p className="text-sm text-blue-700">遇字頭r-/l-/s-時，nga/nya/na/ma多作清音</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800 mb-1">前音影響清濁</h4>
                <p className="text-sm text-green-700">前音g/d/b/m/&apos;會影響字根的清濁發音</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-1">連讀規則</h4>
                <p className="text-sm text-purple-700">遇&apos;i/&apos;e/&apos;o連寫時，與前一音節連成一音節</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-800 mb-1">藏文特色</h4>
                <p className="text-sm text-red-700">實際口語與正寫有差異，需注意聲調變化</p>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg">
                <h4 className="font-medium text-indigo-800 mb-1">字足ya讀法</h4>
                <p className="text-sm text-indigo-700">པྱ讀ca，ཕྱ讀cha，བྱ讀ja，མྱ讀nya</p>
              </div>
            </div>
          </div>
        </div>

        {/* 學習建議 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold text-slate-800">學習建議</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-medium text-slate-700">📚 學習順序</h3>
              <ol className="text-sm text-slate-600 space-y-2">
                <li>1. 先掌握三十字母的基本發音</li>
                <li>2. 學習母音記號的四個音符</li>
                <li>3. 練習後音和再後音組合</li>
                <li>4. 理解前音對清濁的影響</li>
                <li>5. 掌握字頭和字足的組合</li>
                <li>6. 學習語法小詞和佛學詞彙</li>
              </ol>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-slate-700">💡 學習技巧</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• 多聽多讀，培養語感</li>
                <li>• 注意清濁音的區別</li>
                <li>• 練習音節的組合變化</li>
                <li>• 結合佛學詞彙實際應用</li>
                <li>• 定期複習，鞏固記憶</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 開始學習按鈕 */}
        <div className="text-center">
          <Link 
            href="/learn" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            開始學習藏文拼音
          </Link>
        </div>
      </div>
    </div>
  )
}
