import { Plus, Search, ToggleLeft, ToggleRight } from 'lucide-react'
import { menuItems } from '../data/mockData'
import ChartPlaceholder  from '../components/ChartPlaceholder'

const categoryColors: Record<string, string> = {
  'Milk Tea':  'text-boba-gold  bg-boba-gold/10',
  'Signature': 'text-boba-amber bg-boba-amber/10',
  'Latte':     'text-boba-teal  bg-boba-teal/10',
  'Smoothie':  'text-boba-green bg-boba-green/10',
  'Fruit Tea': 'text-purple-400 bg-purple-400/10',
  'Tea':       'text-sky-400    bg-sky-400/10',
  'Coffee':    'text-orange-400 bg-orange-400/10',
}

const categories = ['All', ...new Set(menuItems.map(i => i.category))]

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
          {menuItems.map(item => (
            <div
              key={item.id}
              className="bg-boba-surface rounded-2xl border border-boba-border p-5 hover:border-boba-subtle transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`badge ${categoryColors[item.category] ?? 'text-boba-muted bg-boba-elevated'}`}>
                  {item.category}
                </span>
                <button className={`transition-colors ${item.is_available ? 'text-boba-teal' : 'text-boba-rose'}`}>
                  {item.is_available
                    ? <ToggleRight size={20} strokeWidth={1.5} />
                    : <ToggleLeft  size={20} strokeWidth={1.5} />
                  }
                </button>
              </div>

              <h4 className="font-heading font-semibold text-boba-cream text-sm mb-1 group-hover:text-white transition-colors">
                {item.name}
              </h4>

              <div className="flex items-end justify-between mt-3">
                <span className="font-display text-xl font-bold text-boba-cream">${item.price.toFixed(2)}</span>
                <div className="text-right">
                  <p className="font-mono text-boba-gold text-xs font-medium">
                    {item.orders_30d > 0 ? item.orders_30d.toLocaleString() : '—'} orders
                  </p>
                  <p className="font-mono text-boba-subtle text-[10px]">this month</p>
                </div>
              </div>

              {item.orders_30d > 0 && (
                <div className="mt-3 h-1 bg-boba-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-boba-gold to-boba-amber rounded-full"
                    style={{ width: `${Math.min((item.orders_30d / 2200) * 100, 100)}%` }}
                  />
                </div>
              )}

              {!item.is_available && (
                <p className="mt-2 text-[10px] font-mono text-boba-rose/70">Unavailable</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
