function TopBar() {
    return (
        <div class="flex w-full justify-between bg-yellow-300 px-3 py-2">
            <div class="mb-2 flex items-center self-start">
                <div class="mr-5 h-6 w-6 rounded-full border border-black bg-white">
                    <img class="w-full brightness-0 " src="./assets/back-arrow.svg" />
                </div>
                <div class="mr-1 h-6 w-6 rounded-full border border-black"></div>
                <span class="whitespace-pre-line text-xl font-medium">팅🐱</span>
            </div>
            <button
                hx-get="/single-chat/open-settings"
                hx-target="#settings-modal-container"
                hx-swap="outerHTML"
                class="align-items-center float-right flex text-lg text-blue-500"
            >
                <div class="h-6 w-6 rounded-full border border-black bg-white">
                    <img class="w-full opacity-80" src="./assets/vertical-dots.svg" />
                </div>
            </button>
        </div>
    )
}

export default TopBar
