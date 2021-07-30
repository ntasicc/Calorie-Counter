import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  @Output() selectRecipe = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}

  showDetailsForRecipe() {
    if (this.recipe) {
      this.selectRecipe.emit(this.recipe);
    }
  }
}
