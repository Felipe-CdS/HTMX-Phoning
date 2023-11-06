import { Hono } from 'hono'
import {
    ButtonComponent,
    FormComponent,
    Layout,
    MessageBubbleDoubleRowComponent,
    MessageBubbleSingleRowComponent,
    NavbarComponent,
    SendMessageBarComponent,
    TopBarComponent,
} from './components'
import { Message, MessagesDatabase } from './db'
import api from './routes'

export const db = new MessagesDatabase()
const app = new Hono()

app.get('/', async (c) => {
    const messages = await db.getAllMessages()

    return c.html(
        <Layout>
            <TopBarComponent />
            <div class="h-full overflow-y-scroll bg-gradient-to-b from-yellow-300 via-white bg-scroll px-3">
                {messages.map((i: any) => {
                    return (
                        <MessageBubbleSingleRowComponent
                            message={i.message_kr}
                        />
                    )
                })}
            </div>

            <SendMessageBarComponent />
            {/* <MessageBubbleSingleRowComponent message={"aaaasdasdjkasdha"} time={"00:47"}/>
			<MessageBubbleSingleRowComponent message={"aaaa"} time={"00:47"}/>
			<MessageBubbleSingleRowComponent message={"bbbbbbbbbqweqwebbb \n asjdhsadkjhds"} time={"00:50"}/>
			<MessageBubbleSingleRowComponent message={"안녕~~!"} time={"00:50"} />


			<MessageBubbleDoubleRowComponent messageKR={"안녕~~!"} messageTrans={"Hiiii!"} time={"00:50"} />
			<MessageBubbleDoubleRowComponent messageKR={"졸업식은 너무 짧았어ㅎㅎㅋㅋ"} messageTrans={"The graduation ceremony was too short hahaha"} time={"00:50"} />
			<MessageBubbleDoubleRowComponent messageKR={"✨✨✨✨✨"} messageTrans={"✨✨✨✨✨"} time={"00:50"} /> */}
        </Layout>
    )
})

app.route('/', api)

export default app
