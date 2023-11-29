export function SettingsModal(props: {
    validToken: boolean
    loginToken: string | undefined
    username: string | undefined
}) {
    return (
        <div
            id="settings-modal-container"
            class="absolute left-0 top-0 z-10 flex h-full w-full flex-col place-content-end items-end justify-items-end bg-black bg-opacity-20 backdrop-blur-sm"
        >
            <div id="settings-submodal-container" class="hidden" />
            <div
                hx-get="/single-chat/settings/close"
                hx-target="#settings-modal-container"
                hx-swap="outerHTML"
                class="transparent h-20 w-full"
            />
            <div class="h-full w-full rounded-xl bg-gray-200">
                <div class="relative mb-6 flex justify-center rounded-t-2xl border-b border-gray-300 bg-white py-3">
                    <button
                        hx-get="/single-chat/settings/close"
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
                    {props.validToken ? (
                        <LoggedFunctions username={props.username} />
                    ) : (
                        <NotLoggedFunctions />
                    )}
                </div>
            </div>
            {/*
             */}
        </div>
    )
}

function LoggedFunctions(props: { username: string | undefined }) {
    return (
        <div class="relative mb-1 flex flex-col justify-center rounded-xl bg-white">
            <div class="relative mb-1 flex flex-col justify-center rounded-xl bg-white">
                <button
                    hx-get="/single-chat/settings/logout/open"
                    hx-target="#settings-submodal-container"
                    hx-swap="outerHTML"
                    class="w-full border-t border-gray-200 py-2 text-blue-400"
                >
                    Logged in as {props.username}
                </button>
                <button disabled class="w-full border-t border-gray-200 py-2 text-blue-400">
                    Edit This Profile
                </button>
                <button disabled class="w-full border-t border-gray-200 py-2 text-blue-400">
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
    )
}
function NotLoggedFunctions() {
    return (
        <div class="relative mb-1 flex flex-col justify-center rounded-xl bg-white">
            <div class="relative mb-1 flex flex-col justify-center rounded-xl bg-white">
                <button
                    hx-get="/single-chat/settings/login/open"
                    hx-target="#settings-submodal-container"
                    hx-swap="outerHTML"
                    class="w-full py-2 text-blue-400"
                >
                    Log In
                </button>
            </div>
        </div>
    )
}

export function SettingsLoginSubModal() {
    return (
        <div
            id="settings-submodal-container"
            class="absolute z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50 px-10"
        >
            <div
                hx-get="/single-chat/settings/open"
                hx-target="#settings-modal-container"
                hx-swap="outerHTML"
                class="absolute h-full w-full"
            ></div>
            <div class="z-30 w-full  rounded-xl bg-white">
                <p class="mt-3 px-3 text-center text-lg font-bold">Login</p>
                <p class="mb-2 px-3 text-center text-sm">Enter a whitelist name:</p>
                <form
                    hx-put="/login"
                    hx-target="#login-status-alert"
                    hx-swap="outerHTML"
                    class="mb-0"
                >
                    <div class="mb-2 ml-5 mr-5 flex rounded-sm border border-gray-500 p-1">
                        <span class="mr-1">@</span>
                        <input
                            name="login"
                            id="login-input"
                            type="text"
                            autocomplete="off"
                            class="w-full focus:outline-none"
                        />
                    </div>
                    <p id="login-status-alert" />
                    <button class="mt-2 h-10 w-full cursor-pointer rounded-b-xl border-t border-gray-200 bg-white font-semibold text-blue-400">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
export function SettingsLogoutSubModal(props: { username: string | undefined }) {
    return (
        <div
            id="settings-submodal-container"
            class="absolute z-20 flex h-full w-full flex-col items-center justify-end bg-black bg-opacity-50 px-3 py-4"
        >
            <div
                hx-get="/single-chat/settings/logout/close"
                hx-target="#settings-submodal-container"
                hx-swap="outerHTML"
                class="absolute h-full w-full"
            ></div>
            <div class="z-30 w-full  rounded-xl bg-white">
                <p class="mt-2 text-center text-gray-700 opacity-70">
                    Logged in as {props.username}
                </p>
                <button
                    hx-put="/logout"
                    hx-target="#settings-submodal-container"
                    hx-swap="outerHTML"
                    class="mt-2 h-10 w-full rounded-b-xl border-t border-gray-200 bg-white font-semibold text-red-400"
                >
                    Log Out
                </button>
            </div>
            <button
                hx-get="/single-chat/settings/logout/close"
                hx-target="#settings-submodal-container"
                hx-swap="outerHTML"
                class="z-30 mt-3 h-10 w-full cursor-pointer rounded-xl border-t border-gray-200 bg-white text-blue-400"
            >
                Cancel
            </button>
        </div>
    )
}
