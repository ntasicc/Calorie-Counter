import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IngredientService } from '../services/ingredient.service';
import * as IngredientActions from './ingredient.actions';

@Injectable()
export class IngredientEffect {
  constructor(
    private ingredientService: IngredientService,
    private actions$: Actions
  ) {}

  loadSelectedIngredients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IngredientActions.loadIngredientsOfSpecificRecipe),
      mergeMap((action) =>
        this.ingredientService
          .loadIngridientsOfSpecificRecipe(action.recipeID)
          .pipe(
            map((ingredients) =>
              IngredientActions.loadIngredientsSuccess({ ingredients })
            ),
            catchError(() => of({ type: 'load ingredients error' }))
          )
      )
    )
  );
}
