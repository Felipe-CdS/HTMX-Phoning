import { Hono } from 'hono'
import { getCookie, setCookie, deleteCookie } from 'hono/cookie'
import { db } from './index'
import { Layout, MessageBubbleSingleRowComponent, SendMessageBarComponent } from './components'
import { SettingsModal } from './Views/SingleChat/Components/SettingsModal'

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
                        return <MessageBubbleSingleRowComponent message={i.message_kr} />
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
                    return <MessageBubbleSingleRowComponent message={i.message_kr} />
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

api.put('/login', async (c: any) => {
    const login = (await c.req.parseBody())['login']
    const sessionCookie = getCookie(c)

    //TODO: Check if the user is already logged in.
    //TODO: Check real user and generate token
    //TODO: Create a cookie that expires
    if (sessionCookie && sessionCookie.token == '123') {
        return c.html(
            <p id="login-status-alert" class="mr-1 px-2 text-center text-sm text-gray-500">
                You're already logged in... Just go back.
            </p>
        )
    }
    if (login == 'Gawi') {
        setCookie(c, 'username', `${login}`)
        setCookie(c, 'token', '123')
        return c.html(
            <p id="login-status-alert" class="mr-1 px-2 text-center text-sm text-green-500">
                Name accepted. You're logged in.
            </p>
        )
    }
    return c.html(
        <p id="login-status-alert" class="mr-1 px-2 text-center text-sm text-red-500">
            Name not accepted. Please try again.
        </p>
    )
})

api.put('/logout', async (c: any) => {
    deleteCookie(c, 'username')
    deleteCookie(c, 'token')
    return c.html(<SettingsModal validToken={false} loginToken="" username="" />)
})
export default api
