import { Hono } from 'hono'
import { LanguageSelectorDiv, SendMsgBarWithReply } from './Components/SendMsgBarWithReply'
import { SendMsgBar } from './Components/SendMsgBar'
import { EmojiPicker, EmojiPickerButton } from './Components/EmojiPicker'
import { CategoriesDataArray, ICategory } from '../../data/categories'
import { Fragment } from 'hono/jsx/jsx-runtime'
import { SettingsModal } from './Components/SettingsModal'

const singleChatRoutes = new Hono()

singleChatRoutes.get('/open-msg-edit', (c: any) => {
    const { message_id, sender, message } = c.req.query()
    return c.html(<SendMsgBarWithReply message_id={message_id} sender={sender} message={message} />)
})

singleChatRoutes.get('/close-msg-edit', (c: any) => {
    return c.html(<SendMsgBar />)
})

singleChatRoutes.get('/open-settings', (c: any) => {
    return c.html(<SettingsModal />)
})

singleChatRoutes.get('/close-settings', (c: any) => {
    return c.html(<div id="settings-modal-container" class="hidden" />)
})

singleChatRoutes.get('/change-language', (c: any) => {
    const { selected } = c.req.query()
    return c.html(<LanguageSelectorDiv selected={selected} />)
})

singleChatRoutes.put('put-translation', async (c: any) => {
    const body = await c.req.parseBody()
    if (body['language_input'] == '') return c.text('language-input missing', 400)
    if (body['message_text_input'] == '') return c.text('message-text-input missing', 400)
    if (body['message_id'] == '') return c.text('message id missing', 400)
    return c.html(<SendMsgBar />)
})

singleChatRoutes.get('/emoji-picker/change-category', (c: any) => {
    const { selected } = c.req.query()
    let emojisOnCategoryArray: ICategory | undefined = CategoriesDataArray.find(
        (elem) => elem.normalizedName == selected
    )

    if (emojisOnCategoryArray == undefined) return c.text('category missing', 400)

    return c.html(
        <Fragment>
            {emojisOnCategoryArray.emojisOnCategory.map((elem) => {
                return EmojiPickerButton(elem)
            })}
        </Fragment>
    )
})

export default singleChatRoutes
