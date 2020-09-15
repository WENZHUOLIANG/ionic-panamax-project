import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../../shoppinglist.model';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shoppinglist-detail',
  templateUrl: './shoppinglist-detail.page.html',
  styleUrls: ['./shoppinglist-detail.page.scss'],
})
export class ShoppinglistDetailPage implements OnInit {

  shoppingList: ShoppingList;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('shoppingListId')) {
        this.navCtrl.navigateBack('/panamax/shoppinglist');
        return;
      }
      this.shoppingList = this.shoppingListService.getShoppingLists(paramMap.get('shoppingListId'));
    });
  }

}
