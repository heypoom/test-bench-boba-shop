import type { Franchise, MenuItem, Customer, Order, KpiData } from '../types'

export const franchises: Franchise[] = [
  { id: 1, name: 'Hayes Valley',   city: 'San Francisco', state: 'CA', opened_date: '2021-03-15', status: 'active',   monthly_revenue: 48200 },
  { id: 2, name: 'Temescal',       city: 'Oakland',       state: 'CA', opened_date: '2021-08-01', status: 'active',   monthly_revenue: 39100 },
  { id: 3, name: 'Telegraph Ave',  city: 'Berkeley',      state: 'CA', opened_date: '2022-01-20', status: 'active',   monthly_revenue: 35800 },
  { id: 4, name: 'Santana Row',    city: 'San Jose',      state: 'CA', opened_date: '2022-06-10', status: 'active',   monthly_revenue: 52400 },
  { id: 5, name: 'University Ave', city: 'Palo Alto',     state: 'CA', opened_date: '2023-02-28', status: 'active',   monthly_revenue: 44600 },
  { id: 6, name: 'Fillmore St',    city: 'San Francisco', state: 'CA', opened_date: '2023-09-05', status: 'pending',  monthly_revenue: 21300 },
]

export const menuItems: MenuItem[] = [
  { id: 1,  franchise_id: null, name: 'Classic Milk Tea',        category: 'Milk Tea',   price: 6.50,  is_available: true,  orders_30d: 1842 },
  { id: 2,  franchise_id: null, name: 'Taro Milk Tea',           category: 'Milk Tea',   price: 7.00,  is_available: true,  orders_30d: 1631 },
  { id: 3,  franchise_id: null, name: 'Brown Sugar Boba',        category: 'Signature',  price: 7.50,  is_available: true,  orders_30d: 2104 },
  { id: 4,  franchise_id: null, name: 'Matcha Latte',            category: 'Latte',      price: 7.00,  is_available: true,  orders_30d: 1290 },
  { id: 5,  franchise_id: null, name: 'Mango Smoothie',          category: 'Smoothie',   price: 7.50,  is_available: true,  orders_30d: 983  },
  { id: 6,  franchise_id: null, name: 'Oolong Fruit Tea',        category: 'Fruit Tea',  price: 6.50,  is_available: true,  orders_30d: 874  },
  { id: 7,  franchise_id: null, name: 'Jasmine Green Tea',       category: 'Tea',        price: 5.50,  is_available: true,  orders_30d: 762  },
  { id: 8,  franchise_id: null, name: 'Strawberry Yakult',       category: 'Fruit Tea',  price: 7.00,  is_available: true,  orders_30d: 1105 },
  { id: 9,  franchise_id: null, name: 'Wintermelon Tea',         category: 'Tea',        price: 6.00,  is_available: true,  orders_30d: 649  },
  { id: 10, franchise_id: null, name: 'Coconut Milk Coffee',     category: 'Coffee',     price: 7.50,  is_available: false, orders_30d: 0    },
  { id: 11, franchise_id: null, name: 'Passion Fruit Green Tea', category: 'Fruit Tea',  price: 6.50,  is_available: true,  orders_30d: 801  },
  { id: 12, franchise_id: null, name: 'Tiger Sugar Latte',       category: 'Signature',  price: 8.00,  is_available: true,  orders_30d: 1488 },
]

