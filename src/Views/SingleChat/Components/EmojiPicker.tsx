import { CategoriesDataArray, ICategory } from '../../../data/categories'

export function EmojiPicker() {
    let emojisOnCategoryArray: any[] = (
        CategoriesDataArray.find((elem) => elem.normalizedName == 'smileys_emotion') as ICategory
    ).emojisOnCategory

    return (
        <div id="emoji_root" class="max-h-96 bg-gray-800" x-show="emojiPickerToggle">
            <div id="emoji_search" class="px-3 py-2">
                <input
                    type="text"
                    placeholder="Search emojis"
                    class="h-10 w-full rounded-full border border-gray-300 border-opacity-70 bg-transparent px-3 py-1 text-white focus:outline-none"
                />
            </div>
            <div
                id="emoji_categories"
                class="flex w-full justify-around border-b border-gray-300 border-opacity-70 px-3 py-1"
            >
                {CategoriesDataArray.map((e: ICategory) => {
                    return (
                        <button
                            hx-get={`/single-chat/emoji-picker/change-category?selected=${e.normalizedName}`}
                            hx-swap="innerHTML"
                            hx-target="#emoji_list"
                            x-on:click={`selectedCategory = "${e.normalizedName}"`}
                            x-bind:class={`selectedCategory == "${e.normalizedName}" ?
                                            "after:absolute after:h-1 after:-bottom-1 after:left-0 after:w-full after:bg-blue-400 after:rounded-xl" : 
                                            ""`}
                            class="relative w-1/12 p-1 hover:bg-blue-400 hover:bg-opacity-30 hover:transition-all hover:duration-300"
                            title={e.title}
                        >
                            <img class="w-full fill-white" src={e.iconPath} />
                        </button>
                    )
                })}
            </div>
            <div
                id="emoji_list"
                class="grid max-h-96 grid-cols-6 items-center justify-center gap-2 overflow-y-scroll p-3"
            >
                {emojisOnCategoryArray.map((elem) => {
                    return EmojiPickerButton(elem)
                })}
            </div>
        </div>
    )
}

export function EmojiPickerButton(emoji: any) {
    return (
        <button
            class={`h-[34px] w-[34px] place-self-center rounded-sm hover:bg-gray-500 hover:bg-opacity-50 hover:transition-all
            bg-[position:${-(emoji.sheet_x * (32 + 2)) + 1}px_-${emoji.sheet_y * (32 + 2) + 1}px] `}
            style="background-image:url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/sheets-clean/32.png)"
            onclick={`
                let elem = document.getElementById("message-text-input");
                let cursorPos = elem.selectionStart;
                let textBefore = elem.value.substring(0, cursorPos);
                let textAfter = elem.value.substring(cursorPos, elem.value.length);
                elem.value = textBefore + "${EmojiInputFormatter(emoji.unified)}" + textAfter;
                elem.setSelectionRange(cursorPos + 2, cursorPos + 2);
            `}
        />
    )
}

// This function transforms the emoji from a cdn to a html pattern. Also works with emojis 
// that need more than one unicode.
// Example: 1FFF transforms to \u{1fff}
// Exampl: 1FFF-2ABC transforms to \u{1fff}\u{2abc}
function EmojiInputFormatter(unifiedCode: string) {
    let splitSurrogatePairs = unifiedCode.split('-')
    splitSurrogatePairs = splitSurrogatePairs.map((e) => {
        e = '\\u{'.concat(e).concat('}')
        return e
    })
    let returnHolder = ''
    splitSurrogatePairs.map((e) => {
        returnHolder = returnHolder.concat(e)
    })
    return returnHolder
}

// This function prepares an static Array organized by categories and sorted on server start;
export async function loadEmojisOnDisk() {
    console.log('Loading emojis...')
    //TODO: Check if the files are already in memory and skip this step;

    var emojisJSON = JSON.parse(await Bun.file('./src/data/emojis.json').text())

    for (let i = 0; i < CategoriesDataArray.length; i++) {
        var category = CategoriesDataArray[i]
        var holder: any[] = emojisJSON
            .filter((e: any) => e.category == category.title && e.has_img_apple == true)
            .sort((a: any, b: any) => a.sort_order - b.sort_order)

        await Bun.write(
            `./assets/emojis/${category.normalizedName}.json`,
            JSON.stringify({ ...holder })
        )
        category.emojisOnCategory = holder
    }
    console.log('Emojis loaded. Starting server...')
}
