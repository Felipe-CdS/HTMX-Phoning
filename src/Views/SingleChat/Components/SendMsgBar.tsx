export function SendMsgBar() {
    return (
        <div
            id="send-msg-bar"
            class="flex w-full flex-col items-center justify-center border-t border-black bg-yellow-300"
        >
            <ReplyTextInputForm />
            <div class="w-full" id="emoji-picker-container"></div>
        </div>
    )
}

function ReplyTextInputForm() {
    return (
        <div class="relative flex w-full flex-col items-center justify-center">
            <form
                class="mb-0 flex w-full items-center justify-center px-2 py-2"
                hx-post="/messages"
                hx-target="#messages-home"
                hx-swap="outerhtml"
            >
                <div class="flex h-10 w-full items-center rounded-full border border-black bg-white py-1 pl-1 pr-3">
                    <button
                        class="h-8 w-8 shrink-0 p-1.5 opacity-50"
                        hx-get="/single-chat/open-emoji-picker"
                        hx-target="#emoji-picker-container"
                        hx-swap="innerhtml"
                    >
                        <img src="./assets/emoji-smile.svg"></img>
                    </button>
                    <input
                        class="focus:outline-none"
                        name="message-text-input"
                        type="text"
                        autocomplete="off"
                    ></input>
                </div>
                <button class="btn float-right h-8 w-8 shrink-0 p-1 opacity-50">
                    <img src="./assets/send-arrow.svg"></img>
                </button>
            </form>
        </div>
    )
}
