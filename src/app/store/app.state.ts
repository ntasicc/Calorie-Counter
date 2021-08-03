import { AuthState } from './auth.reducer';
import { IngredientState } from './ingredient.reducer';
import { RecipeState } from './recipe.reducer';

export interface AppState {
  recipes: RecipeState;
  ingredients: IngredientState;
  user: AuthState;
}
