import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipes } from '../_models/recipes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }
  selectedRecipe: Recipes[];
  recipes: Observable<Recipes[]>;
  //newrecipe: Observable<Recipes>;

  getRecipes(){
    
  return this.http.get<Recipes>('http://localhost:8000/api/Recipes');
  
  }


  getRecipesById(id: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    var recipesById = this.http.get<Recipes>('http://localhost:8000/api/Recipes/GetRecipesById/' + id, httpOptions);
    return recipesById;
  }

  createRecipes(rec): Observable<Recipes[]> {
    return this.http.post<Recipes[]>('http://localhost:8000/api/Recipes', rec);

  }


  // updateRecipes(id: string) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     })
  //   };

  //   var updateRecipe = this.http.put<Recipes>('http://localhost:9000/api/Recipes/updateRecipes/' + id, httpOptions);
  //   return updateRecipe;
  // }

  updateRecipes(recipe: Recipes) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    debugger
    return this.http.put(`http://localhost:8000/api/Recipes/updateRecipes`, recipe, httpOptions);
  }

  deleteRecipes(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    var deleteRecipe = this.http.delete('http://localhost:8000/api/Recipes/' + id, httpOptions);
    return deleteRecipe;
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }

}
