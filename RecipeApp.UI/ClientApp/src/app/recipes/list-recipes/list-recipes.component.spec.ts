import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { ListRecipesComponent } from './list-recipes.component';
import { DebugElement } from '@angular/core';
import { Recipes } from '../../_models/recipes.model';
import { RecipesService } from '../../_services/recipes.service';
import { HttpClientModule } from '@angular/common/http';
import { element } from 'protractor';

describe('ListRecipesComponent', () => {
  let component: ListRecipesComponent;
  let fixture: ComponentFixture<ListRecipesComponent>;
  let de: DebugElement;
  let element: HTMLElement;
  let mockRecipes: Recipes[];
  let recipesServices: RecipesService;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecipesComponent ],
      imports:[HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecipesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.container'));
    element = de.nativeElement;
    recipesServices = fixture.debugElement.injector.get(RecipesService);
    mockRecipes = [{recipeId:"5fb2f91a-b8e5-459a-a3c7-2f4479f73a90", recipeName:"cc", ingredients:"cvcv", steps:"cv"}];
    spy = spyOn(recipesServices,'getRecipes')
    .and.returnValue(Promise.resolve(mockRecipes));
    //fixture.detectChanges();
  });

  it('should have a component', () => {
    expect(component).toBeTruthy();
  });

  // it('should have a table to display the recipes', () => {
  //   expect(element.innerHTML).toContain("thead");
  //   expect(element.innerHTML).toContain("tbody");
  // });

});
