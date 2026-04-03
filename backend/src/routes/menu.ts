import { Hono } from 'hono'
import { menuItems } from '../data.js'

const router = new Hono()

router.get('/', (c) => {
  const category     = c.req.query('category')
  const availableStr = c.req.query('available')

  let data = [...menuItems]
  if (category)            data = data.filter(i => i.category.toLowerCase() === category.toLowerCase())
  if (availableStr != null) data = data.filter(i => i.is_available === (availableStr !== 'false'))

  return c.json({ data, total: data.length })
})

router.get('/categories', (c) => {
  const categories = [...new Set(menuItems.map(i => i.category))].sort()
  return c.json(categories)
})

router.get('/:id', (c) => {
  const id  = parseInt(c.req.param('id'), 10)
  const row = menuItems.find(i => i.id === id)
  if (!row) return c.json({ error: 'Menu item not found' }, 404)
  return c.json(row)
})

export { router as menuRouter }
