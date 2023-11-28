export function SettingsModal() {
    return (
        <div
            id="settings-modal-container"
            class="absolute left-0 top-0 z-10 flex h-full w-full flex-col place-content-end items-end justify-items-end bg-black bg-opacity-20 backdrop-blur-sm"
        >
            <div
                hx-get="/single-chat/close-settings"
                hx-target="#settings-modal-container"
                hx-swap="outerHTML"
                class="transparent h-20 w-full"
            />
            <div class="h-full w-full rounded-xl bg-gray-200">
                <div class="relative mb-6 flex justify-center rounded-t-2xl border-b border-gray-300 bg-white py-3">
                    <button
                        hx-get="/single-chat/close-settings"
                        hx-target="#settings-modal-container"
                        hx-swap="outerHTML"
                        class="align-items-center absolute left-1 flex text-lg text-blue-500"
                    >
                        <img class="-mr-1 h-7" src="./assets/back-arrow.svg" />
                        Back
                    </button>
                    <p class="text-lg font-bold">Settings</p>
                </div>
                <div class="relative mb-6 flex flex-col px-3">
                    <span class="mb-2 ml-3 text-xs font-semibold text-gray-700 opacity-70">
                        LANGUAGES ORDER AND VISIBILITY
                    </span>
                    <div class="relative mb-1 flex flex-col justify-center rounded-xl bg-white">
                        <button class="flex w-full items-center justify-between px-3 py-2">
                            <span class="flex items-center justify-items-center">
                                <img class="mr-1 h-5 opacity-60" src="./assets/eye-open.svg" />
                                <div class="flex flex-col items-start justify-items-start">
                                    <span>Korean</span>
                                    <span class="text-xs font-semibold opacity-70">한국어</span>
                                </div>
                            </span>
                            <img class="h-5 opacity-60" src="./assets/menu.svg" />
                        </button>
                        <button class="flex w-full items-center justify-between border-t border-gray-200 px-3 py-2">
                            <span class="flex items-center justify-items-center">
                                <img class="mr-1 h-5 opacity-60" src="./assets/eye-open.svg" />
                                <div class="flex flex-col items-start justify-items-start">
                                    <span>English</span>
                                    <span class="text-xs opacity-70">English</span>
                                </div>
                            </span>
                            <img class="h-5 opacity-60" src="./assets/menu.svg" />
                        </button>
                        <button class="flex w-full items-center justify-between border-t border-gray-200 px-3 py-2">
                            <span class="flex items-center justify-items-center">
                                <img class="mr-1 h-5 opacity-60" src="./assets/eye-open.svg" />
                                <div class="flex flex-col items-start justify-items-start">
                                    <span>Portuguese</span>
                                    <span class="text-xs opacity-70">Português</span>
                                </div>
                            </span>
                            <img class="h-5 opacity-60" src="./assets/menu.svg" />
                        </button>
                    </div>
                    <span class="mx-2 text-xs text-gray-700 opacity-70">
                        Messages will appear in the order described here. You can also hide some of
                        them.
                    </span>
                </div>
                <div class="relative mb-6 flex flex-col px-3">
                    <span class="mb-2 ml-3 text-xs font-semibold text-gray-700 opacity-70">
                        FUNCTIONS
                    </span>
                    <div class="relative mb-1 flex flex-col justify-center rounded-xl bg-white">
                        <div class="relative mb-1 flex flex-col justify-center rounded-xl bg-white">
                            <button disabled class="w-full py-2 text-blue-400">
                                Edit This Profile
                            </button>
                            <button
                                disabled
                                class="w-full border-t border-gray-200 py-2 text-blue-400"
                            >
                                Messages Screenshot
                            </button>
                            <button
                                disabled
                                class="w-full border-t border-gray-200 py-2 font-semibold text-red-400"
                            >
                                Delete Messages Mode
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <button class="h-10 w-full rounded-xl border-t border-gray-200 bg-white text-blue-400">
                Cancel
            </button>
            */}
        </div>
    )
}
