import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.css'],
})
export class IngredientCardComponent implements OnInit {
  @Input() ingredient: Ingredient | undefined;
  constructor() {}

  ngOnInit(): void {}
}
