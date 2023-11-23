import { Hono } from 'hono'
import { LanguageSelectorDiv, SendMsgBarWithReply } from './Components/SendMsgBarWithReply'
import { SendMsgBar } from './Components/SendMsgBar'

const singleChatRoutes = new Hono()

singleChatRoutes.get('/open-msg-edit', (c: any) => {
    const { message_id, sender, message } = c.req.query()
    return c.html(<SendMsgBarWithReply message_id={message_id} sender={sender} message={message} />)
})

singleChatRoutes.get('/close-msg-edit', (c: any) => {
    return c.html(<SendMsgBar />)
})

singleChatRoutes.get('/change-language', (c: any) => {
    const { selected } = c.req.query()
    return c.html(<LanguageSelectorDiv selected={selected} />)
})

singleChatRoutes.get('/open-emoji-picker', (c: any) => {
    return c.html(`
        <emoji-picker
        style = {{
            '--num-columns': 6,
            '--category-emoji-size': '0.82rem',
            }
        }
        class= "max-h-72 w-full"
    ></emoji-picker>`)
})

singleChatRoutes.put('put-translation', async (c: any) => {
    const body = await c.req.parseBody()
    if (body['language_input'] == '') return c.text('language-input missing', 400)
    if (body['message_text_input'] == '') return c.text('message-text-input missing', 400)
    if (body['message_id'] == '') return c.text('message id missing', 400)
    return c.html(<SendMsgBar />)
})

export default singleChatRoutes
