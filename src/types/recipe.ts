export type Recipe = {
    "id": number,
    "title": string,
    "image": string,
    "imageType": string,
    "usedIngredientCount": number,
    "missedIngredientCount": number,
    "missedIngredients": Ingredient[]
    "usedIngredients": Ingredient[],
    "unusedIngredients": Ingredient[],
    "likes": number
}

export type Ingredient = {
    "id": number,
    "amount": number,
    "unit": string,
    "unitLong": string,
    "unitShort": string,
    "aisle": string,
    "name": string,
    "original": string,
    "originalName": string,
    "meta": string[],
    "image": string
}