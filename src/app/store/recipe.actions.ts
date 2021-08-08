import { createAction, props } from '@ngrx/store';
import { User } from '../models/auth';
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

export const changeBookmark = createAction(
  'Change bookmark',
  props<{
    recipe: Recipe;
    newValue: string;
  }>()
);

export const changeBookmarkSuccess = createAction(
  'Change bookmark success',
  props<{ recipe: Recipe }>()
);
