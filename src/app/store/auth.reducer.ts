import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from '../models/auth';
import * as AuthActions from './auth.actions';
import * as RecipeActions from './recipe.actions';

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
    bookmarked: [],
    allTimeCalories: 0,
    allTimeCarbs: 0,
    allTimeFat: 0,
    allTimeProtein: 0,
  },
});

export const AuthReducer = createReducer(
  initialState,
  on(AuthActions.loginUserSuccess, (state, { user }) =>
    adapter.setOne(user, state)
  ),
  on(AuthActions.updateUserInLocalStorage, (state, { user }) => {
    console.log('REDUCER');
    localStorage.setItem('user', JSON.stringify(user));
    return state;
  }),
  on(RecipeActions.changeBookmark, (state, { recipe, newValue }) => {
    let user = <User>JSON.parse(<string>localStorage.getItem('user'));
    if (newValue === 'yes') user.bookmarked.push(recipe.id);
    else {
      let index = user.bookmarked.indexOf(recipe.id);
      user.bookmarked.splice(index, 1);
    }
    localStorage.setItem('user', JSON.stringify(user));
    // recipe.bookmark = newValue;
    // return adapter.setOne(recipe, state);
    return adapter.setOne(user, state);
  }),
  on(AuthActions.logoutUser, (state) => ({
    ...state,
    user: {
      id: -1,
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      bookmarked: [],
      allTimeCalories: 0,
      allTimeCarbs: 0,
      allTimeFat: 0,
      allTimeProtein: 0,
    },
  }))
);
