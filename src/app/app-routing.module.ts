import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeListComponent,
  },
  {
    path: 'ingredients',
    component: IngredientListComponent,
  },
  {
    path: 'mylist',
    component: RecipeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
