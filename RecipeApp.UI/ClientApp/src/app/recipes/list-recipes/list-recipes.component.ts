import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../_models/recipes.model';
import { RecipesService } from '../../_services/recipes.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})
export class ListRecipesComponent implements OnInit {

  public recipes: Recipes;
  //public recipes: any;

  constructor(private router: Router, private recipeService: RecipesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getRecipes();
  }
  public getRecipes() {
    this.recipeService.getRecipes().subscribe((data => {
      this.recipes = data;
      console.log(this.recipes);
    }));
  }
  deleteRecipes(id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.recipeService.deleteRecipes(id)
        .subscribe(data => {
          this.recipeService.getRecipes();
          this.toastr.success("Deleted Successfully");
          this.ngOnInit();
          console.log(data);
          
        })
    }
  }
  editRecipes(id: string) {
    // this.recipeService.updateRecipes(id)
    // .subscribe(data => {
    //   this.recipeService.getRecipes();
    // })
    localStorage.removeItem("RecipeId")
    localStorage.setItem("RecipeId", id);
    this.router.navigate(['edit-recipes']);
  }
}
