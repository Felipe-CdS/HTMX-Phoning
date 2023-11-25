function BaseHTML(props: { children: any }) {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://unpkg.com/htmx.org@1.9.3"></script>
                <script src="https://cdn.tailwindcss.com"></script>
                <script
                    type="module"
                    src="https://cdn.jsdelivr.net/npm/emoji-picker-element@^1/index.js"
                ></script>
                <script
                    defer
                    src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js"
                ></script>
                <title>Phoning</title>
            </head>
            <body hx-ext="preload" class="bg-red flex h-screen flex-col items-center bg-gradient-to-b from-blue-400 py-10">
                {/* <img
                    class="absolute left-1/2 top-1/2 z-10 aspect-[9/19.5] h-[calc(100%-3rem)] -translate-x-1/2 -translate-y-1/2"
                    src={foo}
                ></img> */}
                <div
                    class="relative flex aspect-[9/19.5] h-full flex-col justify-between overflow-hidden rounded-3xl border-8 border-gray-700"
                    id="root"
                >
                    {props.children}
                </div>
            </body>
        </html>
    )
}

export default BaseHTML
