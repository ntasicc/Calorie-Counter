import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Ingredient } from '../models/ingredient';
import * as IngredientActions from './ingredient.actions';

export interface IngredientState extends EntityState<Ingredient> {}

const adapter = createEntityAdapter<Ingredient>();

const initialState: IngredientState = adapter.getInitialState({});

export const ingredientReducer = createReducer(
  initialState,
  on(IngredientActions.loadIngredientsSuccess, (state, { ingredients }) => {
    return adapter.setAll(ingredients, state);
  })
);
