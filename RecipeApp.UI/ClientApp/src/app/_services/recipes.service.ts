import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Recipes} from '../_models/recipes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }
  selectedRecipe: Recipes[];

  getRecipes(): Observable<Recipes[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    var recipes = this.http.get<Recipes[]>('https://localhost:44335/api/recipes/getRecipes', httpOptions);
    return recipes;
  }


  getRecipesById(id: number) {
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
    return addRecipe;
  }

  updateRecipes(id: number) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
      })
    };

    var updateRecipe = this.http.put('https://localhost:44335/api/recipes/updateRecipes'+id,httpOptions);
    return updateRecipe;
  }

  deleteRecipes(id: number) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
      })
    };

    var deleteRecipe = this.http.delete('https://localhost:44335/api/recipes/deleteRecipes'+id,httpOptions);
    return deleteRecipe;
  }

  errorHandler(error: Response) { 
    console.log(error); 
    return Observable.throw(error); 
}  
 
}
