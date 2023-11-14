function TopBar() {
    return (
        <div class="w-full bg-yellow-300 px-3 py-2">
            <div class="mb-2 flex items-center self-start">
                <div class="mr-5 h-6 w-6 rounded-full border border-black bg-white">
                    <span>&lt;</span>
                </div>
                <div class="mr-1 h-6 w-6 rounded-full border border-black"></div>
                <span class="whitespace-pre-line text-xl font-medium">팅🐱</span>
            </div>
        </div>
    )
}

export default TopBar
