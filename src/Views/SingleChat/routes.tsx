import { Hono } from 'hono'
import { SendMsgBar, SendMsgBarWithReply } from './Components/SendMsgBar'

const singleChatRoutes = new Hono()

singleChatRoutes.get('/open-msg-edit', (c: any) => {
    const { sender, message } = c.req.query()
    return c.html(<SendMsgBarWithReply sender={sender} message={message} />)
})

singleChatRoutes.get('/close-msg-edit', (c: any) => {
    return c.html(<SendMsgBar />)
})

export default singleChatRoutes
