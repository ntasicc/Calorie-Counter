import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { ProfileComponent } from './components/profile/profile.component';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'ingredients',
    component: IngredientListComponent,
  },
  {
    path: 'listRecipes',
    component: RecipeListComponent,
  },
  {
    path: 'mylist',
    component: RecipeListComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
