import { Hono } from 'hono'
import { db } from './index'
import {
    Layout,
    MessageBubbleSingleRowComponent,
    SendMessageBarComponent,
} from './components'

const api = new Hono()

api.use('/')

api.post('/messages', async (c) => {
    const reqData = await c.req.parseBody()

    const messageText = reqData['message-text-input'] as string

    if (messageText === '') {
        console.log('aaaa')
        const messages = await db.getAllMessages()
        return c.html(
            <Layout>
                <div class="h-20 overflow-y-hidden">
                    {messages.map((i: any) => {
                        return (
                            <MessageBubbleSingleRowComponent
                                message={i.message_kr}
                            />
                        )
                    })}
                </div>
                <SendMessageBarComponent />
            </Layout>
        )
    }

    db.createMessage(messageText, new Date())
    const messages = await db.getAllMessages()

    return c.html(
        <Layout>
            <div class="h-20 overflow-y-hidden">
                {messages.map((i: any) => {
                    return (
                        <MessageBubbleSingleRowComponent
                            message={i.message_kr}
                        />
                    )
                })}
            </div>
            <SendMessageBarComponent />
        </Layout>
    )
})

api.get('/messages/all', async () => {
    console.log(await db.getAllMessages())

    return new Response(null, { status: 200 })
})

export default api
