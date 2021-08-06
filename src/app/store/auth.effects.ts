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
}
