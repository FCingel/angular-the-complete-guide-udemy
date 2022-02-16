import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {           // this would emit a lot of events if the recipe has a lot of ingredients
        //     this.addIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);          // spread operator (...) allows turning an array of elements into a list
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}