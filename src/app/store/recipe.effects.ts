import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { User } from '../models/auth';
import { RecipeService } from '../services/recipe.service';
import * as RecipeActions from './recipe.actions';

@Injectable()
export class RecipeEffect {
  constructor(
    private recipeService: RecipeService,
    private actions$: Actions
  ) {}

  loadRecipeEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.loadAllRecipes),
      mergeMap(() =>
        this.recipeService.getAllrecipes().pipe(
          map((recipes) => RecipeActions.loadAllRecipesSuccess({ recipes })),
          catchError(() => of({ type: 'load recipe error' }))
        )
      )
    )
  );

  /*changeBookmarkEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.changeBookmark),
      mergeMap((action) => {
        let user = <User>JSON.parse(<string>localStorage.getItem('user'));
        if (action.newValue === 'yes') user.bookmarked.push(action.id);
        else {
          let index = user.bookmarked.indexOf(action.id);
          user.bookmarked.splice(index, 1);
          console.log('NO');
        }
        localStorage.setItem('user', JSON.stringify(user));
        return this.recipeService
          .bookmarkRecipe(action.id, action.newValue)
          .pipe(
            map((recipe) => RecipeActions.changeBookmarkSuccess({ recipe })),
            catchError(() => of({ type: 'change bookmark error' }))
          );
      })
    )
  );
  */
}
