import { Search, Filter, Download } from 'lucide-react'
import ChartPlaceholder from '../components/ChartPlaceholder'
import Skeleton from '../components/Skeleton'

export default function Orders() {
  return (
    <div className="space-y-6">

      {/* ── Analytics placeholders ────────────────────────── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fade-up opacity-0-init"
        style={{ animationFillMode: 'forwards' }}
      >
        <div className="lg:col-span-2">
          <ChartPlaceholder title="Orders Over Time"       subtitle="Volume trend — last 30 days"           type="bar" height="h-56" />
        </div>
        <ChartPlaceholder   title="Order Status Breakdown" subtitle="Completed · Cancelled · Refunded"      type="pie" height="h-56" />
      </div>

      {/* ── Table ─────────────────────────────────────────── */}
      <div className="animate-fade-up opacity-0-init" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <div className="bg-boba-surface rounded-2xl border border-boba-border overflow-hidden">

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 py-4 border-b border-boba-border">
            <h3 className="font-heading font-semibold text-boba-cream text-sm">All Orders</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-boba-border bg-boba-elevated text-xs font-mono text-boba-muted">
                <Search size={12} strokeWidth={2} />
                <span>Search orders…</span>
              </div>
              <button className="btn-ghost text-xs gap-1.5"><Filter size={12} /> Filter</button>
              <button className="btn-ghost text-xs gap-1.5"><Download size={12} /> Export</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-boba-border/60">
                  {['Order ID', 'Franchise', 'Customer', 'Items', 'Total', 'Status', 'Time', ''].map((col, i) => (
                    <th key={i} className="text-left px-6 py-3 section-label">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }).map((_, i) => (
                  <tr key={i} className="table-row group">
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-12" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-24" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-24" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-8" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-14" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-5 w-20 rounded-full" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-14" /></td>
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
    </div>
  )
}