export const customers: Customer[] = [
  { id: 1,  franchise_id: 1, name: 'Amara Osei',     email: 'amara.osei@email.com',     loyalty_tier: 'Pearl',   joined_date: '2022-04-10', total_orders: 84,  total_spent: 604.20  },
  { id: 2,  franchise_id: 4, name: 'Lucas Tran',      email: 'lucas.tran@email.com',     loyalty_tier: 'Gold',    joined_date: '2021-11-23', total_orders: 142, total_spent: 1038.50 },
  { id: 3,  franchise_id: 2, name: 'Sasha Moreno',    email: 'sasha.m@email.com',        loyalty_tier: 'Pearl',   joined_date: '2022-08-15', total_orders: 67,  total_spent: 487.00  },
  { id: 4,  franchise_id: 5, name: 'Jin Park',        email: 'jin.park@email.com',       loyalty_tier: 'Gold',    joined_date: '2023-01-04', total_orders: 38,  total_spent: 276.50  },
  { id: 5,  franchise_id: 1, name: 'Nadia Kowalski',  email: 'nadia.k@email.com',        loyalty_tier: 'Regular', joined_date: '2023-05-19', total_orders: 22,  total_spent: 158.00  },
  { id: 6,  franchise_id: 3, name: 'Emeka Diallo',    email: 'emeka.d@email.com',        loyalty_tier: 'Regular', joined_date: '2023-07-28', total_orders: 14,  total_spent: 98.00   },
  { id: 7,  franchise_id: 4, name: 'Yuki Nakamura',   email: 'yuki.n@email.com',         loyalty_tier: 'Pearl',   joined_date: '2022-03-02', total_orders: 98,  total_spent: 735.00  },
  { id: 8,  franchise_id: 2, name: 'Chloe Dubois',    email: 'chloe.dubois@email.com',   loyalty_tier: 'Gold',    joined_date: '2021-09-18', total_orders: 177, total_spent: 1319.50 },
  { id: 9,  franchise_id: 5, name: 'Marco Espinoza',  email: 'm.espinoza@email.com',     loyalty_tier: 'Regular', joined_date: '2024-01-11', total_orders: 9,   total_spent: 63.00   },
  { id: 10, franchise_id: 1, name: 'Priya Sharma',    email: 'priya.s@email.com',        loyalty_tier: 'Pearl',   joined_date: '2022-10-30', total_orders: 55,  total_spent: 401.50  },
]

export const recentOrders: Order[] = [
  { id: 10482, franchise: 'Santana Row',    customer: 'Lucas Tran',     items: 3, total: 22.00, status: 'completed', date: '2026-04-02T14:33:00' },
  { id: 10481, franchise: 'Hayes Valley',   customer: 'Priya Sharma',   items: 2, total: 13.50, status: 'completed', date: '2026-04-02T14:18:00' },
  { id: 10480, franchise: 'University Ave', customer: 'Jin Park',       items: 1, total: 7.50,  status: 'preparing', date: '2026-04-02T14:10:00' },
  { id: 10479, franchise: 'Temescal',       customer: 'Chloe Dubois',   items: 4, total: 29.00, status: 'completed', date: '2026-04-02T13:55:00' },
  { id: 10478, franchise: 'Telegraph Ave',  customer: 'Emeka Diallo',   items: 2, total: 14.00, status: 'completed', date: '2026-04-02T13:42:00' },
  { id: 10477, franchise: 'Hayes Valley',   customer: 'Amara Osei',     items: 3, total: 20.50, status: 'cancelled', date: '2026-04-02T13:30:00' },
  { id: 10476, franchise: 'Santana Row',    customer: 'Yuki Nakamura',  items: 2, total: 15.00, status: 'completed', date: '2026-04-02T13:15:00' },
  { id: 10475, franchise: 'University Ave', customer: 'Marco Espinoza', items: 1, total: 6.50,  status: 'completed', date: '2026-04-02T12:58:00' },
  { id: 10474, franchise: 'Temescal',       customer: 'Sasha Moreno',   items: 3, total: 21.00, status: 'refunded',  date: '2026-04-02T12:40:00' },
  { id: 10473, franchise: 'Hayes Valley',   customer: 'Nadia Kowalski', items: 2, total: 14.00, status: 'completed', date: '2026-04-02T12:25:00' },
]

export const kpiData: KpiData = {
  revenue:   { value: 241300, change: 8.4,  label: 'Monthly Revenue'   },
  orders:    { value: 12847,  change: 12.1, label: 'Orders This Month' },
  customers: { value: 3241,   change: 5.8,  label: 'Active Customers'  },
  avg_order: { value: 18.78,  change: 3.2,  label: 'Avg. Order Value'  },
}
