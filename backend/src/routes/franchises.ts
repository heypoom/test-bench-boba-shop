import { Hono } from 'hono'
import { franchises } from '../data.js'

const router = new Hono()

router.get('/', (c) => {
  const status = c.req.query('status')
  const data   = status ? franchises.filter(f => f.status === status) : franchises
  return c.json({ data, total: data.length })
})

router.get('/:id', (c) => {
  const id  = parseInt(c.req.param('id'), 10)
  const row = franchises.find(f => f.id === id)
  if (!row) return c.json({ error: 'Franchise not found' }, 404)
  return c.json(row)
})

export { router as franchisesRouter }
