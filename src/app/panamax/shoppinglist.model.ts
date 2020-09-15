import { Product } from './product.model';

export class ShoppingList {
    constructor(
        public shoppingListId: string,
        public shoppingListTitle: string,
        public shoppingListDescription: string,
        public customer: string,
        public product?: Product[]
    ){

    }
}