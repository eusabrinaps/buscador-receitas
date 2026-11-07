import type { Recipe } from "../types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>You have {recipe.usedIngredientCount} ingredient(s)</p>
      <p>Missing {recipe.missedIngredientCount}</p>
    </article>
  );
}