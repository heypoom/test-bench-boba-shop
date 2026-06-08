import {
  DollarSign,
  ShoppingBag,
  Users,
  Receipt,
  ArrowRight,
} from "lucide-react";
import StatCard from "../components/StatCard";
import ChartPlaceholder from "../components/ChartPlaceholder";
import Skeleton from "../components/Skeleton";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* ── KPI Row ───────────────────────────────────────── */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Monthly Revenue" icon={DollarSign} delay={0} />
        <StatCard label="Orders This Month" icon={ShoppingBag} delay={80} />
        <StatCard label="Active Customers" icon={Users} delay={160} />
        <StatCard label="Avg. Order Value" icon={Receipt} delay={240} />
      </div>

      {/* ── Revenue Over Time ─────────────────────────────── */}
      <div
        className="animate-fade-up opacity-0-init"
        style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
      >
        <ChartPlaceholder
          title="Revenue Over Time"
          subtitle="Daily revenue across all franchises"
          type="line"
          height="h-72"
        />
      </div>

      {/* ── Mid-row ───────────────────────────────────────── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-fade-up opacity-0-init"
        style={{ animationDelay: "380ms", animationFillMode: "forwards" }}
      >
        <ChartPlaceholder
          title="Orders by Franchise"
          subtitle="Volume breakdown per location"
          type="bar"
          height="h-60"
        />
        <ChartPlaceholder
          title="Top Menu Items"
          subtitle="Best-selling drinks this month"
          type="pie"
          height="h-60"
        />
      </div>

      {/* ── Bottom row ────────────────────────────────────── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fade-up opacity-0-init"
        style={{ animationDelay: "440ms", animationFillMode: "forwards" }}
      >
        <div className="lg:col-span-2">
          <ChartPlaceholder
            title="Customer Loyalty Tiers"
            subtitle="Regular · Gold · Pearl distribution over time"
            type="trend"
            height="h-52"
          />
        </div>
        <ChartPlaceholder
          title="Order Status Mix"
          subtitle="Completed vs. issues"
          type="pie"
          height="h-52"
        />
      </div>

      {/* ── Recent Orders ─────────────────────────────────── */}
      <div
        className="animate-fade-up opacity-0-init"
        style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
      >
        <div className="bg-boba-surface rounded-2xl border border-boba-border overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-boba-border">
            <div>
              <h3 className="font-heading font-semibold text-boba-cream text-sm">
                Recent Orders
              </h3>
              <p className="section-label mt-0.5">Live feed — today</p>
            </div>
            <button className="btn-ghost text-xs gap-1.5">
              View all <ArrowRight size={12} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-boba-border/60">
                  {[
                    "Order ID",
                    "Franchise",
                    "Customer",
                    "Items",
                    "Total",
                    "Status",
                    "Time",
                  ].map((col) => (
                    <th
                      key={col}
                      className="text-left px-6 py-3 section-label font-medium"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 8 }).map((_, i) => (
                  <tr key={i} className="table-row">
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-12" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-24" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-24" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-10" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-14" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-5 w-20 rounded-full" /></td>
                    <td className="px-6 py-3.5"><Skeleton className="h-3 w-14" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
