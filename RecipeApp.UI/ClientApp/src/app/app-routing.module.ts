import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AddRecipesComponent} from './recipes/add-recipes/add-recipes.component';
import {EditRecipesComponent} from './recipes/edit-recipes/edit-recipes.component';
import {ListRecipesComponent} from './recipes/list-recipes/list-recipes.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {path: 'recipes', component: RecipesComponent},
  {path: 'add-recipes', component: AddRecipesComponent},
  {path: 'edit-recipes', component: EditRecipesComponent},
  {path: 'list-recipes', component: ListRecipesComponent},
  {path: '',component: RecipesComponent}
];

export const routing= RouterModule.forRoot(routes);

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
