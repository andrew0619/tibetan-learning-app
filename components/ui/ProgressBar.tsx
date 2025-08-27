interface ProgressBarProps {
  progress: number
  label?: string
  className?: string
}

export function ProgressBar({ progress, label, className = '' }: ProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-700">{label}</span>
          <span className="text-sm text-slate-500">{Math.round(progress)}%</span>
        </div>
      )}
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
