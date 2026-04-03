import {
  DollarSign,
  ShoppingBag,
  Users,
  Receipt,
  ArrowRight,
} from "lucide-react";
import StatCard from "../components/StatCard";
import ChartPlaceholder from "../components/ChartPlaceholder";
import { kpiData, recentOrders } from "../data/mockData";
import type { OrderStatus } from "../types";

interface StatusConfig {
  label: string;
  color: string;
}

const statusConfig: Record<OrderStatus, StatusConfig> = {
  completed: { label: "Completed", color: "text-boba-teal  bg-boba-teal/10" },
  preparing: { label: "Preparing", color: "text-boba-gold  bg-boba-gold/10" },
  cancelled: { label: "Cancelled", color: "text-boba-rose  bg-boba-rose/10" },
  refunded: { label: "Refunded", color: "text-boba-muted bg-boba-elevated" },
};

function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const cfg = statusConfig[status];
  return (
    <span className={`badge ${cfg.color}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
      {cfg.label}
    </span>
  );
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* ── KPI Row ───────────────────────────────────────── */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          label="Monthly Revenue"
          value={241300}
          change={kpiData.revenue.change}
          prefix="$"
          icon={DollarSign}
          delay={0}
        />
        <StatCard
          label="Orders This Month"
          value={kpiData.orders.value}
          change={kpiData.orders.change}
          icon={ShoppingBag}
          delay={80}
        />
        <StatCard
          label="Active Customers"
          value={kpiData.customers.value}
          change={kpiData.customers.change}
          icon={Users}
          delay={160}
        />
        <StatCard
          label="Avg. Order Value"
          value={kpiData.avg_order.value}
          change={kpiData.avg_order.change}
          prefix="$"
          icon={Receipt}
          delay={240}
        />
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
                {recentOrders.map((order) => (
                  <tr key={order.id} className="table-row">
                    <td className="px-6 py-3.5 font-mono text-boba-muted text-xs">
                      #{order.id}
                    </td>
                    <td className="px-6 py-3.5 text-boba-cream text-xs">
                      {order.franchise}
                    </td>
                    <td className="px-6 py-3.5 text-boba-cream text-xs">
                      {order.customer}
                    </td>
                    <td className="px-6 py-3.5 font-mono text-boba-muted text-xs">
                      {order.items} item{order.items !== 1 ? "s" : ""}
                    </td>
                    <td className="px-6 py-3.5 font-mono font-medium text-boba-cream text-xs">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="px-6 py-3.5">
                      <OrderStatusBadge status={order.status} />
                    </td>
                    <td className="px-6 py-3.5 font-mono text-boba-subtle text-xs">
                      {formatTime(order.date)}
                    </td>
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
