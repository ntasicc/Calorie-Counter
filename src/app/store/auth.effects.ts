import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
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
}
