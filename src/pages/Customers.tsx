import { Search, Filter, UserPlus, ArrowRight } from 'lucide-react'
import { customers, franchises } from '../data/mockData'
import ChartPlaceholder from '../components/ChartPlaceholder'
import type { LoyaltyTier } from '../types'

interface TierConfig { color: string; dot: string }

const tierConfig: Record<LoyaltyTier, TierConfig> = {
  Pearl:   { color: 'text-sky-300    bg-sky-300/10',    dot: 'bg-sky-300'    },
  Gold:    { color: 'text-boba-gold  bg-boba-gold/10',  dot: 'bg-boba-gold'  },
  Regular: { color: 'text-boba-muted bg-boba-elevated', dot: 'bg-boba-muted' },
}

const franchiseMap: Record<number, string> = Object.fromEntries(
  franchises.map(f => [f.id, f.name])
)

const avatarGradients = [
  'from-boba-gold to-boba-amber',
  'from-sky-400 to-blue-500',
  'from-boba-teal to-emerald-500',
  'from-purple-400 to-violet-500',
  'from-rose-400 to-pink-500',
  'from-amber-400 to-orange-500',
  'from-lime-400 to-green-500',
  'from-cyan-400 to-teal-500',
  'from-indigo-400 to-purple-500',
  'from-fuchsia-400 to-pink-500',
]

function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2)
}

export default function Customers() {
  return (
    <div className="space-y-6">

      {/* ── Analytics placeholders ────────────────────────── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fade-up opacity-0-init"
        style={{ animationFillMode: 'forwards' }}
      >
        <ChartPlaceholder title="New Customers Over Time"    subtitle="Sign-up trend — last 90 days"   type="line" height="h-52" />
        <ChartPlaceholder title="Loyalty Tier Distribution"  subtitle="Regular · Gold · Pearl"          type="pie"  height="h-52" />
        <ChartPlaceholder title="Customer Lifetime Value"    subtitle="Avg. spend by cohort"            type="bar"  height="h-52" />
      </div>

      {/* ── Table ─────────────────────────────────────────── */}
      <div className="animate-fade-up opacity-0-init" style={{ animationDelay: '120ms', animationFillMode: 'forwards' }}>
        <div className="bg-boba-surface rounded-2xl border border-boba-border overflow-hidden">

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 py-4 border-b border-boba-border">
            <h3 className="font-heading font-semibold text-boba-cream text-sm">All Members</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-boba-border bg-boba-elevated text-xs font-mono text-boba-muted">
                <Search size={12} strokeWidth={2} />
                <span>Search customers…</span>
              </div>
              <button className="btn-ghost text-xs gap-1.5"><Filter size={12} /> Filter</button>
              <button className="btn-primary"><UserPlus size={13} /> Add Member</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-boba-border/60">
                  {['Customer', 'Tier', 'Franchise', 'Total Orders', 'Total Spent', 'Joined', ''].map((col, i) => (
                    <th key={i} className="text-left px-6 py-3 section-label">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, i) => {
                  const tier      = tierConfig[customer.loyalty_tier]
                  const gradient  = avatarGradients[i % avatarGradients.length]
                  const franchise = franchiseMap[customer.franchise_id] ?? '—'

                  return (
                    <tr key={customer.id} className="table-row group">
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}>
                            <span className="text-white font-heading font-bold text-[10px]">{getInitials(customer.name)}</span>
                          </div>
                          <div>
                            <p className="text-boba-cream text-xs font-medium">{customer.name}</p>
                            <p className="text-boba-muted text-[10px] font-mono">{customer.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3.5">
                        <span className={`badge ${tier.color}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${tier.dot} opacity-70`} />
                          {customer.loyalty_tier}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-boba-muted text-xs">{franchise}</td>
                      <td className="px-6 py-3.5 font-mono text-boba-cream text-xs">{customer.total_orders}</td>
                      <td className="px-6 py-3.5 font-mono font-medium text-boba-cream text-xs">${customer.total_spent.toFixed(2)}</td>
                      <td className="px-6 py-3.5 font-mono text-boba-subtle text-xs">
                        {new Date(customer.joined_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-3.5">
                        <ArrowRight size={12} className="text-boba-subtle opacity-0 group-hover:opacity-100 transition-opacity" />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-3 border-t border-boba-border flex items-center justify-between">
            <span className="text-boba-subtle text-xs font-mono">Showing {customers.length} of 3,241 members</span>
            <button className="text-boba-gold text-xs font-mono hover:text-boba-cream transition-colors">Load more →</button>
          </div>
        </div>
      </div>

      {/* ── Retention placeholder ─────────────────────────── */}
      <div className="animate-fade-up opacity-0-init" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
        <ChartPlaceholder
          title="Customer Retention & Churn"
          subtitle="Monthly cohort retention rate"
          type="trend"
          height="h-52"
        />
      </div>
    </div>
  )
}
