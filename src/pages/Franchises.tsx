import { MapPin, TrendingUp, TrendingDown, Plus, ExternalLink } from 'lucide-react'
import { franchises } from '../data/mockData'
import ChartPlaceholder  from '../components/ChartPlaceholder'
import type { FranchiseStatus } from '../types'

interface StatusConfig { label: string; color: string }

const statusConfig: Record<FranchiseStatus, StatusConfig> = {
  active:   { label: 'Active',   color: 'text-boba-teal bg-boba-teal/10' },
  pending:  { label: 'Pending',  color: 'text-boba-gold bg-boba-gold/10' },
  inactive: { label: 'Inactive', color: 'text-boba-rose bg-boba-rose/10' },
}

const franchiseChanges: Record<number, number> = {
  1: 8.1, 2: -1.2, 3: 3.8, 4: 12.4, 5: 6.3, 6: 21.0,
}

export default function Franchises() {
  return (
    <div className="space-y-6">

      {/* ── Analytics placeholders ────────────────────────── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fade-up opacity-0-init"
        style={{ animationFillMode: 'forwards' }}
      >
        <div className="lg:col-span-2">
          <ChartPlaceholder title="Revenue by Franchise" subtitle="Monthly comparison across all locations" type="bar" height="h-64" />
        </div>
        <ChartPlaceholder title="Location Map" subtitle="Geographic distribution" type="map" height="h-64" />
      </div>

      {/* ── Cards ─────────────────────────────────────────── */}
      <div className="animate-fade-up opacity-0-init" style={{ animationDelay: '120ms', animationFillMode: 'forwards' }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-semibold text-boba-cream text-sm">All Locations</h3>
          <button className="btn-primary"><Plus size={13} /> Add Location</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {franchises.map(franchise => {
            const change = franchiseChanges[franchise.id] ?? 0
            const isUp   = change >= 0
            const cfg    = statusConfig[franchise.status]

            return (
              <div key={franchise.id}
                className="bg-boba-surface rounded-2xl border border-boba-border p-5 hover:border-boba-subtle transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-boba-elevated border border-boba-border flex items-center justify-center">
                    <MapPin size={16} className="text-boba-gold" strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`badge ${cfg.color}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                      {cfg.label}
                    </span>
                    <ExternalLink size={12} className="text-boba-subtle opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <h4 className="font-heading font-semibold text-boba-cream text-sm mb-0.5">{franchise.name}</h4>
                <p className="text-boba-muted text-xs font-mono">{franchise.city}, {franchise.state}</p>

                <div className="mt-4 pt-4 border-t border-boba-border flex items-end justify-between">
                  <div>
                    <p className="section-label mb-1">Monthly Revenue</p>
                    <p className="font-display text-2xl font-bold text-boba-cream">
                      ${(franchise.monthly_revenue / 1000).toFixed(1)}k
                    </p>
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-mono font-medium px-2 py-1 rounded-lg ${
                    isUp ? 'text-boba-teal bg-boba-teal/10' : 'text-boba-rose bg-boba-rose/10'
                  }`}>
                    {isUp ? <TrendingUp size={11} strokeWidth={2} /> : <TrendingDown size={11} strokeWidth={2} />}
                    {isUp ? '+' : ''}{change}%
                  </div>
                </div>

                <div className="mt-3 h-1 bg-boba-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-boba-gold to-boba-amber rounded-full"
                    style={{ width: `${Math.min((franchise.monthly_revenue / 55000) * 100, 100)}%` }}
                  />
                </div>
                <p className="text-boba-subtle text-[10px] font-mono mt-1">
                  Opened {new Date(franchise.opened_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Growth trend placeholder ──────────────────────── */}
      <div className="animate-fade-up opacity-0-init" style={{ animationDelay: '220ms', animationFillMode: 'forwards' }}>
        <ChartPlaceholder
          title="Franchise Growth Over Time"
          subtitle="Cumulative openings and revenue trajectory"
          type="trend"
          height="h-52"
        />
      </div>
    </div>
  )
}
