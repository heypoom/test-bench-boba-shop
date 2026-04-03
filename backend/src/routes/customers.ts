import { Hono } from 'hono'
import { customers } from '../data.js'
import type { LoyaltyTier } from '../data.js'

const router = new Hono()

router.get('/', (c) => {
  const tier         = c.req.query('tier') as LoyaltyTier | undefined
  const franchiseStr = c.req.query('franchise_id')
  const limitStr     = c.req.query('limit')
  const limit        = limitStr ? parseInt(limitStr, 10) : undefined

  let data = [...customers]
  if (tier)         data = data.filter(c => c.loyalty_tier === tier)
  if (franchiseStr) data = data.filter(c => c.franchise_id === parseInt(franchiseStr, 10))
  if (limit)        data = data.slice(0, limit)

  return c.json({ data, total: customers.length })
})

router.get('/:id', (c) => {
  const id  = parseInt(c.req.param('id'), 10)
  const row = customers.find(c => c.id === id)
  if (!row) return c.json({ error: 'Customer not found' }, 404)
  return c.json(row)
})

export { router as customersRouter }
