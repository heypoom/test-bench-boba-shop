import { Search, Filter, UserPlus } from 'lucide-react'
import ChartPlaceholder from '../components/ChartPlaceholder'
import Skeleton from '../components/Skeleton'

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
                {Array.from({ length: 10 }).map((_, i) => (
                  <tr key={i} className="table-row group">
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded-full shrink-0" />
                        <div className="space-y-1.5">
                          <Skeleton className="h-3 w-24" />
                          <Skeleton className="h-2.5 w-28" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3.5"><Skeleton className="h-5 w-16 rounded-full" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-20" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-8" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-14" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-16" /></td>
                    <td className="px-6 py-3.5" />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-3 border-t border-boba-border flex items-center justify-between">
            <Skeleton className="h-3 w-40" />
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
