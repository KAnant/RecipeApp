import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AddRecipesComponent } from './recipes/add-recipes/add-recipes.component';
import { EditRecipesComponent } from './recipes/edit-recipes/edit-recipes.component';
import { ListRecipesComponent } from './recipes/list-recipes/list-recipes.component';
import {routing} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './widgets/header/header.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { NavComponent } from './home/nav/nav.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    AddRecipesComponent,
    EditRecipesComponent,
    ListRecipesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
