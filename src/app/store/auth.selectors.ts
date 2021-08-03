import { createSelector } from '@ngrx/store';
import { User } from '../models/auth';
import { AppState } from './app.state';
import { AuthState } from './auth.reducer';

export const selectUserFeature = createSelector(
  (state: AppState) => state.user,
  (user) => user
);

export const selectIsLoggedIn = createSelector(
  selectUserFeature,
  (state: AuthState) => state.user.id > -1
);

export const selectUser = createSelector(
  selectUserFeature,
  (state: AuthState) => ({
    ...state.user,
  })
);
