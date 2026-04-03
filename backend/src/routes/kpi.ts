import { Hono } from 'hono'
import { kpi, franchises, orders, customers } from '../data.js'

const router = new Hono()

router.get('/', (c) => {
  return c.json(kpi)
})

router.get('/summary', (c) => {
  const activeFranchises = franchises.filter(f => f.status === 'active').length
  const totalRevenue     = franchises.reduce((sum, f) => sum + f.monthly_revenue, 0)
  const pendingOrders    = orders.filter(o => o.status === 'preparing').length
  const goldPearlMembers = customers.filter(c => c.loyalty_tier !== 'Regular').length

  return c.json({
    active_franchises: activeFranchises,
    total_revenue:     totalRevenue,
    pending_orders:    pendingOrders,
    premium_members:   goldPearlMembers,
    ...kpi,
  })
})

export { router as kpiRouter }
