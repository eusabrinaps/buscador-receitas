import { useState, useEffect } from "react";
import { findByIngredients } from "./api/spoonacular";
import { RecipeCard } from "./components/RecipeCard";
import type { Recipe } from "./types/recipe";

export default function App() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await findByIngredients("steak");
        setRecipe(dados[0]);
      } catch (error) {
        console.error(error);
      }
    }
    carregar();
  }, []);

  return (
    <main>
      <h1>Buscador de Receitas</h1>
      {recipe && <RecipeCard recipe={recipe} />}
    </main>
  );
}