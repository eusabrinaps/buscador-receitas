import type { Recipe } from "../types/recipe";
import { Link } from "react-router-dom";

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
  <Link to={`/recipe/${recipe.id}`} className="recipe-card">
    <div className="recipe-card__image">
      <img src={recipe.image} alt={recipe.title} loading="lazy" />
    </div>
    <div className="recipe-card__body">
      <h3>{recipe.title}</h3>
      <div className="badges">
        <span className="badge badge--have">
          ✓ {recipe.usedIngredientCount} que você tem
        </span>
        <span className="badge badge--missing">
          + {recipe.missedIngredientCount} faltando
        </span>
      </div>
    </div>
  </Link>
);
}