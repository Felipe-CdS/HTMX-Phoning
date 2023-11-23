function SingleRowMsgBubble({ message, time }: any) {
    return (
        <div class="group mb-2 flex self-start">
            <div class="mr-1 h-6 w-6 overflow-hidden rounded-full">
                <img src={'./assets/minji.jpg'} class=" h-full w-full"></img>
            </div>

            <div class="flex items-center">
                <div class="flex items-end">
                    <div class="mr-1 rounded-b-xl rounded-r-xl border border-black bg-gradient-to-t from-green-400 via-green-400 to-white px-2 py-1">
                        <span class="whitespace-pre-line text-base">{message} </span>
                    </div>
                    <span class="mr-2 text-xs opacity-50">{time} </span>
                </div>
                <button
                    hx-target="#send-msg-bar"
                    hx-swap="outerHTML transition:true"
                    hx-get="/single-chat/open-msg-edit"
                    hx-vals={`"message_id": "1", "sender": "Minji", "message": "${message}"`}
                    class="h-6 w-6 rounded-full bg-black bg-opacity-20 p-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                    <img src={'./assets/reply-arrow.svg'} class="h-full w-full opacity-20"></img>
                </button>
            </div>
        </div>
    )
}

export default SingleRowMsgBubble
