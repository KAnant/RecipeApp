import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Recipes} from '../_models/recipes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }


  getRecipes(): Observable<Recipes[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    var recipes = this.http.get<Recipes[]>('https://localhost:44335/api/recipes/getRecipes', httpOptions);
    return recipes;
  }


  getRecipesById(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    var recipesById = this.http.get<Recipes>('https://localhost:44335/api/recipes/getRecipesById/'+id, httpOptions);
    return recipesById;
  }

  createRecipes(rec: Recipes) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
      })
    };

    var addRecipe = this.http.post('https://localhost:44335/api/recipes/createRecipes',rec,httpOptions);
  }

 
}
