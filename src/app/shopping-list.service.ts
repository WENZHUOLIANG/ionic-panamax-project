import { Injectable } from '@angular/core';
import { ShoppingList } from './panamax/shoppinglist.model';
import { Product } from './panamax/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private _products: Product[] = [
    new Product('p1', 'Apple', 'Juice Apple', 'https://previews.123rf.com/images/greyelkin/greyelkin1804/greyelkin180400110/100380233-red-juicy-apple-isolated-on-white-background-clipping-path-full-depth-of-field.jpg', 1),
    new Product('p2', 'Orange', 'Juice Orange', 'https://fragrancetoday.com/wp-content/uploads/2020/03/orange-1995056_1280-e1583950339386.jpg', 2),
  ]

  private _shoppingLists: ShoppingList[] = [
    new ShoppingList('s1', 'ShoppingList #1', 'New Shopping List 1', 'Wen L', this._products),
    new ShoppingList('s2', 'ShoppingList #2', 'New Shopping List 2', 'Jon S', this._products),
    new ShoppingList('s3', 'ShoppingList #3', 'New Shopping List 3', 'Tom I', this._products),
  ];

  get shoppingLists() {
    return [...this._shoppingLists];
  }

  getShoppingLists(shoppingListId: string) {
    return {...this._shoppingLists.find(p => p.shoppingListId === shoppingListId)};
  }

  getProduct(productId: string) {
    console.log('productId: ' + productId);
    return {...this._products.find(p => p.productId === productId)};
  }

  constructor() { }
}
