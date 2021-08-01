import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bookmark } from 'src/app/models/bookmark';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  @Output() selectRecipe = new EventEmitter<Recipe>();
  @Output() bookmarkRecipe = new EventEmitter<Bookmark>();
  constructor() {}

  ngOnInit(): void {}

  showDetailsForRecipe() {
    if (this.recipe) {
      this.selectRecipe.emit(this.recipe);
    }
  }

  changeBookmarkRecipe(newValue: string) {
    if (this.recipe) {
      let id = this.recipe.id;
      let value = newValue;
      this.bookmarkRecipe.emit({ id: id, newValue: value });
    }
  }
}
