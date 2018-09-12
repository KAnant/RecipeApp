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
  recipes: Observable<Recipes[]>;  
    newrecipe:Observable<Recipes>;

  getRecipes(): Observable<Recipes[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    var recipes = this.http.get<Recipes[]>('http://localhost:8000/api/Recipes/', httpOptions);
    return recipes;
  }


  getRecipesById(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    var recipesById = this.http.get<Recipes>('http://localhost:8000/api/Recipes/'+id, httpOptions);
    return recipesById;
  }

  // createRecipes(rec: Recipes) {
  //   const httpOptions = {
  //     headers: new HttpHeaders ({
  //       'Content-Type': 'application/json',
  //     })
  //   };

  //   var addRecipe = this.http.post('http://localhost:8000/api/Recipes/',rec,httpOptions);
  //   return addRecipe;
  // }
  createRecipes(recipes:any)  
  {  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var data = {RecipeNmae:recipes.recipeName}  
  return this.http.post<Recipes>('http://localhost:8000/api/Recipes/', data,{headers})  
  }  

  updateRecipes(id: number) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
      })
    };

    var updateRecipe = this.http.put('http://localhost:8000/api/Recipes/'+id,httpOptions);
    return updateRecipe;
  }

  deleteRecipes(id: number) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
      })
    };

    var deleteRecipe = this.http.delete('http://localhost:8000/api/Recipes/'+id,httpOptions);
    return deleteRecipe;
  }

  errorHandler(error: Response) { 
    console.log(error); 
    return Observable.throw(error); 
}  
 
}
