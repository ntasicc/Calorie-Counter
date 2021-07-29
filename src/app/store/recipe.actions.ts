import { createAction, props } from '@ngrx/store';
import { Recipe } from '../models/recipe';

export const loadAllRecipes = createAction('Load All Recipes');

export const loadAllRecipesSuccess = createAction(
  'Load All Recipe Success',
  props<{
    recipes: Recipe[];
  }>()
);

export const selectRecipe = createAction(
  'Select Recipe',
  props<{
    recipeID: number;
  }>()
);
