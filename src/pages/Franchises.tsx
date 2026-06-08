import { MapPin, Plus } from 'lucide-react'
import ChartPlaceholder from '../components/ChartPlaceholder'
import Skeleton from '../components/Skeleton'

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
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}
              className="bg-boba-surface rounded-2xl border border-boba-border p-5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-boba-elevated border border-boba-border flex items-center justify-center">
                  <MapPin size={16} className="text-boba-gold" strokeWidth={1.5} />
                </div>
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>

              <Skeleton className="h-4 w-28 mb-1.5" />
              <Skeleton className="h-3 w-20" />

              <div className="mt-4 pt-4 border-t border-boba-border flex items-end justify-between">
                <div className="space-y-1.5">
                  <Skeleton className="h-2.5 w-20" />
                  <Skeleton className="h-6 w-16" />
                </div>
                <Skeleton className="h-6 w-14 rounded-lg" />
              </div>

              <Skeleton className="mt-3 h-1 w-full" />
              <Skeleton className="mt-1.5 h-2.5 w-24" />
            </div>
          ))}
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
