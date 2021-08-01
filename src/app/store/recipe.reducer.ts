import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Recipe } from '../models/recipe';
import * as RecipeActions from './recipe.actions';

export interface RecipeState extends EntityState<Recipe> {
  selectedRecipeID: number;
}

const adapter = createEntityAdapter<Recipe>();

const initialState: RecipeState = adapter.getInitialState({
  selectedRecipeID: -1,
});

export const recipeReducer = createReducer(
  initialState,
  on(RecipeActions.loadAllRecipesSuccess, (state, { recipes }) =>
    adapter.setAll(recipes, state)
  ),
  on(RecipeActions.selectRecipe, (state, { recipeID }) => ({
    ...state,
    selectedRecipeID: recipeID,
  })),
  on(RecipeActions.changeBookmarkSuccess, (state, { recipe }) =>
    adapter.setOne(recipe, state)
  )
);
