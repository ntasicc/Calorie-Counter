import { createAction, props } from '@ngrx/store';
import { User } from '../models/auth';

export const loginUser = createAction(
  'Login user',
  props<{ username: string; password: string }>()
);

export const loginUserSuccess = createAction(
  'Login user success',
  props<{ user: User }>()
);

export const logoutUser = createAction('Logout user');
