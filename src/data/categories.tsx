export interface ICategory {
    readonly title: string,
    readonly normalizedName: string,
    readonly iconPath: string,
    emojisOnCategory: any[]
}

export var CategoriesDataArray: ICategory[] = [
    {
        title: "Smileys & Emotion",
        normalizedName: "smileys_emotion",
        iconPath: "./assets/emojis/smileys_emotion.svg",
        emojisOnCategory: []
    },
    {
        title: "People & Body",
        normalizedName: "people_body",
        iconPath: "./assets/emojis/people_body.svg",
        emojisOnCategory: []
    },
    {
        title: "Animals & Nature",
        normalizedName: "animals_nature",
        iconPath: "./assets/emojis/animals_nature.svg",
        emojisOnCategory: []
    },
    {
        title: "Food & Drink",
        normalizedName: "food_drink",
        iconPath: "./assets/emojis/food_drink.svg",
        emojisOnCategory: []
    },
    {
        title: "Travel & Places",
        normalizedName: "travel_places",
        iconPath: "./assets/emojis/travel_places.svg",
        emojisOnCategory: []
    },
    {
        title: "Activities",
        normalizedName: "activities",
        iconPath: "./assets/emojis/activities.svg",
        emojisOnCategory: []
    },
    {
        title: "Objects",
        normalizedName: "objects",
        iconPath: "./assets/emojis/objects.svg",
        emojisOnCategory: []
    },
    {
        title: "Symbols",
        normalizedName: "symbols",
        iconPath: "./assets/emojis/symbols.svg",
        emojisOnCategory: []
    },
    {
        title: "Flags",
        normalizedName: "flags",
        iconPath: "./assets/emojis/flags.svg",
        emojisOnCategory: []
    },
];
