import { createAction, props } from '@ngrx/store';
import { User } from '../models/auth';
import { Recipe } from '../models/recipe';

export const loginUser = createAction(
  'Login user',
  props<{ username: string; password: string }>()
);

export const loginUserSuccess = createAction(
  'Login user success',
  props<{ user: User }>()
);

export const logoutUser = createAction('Logout user', props<{ user: User }>());

export const updateUserInLocalStorage = createAction(
  'Update user in local storage',
  props<{ user: User }>()
);

export const eatThisMeal = createAction(
  'Eat this meal',
  props<{
    recipe: Recipe;
    user: User;
  }>()
);
