export function SendMsgBarWithReply(props: {
    message_id: string
    sender: string
    message: string
}) {
    return (
        <div
            id="send-msg-bar"
            class="flex w-full flex-col items-center justify-center border-t border-black bg-yellow-300"
        >
            <ReplyTextBox sender={props.sender} message={props.message} />
            <ReplyTextInputForm message_id={props.message_id} />
            <div class="w-full" id="emoji-picker-container"></div>
        </div>
    )
}

function ReplyTextBox(props: { sender: string; message: string }) {
    return (
        <div class="relative mt-2 flex w-full items-center px-2">
            <div class="relative flex w-11/12 flex-col rounded-xl border-l-4 border-green-600 bg-black bg-opacity-20 py-1 pl-1 pl-3">
                <span class="text-base font-medium"> {props.sender} </span>
                <p class="line-clamp-2 text-sm">{props.message}</p>
            </div>
            <button
                hx-target="#send-msg-bar"
                hx-swap="outerHTML"
                hx-get="/single-chat/close-msg-edit"
                class="float-right h-8 w-8 shrink-0 p-1 opacity-50"
            >
                <img src={'./assets/close-button.svg'}></img>
            </button>
        </div>
    )
}

// Send a reply with the translation, the language identifier and the message_id
function ReplyTextInputForm(props: { message_id: string }) {
    return (
        <div class="relative flex w-full flex-col items-center justify-center">
            <form
                hx-put="/single-chat/put-translation"
                hx-target="#send-msg-bar"
                hx-swap="outerHTML"
                class="mb-0 flex w-full items-center justify-around px-2 py-2"
            >
                <LanguageSelectorDiv selected="PT-BR" />
                <div class="flex h-10 w-full items-center rounded-full border border-black bg-white py-1 pl-1 pr-3">
                    <button
                        x-on:click="emojiPickerToggle = ! emojiPickerToggle"
                        class="h-8 w-8 shrink-0 p-1.5 opacity-60 invert"
                    >
                        <img src="./assets/emojis/smileys_emotion.svg"></img>
                    </button>
                    <input
                        id="message-text-input"
                        class="w-full focus:outline-none"
                        name="message-text-input"
                        type="text"
                        autocomplete="off"
                    />
                    <input
                        type="text"
                        name="message_id"
                        id="message_id"
                        value={props.message_id}
                        class="hidden"
                    />
                </div>
                <button class="btn float-right h-8 w-8 shrink-0 p-1 opacity-50">
                    <img src="./assets/send-arrow.svg"></img>
                </button>
            </form>
        </div>
    )
}

export function LanguageSelectorDiv(props: { selected: string }) {
    const nextDict = {
        'PT-BR': 'EN-US',
        'EN-US': 'PT-BR',
        //"PT-BR": "KR-KR",
    }
    const next = nextDict[props.selected as keyof typeof nextDict]

    return (
        <div class="align-center float-right flex h-8 w-8 shrink-0 p-1" id="language-selector">
            <button
                class="btn opacity-50"
                hx-get={`/single-chat/change-language?selected=${next}`}
                hx-swap="outerHTML"
                hx-target="#language-selector"
            >
                <img src={`./assets/${props.selected}.svg`} />
            </button>
            <input
                type="text"
                name="language_input"
                id="language_input"
                value={props.selected}
                class="hidden"
            />
        </div>
    )
}
