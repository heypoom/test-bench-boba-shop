export type FranchiseStatus = 'active' | 'pending' | 'inactive'
export type LoyaltyTier     = 'Pearl' | 'Gold' | 'Regular'
export type OrderStatus     = 'completed' | 'preparing' | 'cancelled' | 'refunded'

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

export const franchises: Franchise[] = []

export const menuItems: MenuItem[] = []

export const customers: Customer[] = []

export const orders: Order[] = []

export const kpi = {
  revenue:   { value: 0, change: 0, label: 'Monthly Revenue'   },
  orders:    { value: 0, change: 0, label: 'Orders This Month' },
  customers: { value: 0, change: 0, label: 'Active Customers'  },
  avg_order: { value: 0, change: 0, label: 'Avg. Order Value'  },
}
