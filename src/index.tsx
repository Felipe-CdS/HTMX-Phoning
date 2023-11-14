import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { MessagesDatabase } from './db'
import api from './routes'
import SingleChat from './Views/SingleChat/SingleChat'
import singleChatRoutes from './Views/SingleChat/routes'

export const db = new MessagesDatabase()
const app = new Hono()

app.use('/assets/*', serveStatic({ root: './' }))

app.get('/', async (c) => {
    const messages = await db.getAllMessages()

    return c.html(<SingleChat messages={messages} />)
})

app.route('/', api)
app.route('/single-chat', singleChatRoutes)

export default app
