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
//   fname:string="";
//   lname:string="";
//   email:string="";
//   id:string="";
//   status:boolean=false;
//   FormHeader=""
//   editCustomer:boolean=false;
//   employees:Observable<employee[]>
// test:any[];
//   employeelist:employee[];
// mappedlist:employee[]=[];
// Dummyemployee:employee;
  //recipes :any =  {};
  //recipes: Recipes[];
  // recipes: Recipes = {
    addForm: FormGroup;
    title: string= "Create";
    editRecipe:boolean=false;
    recipeId: number;
    errorMessage: any;
    recipeName: string= "";
    ingredientId: number;
    ingredientName:string= "";
    step_no: number;
    instructions:string= "";
    recipes:Recipes;
    recipelist:Array<any>=[];
  
  // selectedRecipe: Recipes;
  constructor(private formBuilder: FormBuilder,private ar: ActivatedRoute, private router: Router, private recipeService: RecipesService, private toastr: ToastrService)
   { 
     if(this.ar.snapshot.params["id"]) {
       this.recipeId=this.ar.snapshot.params["id"];
     }
     this.addForm = this.formBuilder.group({
      recipeId: 0,
      recipeName: ['', Validators.required],
      ingredientName: ['', Validators.required],
      instructions: ['', Validators.required]
   })

  }
  //recipeId: number;

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(data => this.recipelist = data)  
    if (this.recipeId > 0) {  
        this.title = "Edit Recipe";  
        this.recipeService.getRecipesById(this.recipeId).subscribe(resp => this.addForm.setValue(resp), error => this.errorMessage = error);  
    }  
}
save() {  
  if (!this.addForm.valid) {  
      return;  
  }  
  if (this.title == "Create") {  
      this.recipeService.createRecipes(this.addForm.value).subscribe((data) => {  
          this.router.navigate(['list-recipes']);  
      }, error => this.errorMessage = error)  
  } else if (this.title == "edit-recipes") {  
      this.recipeService.updateRecipes(this.addForm.value).subscribe((data) => {  
          this.router.navigate(['list-recipes']);  
      }, error => this.errorMessage = error)  
  }  
 // console.log();
}  
cancel() {  
  this.router.navigate(['list-recipes']);  
}  
get RName() {  
  return this.addForm.get('recipeName');  
}  
get IName() {  
  return this.addForm.get('ingredientName');  
}  
get Ins() {  
  return this.addForm.get('instructions');  
}  

  
  // createRecipes(r: Recipes)  
  // {  
  //   alert("test")
  //   this.recipeService.createRecipes(this.recipes).subscribe(res=>  
  //     {  
  //       this.recipelist.push(res);  
  //       alert("Data added successfully !! ")  
  //       this.editRecipe=false;  
  //     })  
  //     ,err=>  
  //     {  
  //       console.log("Error Occured " + err);  
  //     }  
  // }  
  // onSubmit(formRecipe)  {

 
    
    // stop here if form is invalid
    // if (this.addArticleForm.invalid) {
    //   return;
    // }

    // if (this.addForm.valid) {

    //   this.loading = true;

    //   // console.log(formArticle);
    //   console.log(formRecipe);
      
    //    this.recipeService.createRecipes(formRecipe)
    //     .subscribe(
    //       (data: any) => {
    //         if (data === true) {
    //           this.router.navigate(['list-recipes']);
    //           this.toastr.success('Recipe successfully added!');
    //         } else {
    //           this.toastr.error('Unable to add recipe!');
    //           //this.loading = false;
    //         }
    //       },
    //       error => {
    //         // console.log(error)
    //         //this.alertService.error(error);
    //         this.toastr.error('Unable to add recipe!');
    //         //this.loading = false;
    //       });
       

    // }
//   onSubmit(formRecipe) {
//     alert("test")
//     this.recipeService.createRecipes(this.addForm.value)
//       .subscribe( data => {
//         this.router.navigate(['list-recipes']);
// });
  // onSubmit(recForm:NgForm) {
  //   alert("Successfull"+ JSON.stringify(this.recipes))
    // this.recipeService.createRecipes(recForm.value)
    // .subscribe(data => {
    //   this.router.navigate(['list-recipes']);
    // },
    // error => {
    //   alert(error);
    
    // });

 // }
}
