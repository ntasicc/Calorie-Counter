import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { AppState } from 'src/app/store/app.state';
import * as RecipeActions from '../../store/recipe.actions';
import { Router } from '@angular/router';
import * as IngredientActions from '../../store/ingredient.actions';
import {
  selectAllRecipes,
  selectOneRecipeBasedOnID,
} from '../../store/recipe.selector';
import { selectAllIngredients } from 'src/app/store/ingredient.selectors';
import { Bookmark } from 'src/app/models/bookmark';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Observable<readonly Recipe[]> = of([]);
  selectedRecipe: Observable<Recipe> = of();

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(RecipeActions.loadAllRecipes());
    this.recipes = this.store.select(selectAllRecipes);
  }

  selectSpecificRecipe(recipe: Recipe) {
    if (recipe) {
      this.store.dispatch(RecipeActions.selectRecipe({ recipeID: recipe.id }));
      this.router.navigate(['/ingredients']);
    }
  }

  changeBookmarkRecipe(bookmark: Bookmark) {
    this.store.dispatch(
      RecipeActions.changeBookmark({
        id: bookmark.id,
        newValue: bookmark.newValue,
      })
    );
  }
}
