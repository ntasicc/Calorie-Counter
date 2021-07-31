import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { AppState } from 'src/app/store/app.state';
import * as IngredientAction from '../../store/ingredient.actions';
import { selectAllIngredients } from '../../store/ingredient.selectors';
import { selectOneRecipeBasedOnID } from '../../store/recipe.selector';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
})
export class IngredientListComponent implements OnInit {
  selectedRecipe: Recipe | undefined;
  ingredientsForRecipe: Observable<Ingredient[]> = of([]);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectOneRecipeBasedOnID).subscribe((recipe) => {
      this.selectedRecipe = recipe;
    });
    if (this.selectedRecipe) {
      this.store.dispatch(
        IngredientAction.loadIngredientsOfSpecificRecipe({
          recipeID: this.selectedRecipe?.id,
        })
      );
    }
    this.ingredientsForRecipe = this.store.select(selectAllIngredients);
  }
}
