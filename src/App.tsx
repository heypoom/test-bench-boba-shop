import { useState } from 'react'
import {
  LayoutDashboard, ShoppingBag, BookOpen,
  Store, Users, Settings, Bell, ChevronRight,
  Circle, LogOut, HelpCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import Dashboard    from './pages/Dashboard'
import Orders       from './pages/Orders'
import Menu         from './pages/Menu'
import Franchises   from './pages/Franchises'
import Customers    from './pages/Customers'
import type { PageId, PageInfo } from './types'

interface NavItem {
  id:    PageId
  label: string
  icon:  LucideIcon
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard',  label: 'Dashboard',  icon: LayoutDashboard },
  { id: 'orders',     label: 'Orders',     icon: ShoppingBag     },
  { id: 'menu',       label: 'Menu',       icon: BookOpen        },
  { id: 'franchises', label: 'Franchises', icon: Store           },
  { id: 'customers',  label: 'Customers',  icon: Users           },
]

const PAGE_MAP: Record<PageId, React.ComponentType> = {
  dashboard:  Dashboard,
  orders:     Orders,
  menu:       Menu,
  franchises: Franchises,
  customers:  Customers,
}

const PAGE_TITLES: Record<PageId, PageInfo> = {
  dashboard:  { title: 'Dashboard',  subtitle: 'Overview & performance' },
  orders:     { title: 'Orders',     subtitle: 'Manage incoming orders'  },
  menu:       { title: 'Menu',       subtitle: 'Items & availability'    },
  franchises: { title: 'Franchises', subtitle: 'Location management'     },
  customers:  { title: 'Customers',  subtitle: 'Member profiles'         },
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('dashboard')
  const PageComponent = PAGE_MAP[activePage]
  const pageInfo      = PAGE_TITLES[activePage]

  return (
    <div className="flex h-screen overflow-hidden bg-boba-base">

      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside className="w-[240px] shrink-0 flex flex-col h-full bg-boba-surface border-r border-boba-border relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(201,148,58,0.08) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(75,184,172,0.05) 0%, transparent 50%)',
          }}
        />

        {/* Brand */}
        <div className="relative px-5 pt-6 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-boba-gold flex items-center justify-center shadow-glow-gold">
              <span className="font-display font-bold text-boba-base text-base leading-none select-none">K</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-boba-cream text-lg leading-none tracking-wide">KOI</h1>
              <p className="text-boba-muted text-[10px] font-mono mt-0.5 tracking-widest uppercase">Backoffice</p>
            </div>
          </div>
        </div>

        <div className="relative px-5 mb-4">
          <div className="h-px bg-gradient-to-r from-boba-border via-boba-subtle/40 to-transparent" />
        </div>

        {/* Nav */}
        <nav className="relative flex-1 px-3 space-y-0.5 overflow-y-auto">
          <p className="section-label px-3 mb-3">Navigation</p>
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActivePage(id)}
              className={`nav-item w-full ${activePage === id ? 'active' : ''}`}
            >
              <Icon
                size={16}
                className={`nav-icon shrink-0 ${activePage === id ? 'text-boba-gold' : 'text-boba-subtle'}`}
                strokeWidth={1.8}
              />
              <span>{label}</span>
              {activePage === id && (
                <ChevronRight size={12} className="ml-auto text-boba-gold/50" />
              )}
            </button>
          ))}
        </nav>

        {/* Status pill */}
        <div className="relative mx-3 mb-4 p-3 rounded-xl bg-boba-elevated border border-boba-border">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-boba-teal animate-pulse-soft" />
            <span className="text-xs font-mono text-boba-muted">All systems</span>
            <span className="ml-auto text-xs font-mono text-boba-teal font-medium">Operational</span>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-boba-subtle">
            <span>6 franchises active</span>
            <span>Last sync 2m ago</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative px-3 pb-5 space-y-0.5">
          <div className="h-px bg-boba-border mb-3" />
          <button className="nav-item w-full">
            <Settings size={15} className="text-boba-subtle" strokeWidth={1.8} />
            <span>Settings</span>
          </button>
          <button className="nav-item w-full">
            <HelpCircle size={15} className="text-boba-subtle" strokeWidth={1.8} />
            <span>Help</span>
          </button>
          <div className="flex items-center gap-2.5 px-3 py-2.5 mt-1 rounded-xl border border-boba-border bg-boba-elevated">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-boba-gold to-boba-amber flex items-center justify-center shrink-0">
              <span className="text-boba-base font-heading font-bold text-xs">AS</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-boba-cream text-xs font-medium truncate">Aria Suki</p>
              <p className="text-boba-muted text-[10px] font-mono truncate">Owner</p>
            </div>
            <LogOut size={13} className="text-boba-subtle shrink-0 cursor-pointer hover:text-boba-muted transition-colors" strokeWidth={1.8} />
          </div>
        </div>
      </aside>

      {/* ── Main area ───────────────────────────────────────── */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="shrink-0 h-[60px] flex items-center justify-between px-8 border-b border-boba-border bg-boba-base/80 backdrop-blur-md">
          <div className="flex items-center gap-2 text-sm text-boba-muted font-mono">
            <span className="text-boba-subtle">KOI</span>
            <ChevronRight size={12} className="text-boba-subtle/50" />
            <span className="text-boba-muted">{pageInfo.title}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-boba-border bg-boba-elevated text-xs font-mono text-boba-muted">
              <Circle size={6} className="text-boba-teal fill-boba-teal" />
              Apr 2, 2026
            </div>
            <button className="relative w-9 h-9 rounded-xl border border-boba-border bg-boba-elevated flex items-center justify-center hover:border-boba-subtle transition-colors">
              <Bell size={15} className="text-boba-muted" strokeWidth={1.8} />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-boba-amber rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-boba-gold to-boba-amber flex items-center justify-center cursor-pointer">
              <span className="text-boba-base font-heading font-bold text-xs">AS</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="px-8 py-7">
            <div className="mb-8 animate-fade-up opacity-0-init" style={{ animationFillMode: 'forwards' }}>
              <h2 className="font-display text-3xl font-bold text-boba-cream leading-tight">{pageInfo.title}</h2>
              <p className="text-boba-muted text-sm font-mono mt-1">{pageInfo.subtitle}</p>
            </div>
            <PageComponent />
          </div>
        </main>
      </div>
    </div>
  )
}
