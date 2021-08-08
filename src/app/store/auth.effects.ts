import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { User } from '../models/auth';
import { AuthService } from '../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthtEffect {
  constructor(private AuthService: AuthService, private actions$: Actions) {}

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginUser),
      mergeMap((action) =>
        this.AuthService.login(action.username, action.password).pipe(
          map((user) => AuthActions.loginUserSuccess({ user })),
          catchError(() => of({ type: 'login user error' }))
        )
      )
    )
  );

  removeFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logoutUser),
        mergeMap((action) => {
          localStorage.removeItem('user');
          return this.AuthService.updateUser(action.user).pipe(
            catchError(() => of({ type: 'update user error' }))
          );
        })
      ),
    { dispatch: false }
  );
  addToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginUserSuccess),
        tap((action) =>
          localStorage.setItem('user', JSON.stringify(action.user))
        )
      ),
    { dispatch: false }
  );
  userAteOneMeal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.eatThisMeal),
        mergeMap((action) => {
          let userUpdated = <User>{ ...action.user };
          userUpdated.allTimeCalories += action.recipe.calories;
          userUpdated.allTimeCarbs += action.recipe.carbs;
          userUpdated.allTimeFat += action.recipe.fat;
          userUpdated.allTimeProtein += action.recipe.protein;
          return this.AuthService.userAteOneMeal(userUpdated).pipe(
            map((user) => {
              console.log(user);
              AuthActions.updateUserInLocalStorage({ user });
              localStorage.setItem('user', JSON.stringify(user));
            }),
            catchError(() => of({ type: 'update user error' }))
          );
        })
      ),
    { dispatch: false }
  );
}
