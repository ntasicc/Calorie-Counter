import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from '../models/auth';
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
  }))
  // on(RecipeActions.changeBookmark, (state, { recipe, newValue }) => {
  //   let user = <User>JSON.parse(<string>localStorage.getItem('user'));
  //   if (newValue === 'yes') user.bookmarked.push(recipe.id);
  //   else {
  //     let index = user.bookmarked.indexOf(recipe.id);
  //     user.bookmarked.splice(index, 1);
  //     console.log('NO');
  //   }
  //   localStorage.setItem('user', JSON.stringify(user));
  //   // recipe.bookmark = newValue;
  //   // return adapter.setOne(recipe, state);
  //   return state;
  // })
  // on(RecipeActions.changeBookmarkSuccess, (state, { recipe }) =>
  //   adapter.setOne(recipe, state)
  // )
);
