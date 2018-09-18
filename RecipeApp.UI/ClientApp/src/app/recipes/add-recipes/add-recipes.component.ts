import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../_models/recipes.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../_services/recipes.service';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.scss']
})
export class AddRecipesComponent implements OnInit {
  public recipe: Recipes;
test;
  Recipe: Recipes = new Recipes();
  
  // selectedRecipe: Recipes;
  constructor(private formBuilder: FormBuilder,private ar: ActivatedRoute, private router: Router, private recipeService: RecipesService, private toastr: ToastrService)
   { 
     

  }

  ngOnInit() {
  
  this.recipeService.getRecipes().subscribe((data=>{this.recipe=data
    console.log(data)}));
  }

 onAdd(Recipe){
  if(Recipe.RecipeId==null)
  {
    console.log(Recipe);
    this.recipeService.createRecipes(Recipe).subscribe((data: any)=>{
      this.test = data,
      console.log(this.test);
      this.toastr.success("Recipe added successfully");
      this.router.navigate(['list-recipes']);
    });
  }
  else{
  console.log(Recipe);
 this.recipeService.updateRecipes(Recipe).subscribe((data: any)=>{},()=>{this.toastr.error("Recipe Edited")});
  }
}
}
