import type { LucideIcon } from 'lucide-react'
import Skeleton from './Skeleton'

interface StatCardProps {
  label:  string
  icon?:  LucideIcon
  delay?: number
}

export default function StatCard({ label, icon: Icon, delay = 0 }: StatCardProps) {
  const animDelay = `${delay}ms`

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
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-6 w-14" />
      </div>

      <p className="text-boba-subtle text-xs font-mono mt-2">vs. last month</p>
    </div>
  )
}
