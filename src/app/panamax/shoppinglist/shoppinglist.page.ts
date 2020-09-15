import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shoppinglist.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.page.html',
  styleUrls: ['./shoppinglist.page.scss'],
})
export class ShoppinglistPage implements OnInit {

  loadedShoppingList: ShoppingList[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.loadedShoppingList = this.shoppingListService.shoppingLists;
  }

}
