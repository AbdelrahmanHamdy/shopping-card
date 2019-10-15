import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';


@Injectable() // Because i will use service inside another service
export class DataStorageService {
  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    // return this.httpClient.put('https://ng-recipe-book-adb01.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(),{observe:'body',params: new HttpParams().set('auth','token')
    //   //headers:new HttpHeaders()
    // });
    const req = new HttpRequest("PUT",'https://ng-recipe-book-adb01.firebaseio.com/recipes.json',
    this.recipeService.getRecipes(),{reportProgress:true});
    return this.httpClient.request(req);
  }

  getRecipes() {

    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-adb01.firebaseio.com/recipes.json?auth='+token)
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-adb01.firebaseio.com/recipes.json',
    {
      observe:'body',responseType:'json'
    })
    .pipe(map((recipes)=>{
      console.log(recipes);
      for(let recipe of recipes ){
        if(!recipe['ingredients'])
        {recipe['ingredients']=[];
      }
      }
      return recipes;
    })).subscribe(
        (recipes:Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}