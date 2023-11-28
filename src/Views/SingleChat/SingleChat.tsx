import BaseHTML from '../BaseHTML'
import { EmojiPicker } from './Components/EmojiPicker'
import { SendMsgBar } from './Components/SendMsgBar'
import { SettingsModal } from './Components/SettingsModal'
import SingleRowMsgBubble from './Components/SingleRowMsgBubble'
import TopBar from './Components/TopBar'

function SingleChatView(props: { messages: any }) {
    return (
        <BaseHTML>
            <TopBar />
            <div class="grow overflow-y-scroll bg-gradient-to-b from-yellow-300 via-white to-white bg-scroll px-3">
                {props.messages.map((i: any) => {
                    return <SingleRowMsgBubble message={i.message_kr} time={'12:00'} />
                })}
            </div>
            <SendMsgBar />
            <EmojiPicker />
            <div id="settings-modal-container" class="hidden" />
            {/*
            <div id="emoji_root" x-show="emoji-open"></div>
             <MessageBubbleSingleRowComponent message={"aaaasdasdjkasdha"} time={"00:47"}/>
				<MessageBubbleSingleRowComponent message={"aaaa"} time={"00:47"}/>
				<MessageBubbleSingleRowComponent message={"bbbbbbbbbqweqwebbb \n asjdhsadkjhds"} time={"00:50"}/>
				<MessageBubbleSingleRowComponent message={"안녕~~!"} time={"00:50"} />


				<MessageBubbleDoubleRowComponent messageKR={"안녕~~!"} messageTrans={"Hiiii!"} time={"00:50"} />
				<MessageBubbleDoubleRowComponent messageKR={"졸업식은 너무 짧았어ㅎㅎㅋㅋ"} messageTrans={"The graduation ceremony was too short hahaha"} time={"00:50"} />
				<MessageBubbleDoubleRowComponent messageKR={"✨✨✨✨✨"} messageTrans={"✨✨✨✨✨"} time={"00:50"} /> */}
        </BaseHTML>
    )
}

export default SingleChatView
