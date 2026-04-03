export type FranchiseStatus = 'active' | 'pending' | 'inactive'
export type LoyaltyTier     = 'Pearl' | 'Gold' | 'Regular'
export type OrderStatus     = 'completed' | 'preparing' | 'cancelled' | 'refunded'
export type ChartType       = 'bar' | 'line' | 'pie' | 'map' | 'trend'
export type PageId          = 'dashboard' | 'orders' | 'menu' | 'franchises' | 'customers'

export interface Franchise {
  id:              number
  name:            string
  city:            string
  state:           string
  opened_date:     string
  status:          FranchiseStatus
  monthly_revenue: number
}

export interface MenuItem {
  id:           number
  franchise_id: number | null
  name:         string
  category:     string
  price:        number
  is_available: boolean
  orders_30d:   number
}

export interface Customer {
  id:           number
  franchise_id: number
  name:         string
  email:        string
  loyalty_tier: LoyaltyTier
  joined_date:  string
  total_orders: number
  total_spent:  number
}

export interface Order {
  id:        number
  franchise: string
  customer:  string
  items:     number
  total:     number
  status:    OrderStatus
  date:      string
}

export interface KpiMetric {
  value:  number
  change: number
  label:  string
}

export interface KpiData {
  revenue:   KpiMetric
  orders:    KpiMetric
  customers: KpiMetric
  avg_order: KpiMetric
}

export interface NavItem {
  id:    PageId
  label: string
  icon:  React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>
}

export interface PageInfo {
  title:    string
  subtitle: string
}
