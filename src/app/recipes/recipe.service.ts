import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';  
import { Subject } from 'rxjs';

    @Injectable()
    export class RecipeService
     {
         recipeChanged = new Subject<Recipe[]>();
    recipes:Recipe[]=[
        new Recipe('A test recipe','This a simple test',
        'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-images%252F2019-04%252F89e07010-6aab-11e9-b0bf-ee5384a0b533%26client%3Da1acac3e1b3290917d92%26signature%3D11afefad82e947ca2d688cccb14e1f8405769a68&client=amp-blogside-v2&signature=0b67790d53336823d8be2b9c24b07e5f3080f3ec'
        ,[new Ingredient('Meat',2),new Ingredient('french frise',2)]),
        new Recipe('A test 2 recipe','This a simple test',
        'https://amp.insider.com/images/5bbd187101145529745a9895-750-563.jpg',
        [new Ingredient('Buns',2),new Ingredient('Meat',2)])
      ];
     getRecipes(){
        return this.recipes.slice();
     }
     getRecipe(index:number){
         return this.recipes[index];
     }
     addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
     }
     updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());

     }
     deleteRecipe(index:number){
        this.recipes.splice(index,1)
        this.recipeChanged.next(this.recipes.slice());
     }
 }