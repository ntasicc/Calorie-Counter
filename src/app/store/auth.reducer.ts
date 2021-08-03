import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from '../models/auth';
import * as AuthActions from './auth.actions';

export interface AuthState extends EntityState<User> {
  user: User;
}

const adapter = createEntityAdapter<User>();

const initialState: AuthState = adapter.getInitialState({
  user: {
    id: -1,
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    allTimeCalories: '',
    allTimeCarbs: '',
    allTimeFat: '',
    allTimeProtein: '',
  },
});

export const AuthReducer = createReducer(
  initialState,
  on(AuthActions.loginUserSuccess, (state, { user }) =>
    adapter.setOne(user, state)
  ),
  on(AuthActions.logoutUser, (state) => ({
    ...state,
    user: {
      id: -1,
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      allTimeCalories: '',
      allTimeCarbs: '',
      allTimeFat: '',
      allTimeProtein: '',
    },
  }))
);
