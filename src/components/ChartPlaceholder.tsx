import { BarChart2, LineChart, PieChart, Map, TrendingUp } from 'lucide-react'
import type { ChartType } from '../types'

interface ChartPlaceholderProps {
  title:     string
  subtitle?: string
  height?:   string
  type?:     ChartType
  className?: string
}

const icons: Record<ChartType, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  bar:   BarChart2,
  line:  LineChart,
  pie:   PieChart,
  map:   Map,
  trend: TrendingUp,
}

export default function ChartPlaceholder({
  title,
  subtitle,
  height    = 'h-64',
  type      = 'bar',
  className = '',
}: ChartPlaceholderProps) {
  const Icon = icons[type]

  return (
    <div className={`chart-placeholder ${height} ${className} flex flex-col`}>
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,148,58,0.12) 1px, transparent 1px)',
          backgroundSize:  '22px 22px',
        }}
      />
      {/* Radial fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(21,17,9,0.85) 100%)' }}
      />
      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-boba-gold/30 to-transparent animate-shimmer" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-3 p-6">
        <div className="w-14 h-14 rounded-2xl bg-boba-elevated border border-boba-border flex items-center justify-center shadow-glow-gold">
          <Icon size={22} className="text-boba-gold opacity-70" strokeWidth={1.5} />
        </div>
        <div className="text-center">
          <p className="font-heading font-semibold text-boba-cream/70 text-sm">{title}</p>
          {subtitle && (
            <p className="text-boba-muted text-xs mt-1 font-mono">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Title bar at bottom */}
      <div className="relative z-10 px-5 pb-4">
        <div className="h-px bg-boba-border/60 mb-3" />
        <div className="flex items-center justify-between">
          <span className="section-label">{title}</span>
          <span className="text-[10px] font-mono text-boba-subtle italic">Analytics coming soon</span>
        </div>
      </div>
    </div>
  )
}
