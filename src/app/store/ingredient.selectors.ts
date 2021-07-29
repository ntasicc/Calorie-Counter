import { createSelector } from '@ngrx/store';
import { Ingredient } from '../models/ingredient';
import { AppState } from './app.state';
import { IngredientState } from './ingredient.reducer';

export const selectIngredientsFeature = createSelector(
  (state: AppState) => state.ingredients,
  (ingredients) => ingredients
);

export const selectAllIngredients = createSelector(
  selectIngredientsFeature,
  (state: IngredientState) => {
    return Object.values(state.entities)
      .filter((ingredient) => ingredient != null)
      .map((ingredient) => <Ingredient>ingredient);
  }
);
