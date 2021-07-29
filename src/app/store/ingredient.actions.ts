import { createAction, props } from '@ngrx/store';
import { Ingredient } from '../models/ingredient';

export const loadIngredientsSuccess = createAction(
  'Load all ingredients success',
  props<{
    ingredients: Ingredient[];
  }>()
);

export const loadIngredients = createAction('Load all ingredients');

export const loadIngredientsOfSpecificRecipe = createAction(
  'Load ingredients of specific recipe',
  props<{
    recipeID: number;
  }>()
);
