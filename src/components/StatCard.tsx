import { TrendingUp, TrendingDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface StatCardProps {
  label:   string
  value:   number
  change:  number
  prefix?: string
  suffix?: string
  icon?:   LucideIcon
  delay?:  number
}

export default function StatCard({
  label,
  value,
  change,
  prefix = '',
  suffix = '',
  icon: Icon,
  delay  = 0,
}: StatCardProps) {
  const isPositive = change >= 0
  const animDelay  = `${delay}ms`

  return (
    <div
      className="stat-card animate-fade-up opacity-0-init"
      style={{ animationDelay: animDelay, animationFillMode: 'forwards' }}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="section-label">{label}</span>
        {Icon && (
          <div className="w-8 h-8 rounded-xl bg-boba-elevated border border-boba-border flex items-center justify-center">
            <Icon size={14} className="text-boba-gold" strokeWidth={1.5} />
          </div>
        )}
      </div>

      <div className="flex items-end justify-between">
        <span className="font-display text-3xl font-bold text-boba-cream leading-none tracking-tight">
          {prefix}
          {value >= 1000 ? value.toLocaleString() : value}
          {suffix}
        </span>

        <div className={`flex items-center gap-1 text-xs font-mono font-medium px-2 py-1 rounded-lg ${
          isPositive
            ? 'text-boba-teal bg-boba-teal/10'
            : 'text-boba-rose bg-boba-rose/10'
        }`}>
          {isPositive
            ? <TrendingUp   size={11} strokeWidth={2} />
            : <TrendingDown size={11} strokeWidth={2} />
          }
          {isPositive ? '+' : ''}{change}%
        </div>
      </div>

      <p className="text-boba-subtle text-xs font-mono mt-2">vs. last month</p>
    </div>
  )
}
