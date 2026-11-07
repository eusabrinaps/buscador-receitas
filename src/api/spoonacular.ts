import type { Recipe } from "../types/recipe";

const BASE_URL = "https://api.spoonacular.com";
const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

export async function findByIngredients(
    ingredients: string, 
    number: number = 10
): Promise<Recipe[]> {
    const params = new URLSearchParams({
        ingredients: ingredients,
        number: number.toString(),
        apiKey: API_KEY,
    });
    const response = await fetch(`${BASE_URL}/recipes/findByIngredients?${params}`);

    if (!response.ok) {
        throw new Error(`Error fetching recipes: ${response.status}`);
    }

    return response.json();
}