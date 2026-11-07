import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipeById } from "../api/spoonacular";
import type { RecipeDetail } from "../types/recipe";

type Status = "loading" | "success" | "error";

export function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<RecipeDetail | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!id) return;

    async function carregar() {
      setStatus("loading");
      try {
        const dados = await getRecipeById(id!);
        setRecipe(dados);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    }

    carregar();
  }, [id]);

  if (status === "loading") return <p className="status">Carregando...</p>;
  if (status === "error" || !recipe) {
    return <p className="status status--error">Não foi possível carregar a receita.</p>;
  }

  const steps = recipe.analyzedInstructions[0]?.steps ?? [];

  return (
    <main className="detail">
      <Link to="/" className="back-link">← Voltar</Link>

      <h1>{recipe.title}</h1>
      <img className="detail__image" src={recipe.image} alt={recipe.title} />

      <p className="detail__meta">
        ⏱ {recipe.readyInMinutes} min · 🍽 {recipe.servings} porções
      </p>

      <h2>Ingredientes</h2>
      <ul className="ingredients">
        {recipe.extendedIngredients.map((ing, index) => (
          <li key={`${ing.id}-${index}`}>{ing.original}</li>
        ))}
      </ul>

      <h2>Modo de preparo</h2>
      {steps.length === 0 ? (
        <p>Esta receita não tem instruções passo a passo.</p>
      ) : (
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.number}>{s.step}</li>
          ))}
        </ol>
      )}
    </main>
  );
}