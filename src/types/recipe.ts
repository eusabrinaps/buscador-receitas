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

export type Measure = {
  amount: number;
  unitShort: string;
  unitLong: string;
};

export type ExtendedIngredient = {
  id: number;
  aisle: string;
  image: string; // só o nome do arquivo, ex: "butter-sliced.jpg"
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: Measure;
    metric: Measure;
  };
};

export type Step = {
  number: number;
  step: string;
};

export type AnalyzedInstruction = {
  name: string;
  steps: Step[];
};

export type RecipeDetail = {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  summary: string; // vem com HTML
  extendedIngredients: ExtendedIngredient[];
  analyzedInstructions: AnalyzedInstruction[];
};