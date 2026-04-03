import { Search, Filter, Download, ArrowRight } from 'lucide-react'
import { recentOrders } from '../data/mockData'
import ChartPlaceholder  from '../components/ChartPlaceholder'
import type { Order, OrderStatus } from '../types'

interface StatusConfig { label: string; color: string }

const statusConfig: Record<OrderStatus, StatusConfig> = {
  completed: { label: 'Completed', color: 'text-boba-teal  bg-boba-teal/10'  },
  preparing: { label: 'Preparing', color: 'text-boba-gold  bg-boba-gold/10'  },
  cancelled: { label: 'Cancelled', color: 'text-boba-rose  bg-boba-rose/10'  },
  refunded:  { label: 'Refunded',  color: 'text-boba-muted bg-boba-elevated' },
}

const extraOrders: Order[] = [
  { id: 10472, franchise: 'Telegraph Ave',  customer: 'Lucas Tran',     items: 2, total: 14.50, status: 'completed', date: '2026-04-02T12:10:00' },
  { id: 10471, franchise: 'Santana Row',    customer: 'Yuki Nakamura',  items: 3, total: 21.00, status: 'completed', date: '2026-04-02T11:55:00' },
  { id: 10470, franchise: 'Hayes Valley',   customer: 'Amara Osei',     items: 2, total: 13.00, status: 'preparing', date: '2026-04-02T11:40:00' },
  { id: 10469, franchise: 'Temescal',       customer: 'Sasha Moreno',   items: 1, total: 7.00,  status: 'completed', date: '2026-04-02T11:22:00' },
  { id: 10468, franchise: 'University Ave', customer: 'Jin Park',       items: 4, total: 28.00, status: 'completed', date: '2026-04-02T11:05:00' },
]

const allOrders: Order[] = [...recentOrders, ...extraOrders]

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
}

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
                {allOrders.map(order => {
                  const cfg = statusConfig[order.status]
                  return (
                    <tr key={order.id} className="table-row group">
                      <td className="px-6 py-3.5 font-mono text-boba-muted text-xs">#{order.id}</td>
                      <td className="px-6 py-3.5 text-boba-cream text-xs">{order.franchise}</td>
                      <td className="px-6 py-3.5 text-boba-cream text-xs">{order.customer}</td>
                      <td className="px-6 py-3.5 font-mono text-boba-muted text-xs">{order.items}</td>
                      <td className="px-6 py-3.5 font-mono font-medium text-boba-cream text-xs">${order.total.toFixed(2)}</td>
                      <td className="px-6 py-3.5">
                        <span className={`badge ${cfg.color}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                          {cfg.label}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 font-mono text-boba-subtle text-xs">{formatTime(order.date)}</td>
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
            <span className="text-boba-subtle text-xs font-mono">Showing {allOrders.length} of 12,847 orders</span>
            <button className="text-boba-gold text-xs font-mono hover:text-boba-cream transition-colors">Load more →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
