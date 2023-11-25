import { Hono } from 'hono'
import { LanguageSelectorDiv, SendMsgBarWithReply } from './Components/SendMsgBarWithReply'
import { SendMsgBar } from './Components/SendMsgBar'
import { EmojiPicker } from './Components/EmojiPicker'
import { emojisByCategory } from '../..'
import { CategoriesDataArray, ICategory } from '../../data/categories'
import { Fragment } from 'hono/jsx/jsx-runtime'

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

singleChatRoutes.get('/emoji-picker/open', async (c: any) => {
    return c.html(<EmojiPicker />)
})

singleChatRoutes.get('/emoji-picker/change-category', (c: any) => {
    const { selected } = c.req.query();
    let emojisOnCategoryArray: ICategory | undefined = CategoriesDataArray
        .find((elem) => elem.normalizedName == selected);

    if (emojisOnCategoryArray == undefined)
        return c.text('category missing', 400)

    return c.html(
        <Fragment>
            {
                emojisOnCategoryArray.emojisOnCategory.map((elem) => {
                    return (
                        <button
                            class={`place-self-center bg-[position:${-(elem.sheet_x * (32 + 2)) + 1}px_-${(elem.sheet_y * (32 + 2)) + 1}px] w-[34px] h-[34px]`}
                            onclick={`console.log('aaaa');`}
                            style="background-image:url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/sheets-clean/32.png)"
                        />);
                })
            }
        </Fragment>);
})

singleChatRoutes.put('put-translation', async (c: any) => {
    const body = await c.req.parseBody()
    if (body['language_input'] == '') return c.text('language-input missing', 400)
    if (body['message_text_input'] == '') return c.text('message-text-input missing', 400)
    if (body['message_id'] == '') return c.text('message id missing', 400)
    return c.html(<SendMsgBar />)
})

export default singleChatRoutes
