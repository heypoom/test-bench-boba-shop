import { Plus, Search } from 'lucide-react'
import ChartPlaceholder from '../components/ChartPlaceholder'
import Skeleton from '../components/Skeleton'

const categories = ['All', 'Milk Tea', 'Signature', 'Latte', 'Smoothie', 'Fruit Tea', 'Tea', 'Coffee']

export default function Menu() {
  return (
    <div className="space-y-6">

      {/* ── Analytics placeholders ────────────────────────── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-fade-up opacity-0-init"
        style={{ animationFillMode: 'forwards' }}
      >
        <ChartPlaceholder title="Sales by Category"           subtitle="Revenue contribution per drink type" type="pie"  height="h-56" />
        <ChartPlaceholder title="Item Performance Over Time"  subtitle="Top 5 items — 30-day trend"         type="line" height="h-56" />
      </div>

      {/* ── Menu grid ─────────────────────────────────────── */}
      <div className="animate-fade-up opacity-0-init" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button key={cat}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  cat === 'All'
                    ? 'bg-boba-gold text-boba-base font-semibold'
                    : 'border border-boba-border text-boba-muted hover:text-boba-cream hover:border-boba-subtle'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-boba-border bg-boba-elevated text-xs font-mono text-boba-muted">
              <Search size={12} strokeWidth={2} />
              <span>Search items…</span>
            </div>
            <button className="btn-primary"><Plus size={13} /> Add Item</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="bg-boba-surface rounded-2xl border border-boba-border p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-5 w-5 rounded-full" />
              </div>

              <Skeleton className="h-4 w-32 mb-1" />

              <div className="flex items-end justify-between mt-3">
                <Skeleton className="h-6 w-12" />
                <div className="text-right space-y-1.5">
                  <Skeleton className="h-3 w-16 ml-auto" />
                  <Skeleton className="h-2.5 w-10 ml-auto" />
                </div>
              </div>

              <Skeleton className="mt-3 h-1 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
