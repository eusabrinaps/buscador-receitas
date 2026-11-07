import { useState } from "react";
import { findByIngredients } from "./api/spoonacular";
import { SearchCard } from "./components/SearchCard";
import { RecipeListCard } from "./components/RecipeListCard";
import type { Recipe } from "./types/recipe";

type Status = "idle" | "loading" | "success" | "error";

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSearch(query: string) {  
    setStatus("loading");
    
    try {
      const dados = await findByIngredients(query);
      setRecipes(dados);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <main>
      <h1>Buscador de Receitas</h1>
      <SearchCard onSearch={handleSearch} />

      {status === "loading" && <p>Carregando...</p>}
      {status === "error" && <p>Algo deu errado. Tente novamente.</p>}
      {status === "success" && recipes.length === 0 && (
        <p>Nenhuma receita encontrada.</p>
      )}

      <RecipeListCard recipes={recipes} />
    </main>
  );
}