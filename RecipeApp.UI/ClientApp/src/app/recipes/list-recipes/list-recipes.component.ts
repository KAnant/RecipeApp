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

  recipes: Recipes[];
  //public recipes: any;

  constructor(private router: Router, private recipeService: RecipesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe(data => {
        this.recipes = data;
      });
  }


  // btnClick = function () {
  //   this.router.navigateByUrl('/edit-recipes');
  // };

  editRecipes(rec: Recipes) {
    //this.recipeService.selectedRecipe= Object.assign({},rec) ;;
  }

  deleteRecipes(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.recipeService.deleteRecipes(id)
        .subscribe(data => {
          this.recipeService.getRecipes();
          this.toastr.success("Deleted Successfully");
        })
    }
  }
}
