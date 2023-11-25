import { CategoriesDataArray, ICategory } from '../../../data/categories';

export function EmojiPicker() {

    let emojisOnCategoryArray: any[] = (CategoriesDataArray
        .find((elem) => elem.normalizedName == 'smileys_emotion') as ICategory).emojisOnCategory;

    return (
        <div class="bg-gray-800 max-h-96" id="emoji_root">
            <div id="emoji_search"></div>
            <div class="flex w-full justify-around p-3" id="emoji_categories">
                {CategoriesDataArray.map((e: ICategory) => {
                    return (
                        <button
                            hx-get={`/single-chat/emoji-picker/change-category?selected=${e.normalizedName}`}
                            hx-swap="innerHTML"
                            hx-target="#emoji_list"
                            class="w-1/12"
                            onclick={`console.log('aaaa');`}
                            title={e.title}
                        >
                            <img class="fill-white w-full" src={e.iconPath} />
                        </button>
                    );
                })}
            </div>
            <div id="emoji_list" class="p-3 grid gap-2 items-center justify-center grid-cols-6 max-h-96 overflow-y-scroll">
                {
                    emojisOnCategoryArray.map((elem) => {
                        return (
                            <button
                                class={`place-self-center bg-[position:${-(elem.sheet_x * (32 + 2)) + 1}px_-${(elem.sheet_y * (32 + 2)) + 1}px] w-[34px] h-[34px]`}
                                onclick={`console.log('aaaa');`}
                                style="background-image:url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/sheets-clean/32.png)"
                            />);
                    })
                }
            </div>
        </div>
    )
}

// This function prepares an static Array organized by categories and sorted on server start;
export async function loadEmojisOnDisk() {
    console.log("Loading emojis...");
    //TODO: Check if the files are already in memory and skip this step;

    var emojisJSON = JSON.parse(await Bun.file('./src/data/emojis.json').text());

    for (let i = 0; i < CategoriesDataArray.length; i++) {
        var category = CategoriesDataArray[i];
        var holder: any[] = emojisJSON
            .filter((e: any) => e.category == category.title && e.has_img_apple == true)
            .sort((a: any, b: any) => a.sort_order - b.sort_order);

        await Bun.write(`./assets/emojis/${category.normalizedName}.json`, JSON.stringify({ ...holder }));
        category.emojisOnCategory = holder;
    }
    console.log("Emojis loaded. Starting server...");
}

