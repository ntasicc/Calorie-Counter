import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/auth';
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
  bookmarked: string = '';
  constructor() {}

  ngOnInit(): void {
    if (this.recipe) {
      let user = <User>JSON.parse(<string>localStorage.getItem('user'));
      if (user) {
        if (user.bookmarked.indexOf(this.recipe.id) !== -1)
          this.bookmarked = 'yes';
        else this.bookmarked = 'no';
      }
    }
  }

  showDetailsForRecipe() {
    if (this.recipe) {
      this.selectRecipe.emit(this.recipe);
    }
  }

  changeBookmarkRecipe(newValue: string) {
    if (this.recipe) {
      let id = this.recipe.id;
      let value = newValue;
      this.bookmarkRecipe.emit({ recipe: this.recipe, newValue: value });
      this.bookmarked = newValue;
    }
  }
}
