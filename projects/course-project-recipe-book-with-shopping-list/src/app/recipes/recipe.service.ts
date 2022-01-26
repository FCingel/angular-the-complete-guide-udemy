import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Lomo Saltado',
            'A traditional Peruvian stir-fry dish!',
            'https://live.staticflickr.com/4077/4895468630_f28983b33c_b.jpg',
            [
                new Ingredient('Sirloin steak', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Tomato', 1),
                new Ingredient('French Fries', 15)
            ]
        ),
        new Recipe(
            'Kapustnica',
            'A delicious Slovakian sauerkraut soup!',
            'https://live.staticflickr.com/2370/2180545646_75f1efe928_b.jpg',
            [
                new Ingredient('Sauerkraut', 1),
                new Ingredient('Mushroom', 6),
                new Ingredient('Sausage', 3),
            ]
        )
      ];

      constructor(private shoppingListService: ShoppingListService) { }

      getRecipes() {
          return this.recipes.slice();          // slice() with no arguments returns a copy of the array to prevent changing, since arrays are reference types in JS
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.shoppingListService.addIngredients(ingredients);
      }
}