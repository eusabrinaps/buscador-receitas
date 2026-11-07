import type { Recipe } from "../types/recipe";
import { RecipeCard } from "./RecipeCard";

type RecipeListProps = {
  recipes: Recipe[];
};

export function RecipeListCard({ recipes }: RecipeListProps) {
  return (
    <section className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}