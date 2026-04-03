import { Hono } from 'hono'
import { orders } from '../data.js'
import type { OrderStatus } from '../data.js'

const router = new Hono()

router.get('/', (c) => {
  const status    = c.req.query('status') as OrderStatus | undefined
  const franchise = c.req.query('franchise')
  const limitStr  = c.req.query('limit')
  const limit     = limitStr ? parseInt(limitStr, 10) : undefined

  let data = [...orders]
  if (status)    data = data.filter(o => o.status === status)
  if (franchise) data = data.filter(o => o.franchise.toLowerCase().includes(franchise.toLowerCase()))
  if (limit)     data = data.slice(0, limit)

  return c.json({ data, total: orders.length })
})

router.get('/:id', (c) => {
  const id  = parseInt(c.req.param('id'), 10)
  const row = orders.find(o => o.id === id)
  if (!row) return c.json({ error: 'Order not found' }, 404)
  return c.json(row)
})

export { router as ordersRouter }
