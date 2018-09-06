import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AddRecipesComponent } from './recipes/add-recipes/add-recipes.component';
import { EditRecipesComponent } from './recipes/edit-recipes/edit-recipes.component';
import { ListRecipesComponent } from './recipes/list-recipes/list-recipes.component';
import {routing} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    AddRecipesComponent,
    EditRecipesComponent,
    ListRecipesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
