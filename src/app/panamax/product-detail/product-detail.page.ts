import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')) {
        this.navCtrl.navigateBack('/panamax/shoppinglist');
        return;
      }
      this.product = this.shoppingListService.getProduct(paramMap.get('productId'));
    });
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')) {
        this.navCtrl.navigateBack('/panamax/shoppinglist');
        return;
      }
      this.product = this.shoppingListService.getProduct(paramMap.get('productId'));
      console.log(this.product)
    });
  }
}
