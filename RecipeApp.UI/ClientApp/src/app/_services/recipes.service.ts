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
}
