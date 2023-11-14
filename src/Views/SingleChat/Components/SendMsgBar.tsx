function ReplyTextBox(props: { sender: string; message: string }) {
    return (
        <div class="relative mt-2 flex w-full items-center">
            <div class="relative flex w-11/12 flex-col rounded-xl border-l-4 border-green-600 bg-black bg-opacity-20 px-3 py-1">
                <span class="text-base font-medium"> {props.sender} </span>
                <p class="line-clamp-2 text-sm">{props.message}</p>
            </div>
            <button
                hx-target="#send-msg-bar"
                hx-swap="outerHTML"
                hx-get="/single-chat/close-msg-edit"
                class="w-1/12"
            >
                <img src={'./assets/close-button.svg'} class="h-full w-full opacity-40"></img>
            </button>
        </div>
    )
}
function ReplyTextInputForm() {
    return (
        <div class="flex h-14 w-full items-center justify-center">
            <form
                class="mb-0 flex w-full items-center justify-around rounded-full border border-black bg-white px-3 py-1"
                hx-post="/messages"
                hx-target="#messages-home"
                hx-swap="outerHTML"
            >
                <input
                    class="mr-2 w-full focus:outline-none"
                    name="message-text-input"
                    type="text"
                    placeholder="Enter a message."
                ></input>
                <button class="btn float-right w-10">Send</button>
            </form>
        </div>
    )
}

export function SendMsgBar() {
    return (
        <div
            id="send-msg-bar"
            class="flex max-h-96 w-full flex-col items-center justify-center border-t border-black bg-yellow-300 px-3"
        >
            <ReplyTextInputForm />
        </div>
    )
}

export function SendMsgBarWithReply(props: { sender: string; message: string }) {
    return (
        <div
            id="send-msg-bar"
            class="flex max-h-96 w-full flex-col items-center justify-center border-t border-black bg-yellow-300 px-3"
        >
            <ReplyTextBox sender={props.sender} message={props.message} />
            <ReplyTextInputForm />
        </div>
    )
}
