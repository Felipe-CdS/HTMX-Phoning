import { html } from 'hono/html'

const foo = './assets/phone.png'
const minji = './assets/minji.jpg'

export function Layout(props: { children: any }) {
    return (
        <html>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <script src="https://unpkg.com/htmx.org@1.9.3"></script>
                <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
                <script src="https://cdn.tailwindcss.com"></script>
                <title>Hono + htmx</title>
            </head>
            <body class="bg-red flex h-screen flex-col items-center bg-gradient-to-b from-blue-400 py-10">
                {/* <img
                    class="absolute left-1/2 top-1/2 z-10 aspect-[9/19.5] h-[calc(100%-3rem)] -translate-x-1/2 -translate-y-1/2"
                    src={foo}
                ></img> */}

                <div
                    class="relative aspect-[9/19.5] h-full overflow-hidden rounded-3xl border-8 border-gray-700"
                    id="messages-home"
                >
                    {props.children}
                </div>
            </body>
        </html>
    )
}
export function NavbarComponent() {
    return (
        <div class="w-100 flex justify-around bg-teal-500">
            <button class="mr-2 py-2 text-lg font-bold text-white hover:text-teal-600">
                Home
            </button>
            <button class="mr-2 py-2 text-lg font-bold text-white hover:text-teal-600">
                Explore
            </button>
            <button class="mr-2 py-2 text-lg font-bold text-white hover:text-teal-600">
                Notifications
            </button>
            <button class="mr-2 py-2 text-lg font-bold text-white hover:text-teal-600">
                Messages
            </button>
            <button class="mr-2 py-2 text-lg font-bold text-white hover:text-teal-600">
                Lists
            </button>
            <button class="mr-2 py-2 text-lg font-bold text-white hover:text-teal-600">
                Bookmarks
            </button>
            <button class="mr-2 py-2 text-lg font-bold text-white hover:text-teal-600">
                Communities
            </button>
        </div>
    )
}
export function ButtonComponent() {
    return (
        <div hx-target="this" hx-swap="outerHTML">
            <div>
                <label>First Name</label>: Joe
            </div>
            <div>
                <label>Last Name</label>: Blow
            </div>
            <div>
                <label>Email</label>: joe@blow.com
            </div>
            <button
                hx-get="/contact/1/edit"
                class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
                Click To Edit
            </button>
        </div>
    )
}

export function FormComponent() {
    return (
        <form hx-put="/contact/1" hx-target="this" hx-swap="outerHTML">
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" value="Joe" />
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value="Blow" />
            </div>
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value="joe@blow.com" />
            </div>
            <button
                hx-post=""
                class="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
                Submit
            </button>
            <button
                hx-get="/contact/1"
                class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
                Cancel
            </button>
        </form>
    )
}

export function MessageBubbleSingleRowComponent({ message, time }: any) {
    return (
        <div class="mb-2 flex self-start">
            <div class="mr-1 h-6 w-6 overflow-hidden rounded-full">
                <img src={minji} class=" h-full w-full"></img>
            </div>

            <div class="flex items-end">
                <div class="mr-1 rounded-b-xl rounded-r-xl border border-black bg-gradient-to-t from-green-400 via-green-400 to-white px-2 py-1">
                    <span class="whitespace-pre-line text-base">
                        {message}{' '}
                    </span>
                </div>
                <span class="text-xs">{time} </span>
            </div>
        </div>
    )
}

export function MessageBubbleDoubleRowComponent({
    messageKR,
    messageTrans,
    time,
}: any) {
    return (
        <div class="mb-2 flex flex-col self-start">
            <span class="ml-6 text-sm">민지</span>

            <div class="flex">
                <div class="mr-1 h-5 w-5 rounded-full border border-black"></div>

                <div class="flex items-end">
                    <div class="mr-1 flex flex-col rounded-b-xl rounded-r-xl border border-black bg-gradient-to-t from-green-400 via-green-400">
                        <span class="whitespace-pre-line px-2 py-1 text-base">
                            {messageKR}{' '}
                        </span>
                        <hr class="my-1 border border-dashed border-black border-opacity-50" />
                        <span class="whitespace-pre-line px-2 py-1 text-base">
                            {messageTrans}{' '}
                        </span>
                    </div>

                    <span class="text-xs">{time} </span>
                </div>
            </div>
        </div>
    )
}

export function SendMessageBarComponent() {
    return (
        <div class="absolute bottom-0 flex h-14 w-full items-center justify-center border-t border-black bg-yellow-300 px-3">
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

export function TopBarComponent() {
    return (
        <div class="sticky top-0 w-full bg-yellow-300 px-3 py-2">
            <div class="mb-2 flex items-center self-start">
                <div class="mr-5 h-6 w-6 rounded-full border border-black bg-white">
                    <span>&lt;</span>
                </div>
                <div class="mr-1 h-6 w-6 rounded-full border border-black"></div>
                <span class="whitespace-pre-line text-xl font-medium">
                    팅🐱
                </span>
            </div>
        </div>
    )
}
