import { createSelector } from '@ngrx/store';
import { User } from '../models/auth';
import { Recipe } from '../models/recipe';
import { AppState } from './app.state';
import { RecipeState } from './recipe.reducer';

export const selectRecipeFeature = createSelector(
  (state: AppState) => state.recipes,
  (recipes) => recipes
);

export const selectAllRecipes = createSelector(
  selectRecipeFeature,
  (state: RecipeState) =>
    Object.values(state.entities)
      .filter((recipe) => recipe != null)
      .map((recipe) => <Recipe>recipe)
);

export const selectAllRecipesAsDict = createSelector(
  selectRecipeFeature,
  (state: RecipeState) => state.entities
);

export const selectIDOfOneRecipe = createSelector(
  selectRecipeFeature,
  (state: RecipeState) => state.selectedRecipeID
);

export const selectOneRecipeBasedOnID = createSelector(
  selectAllRecipes,
  selectIDOfOneRecipe,
  (recipes, recipeID) => recipes[recipeID] ?? null
);

export const selectBookmarkedRecipes = createSelector(
  selectAllRecipes,
  (recipes) => {
    let user = <User>JSON.parse(<string>localStorage.getItem('user'));
    if (user)
      return recipes.filter(
        (recipe) => user.bookmarked.indexOf(recipe.id) !== -1
      );
    return [];
  }
);
