import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RecipesService } from '../../_services/recipes.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipes } from '../../_models/recipes.model';

@Component({
  selector: 'app-edit-recipes',
  templateUrl: './edit-recipes.component.html',
  styleUrls: ['./edit-recipes.component.scss']
})
export class EditRecipesComponent implements OnInit {
  recipeForm: FormGroup;
  recipeId: string;
  errorMessage: any;
  public recipes: Recipes;
  test;
  //recipes: Recipes = new Recipes();

  constructor(private formBuilder: FormBuilder, private ar: ActivatedRoute, private recipeService: RecipesService, private toastr: ToastrService, private router: Router) {
    this.recipeForm = this.formBuilder.group({
      recipeId: [''],
      recipeName: [''],
      ingredients: [''],
      steps: ['']
    })
  }



  ngOnInit() {
    this.recipeService.getRecipesById(localStorage.getItem("RecipeId")).subscribe((data => {
      this.recipeForm.setValue(data) ,
      console.log(data);
      // this.recipeService.getRecipesById(this.recipeId)
      //   .subscribe(resp => this.recipeForm.setValue(resp)
      //     , error => this.errorMessage = error);
    }));

  }
  save(value) {

    // if (!this.recipeForm.valid) {
    //   return;
    // }

    // console.log(value.recipeId);


    // this.recipeService.updateRecipes(value.recipeId)
    //   .subscribe((data) => {
    //     this.router.navigate(['list-recipes']);
    //   }, error => this.errorMessage = error)

    this.recipeService.updateRecipes(value)
    .subscribe((data) => {
      this.router.navigate(['list-recipes']);
    }, error => this.errorMessage = error)

  }

  cancel() {
    this.router.navigate(['list-recipes']);
  }
  // onEdit(Recipe){
  //   if(Recipe.RecipeId==null)
  //   {
  //     console.log(Recipe);
  //     this.recipeService.updateRecipes(Recipe).subscribe((data: any)=>{
  //       this.test = data,
  //       console.log(this.test);
  //       this.toastr.success("Recipe updated successfully");
  //       //this.router.navigate('list-recipes');
  //     });
  //   }
  //   else{
  //   console.log(Recipe);
  //  this.toastr.error("Recipe not updated");
  //   }
  // }

}
