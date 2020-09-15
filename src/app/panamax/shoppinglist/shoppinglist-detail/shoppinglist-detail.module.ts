import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppinglistDetailPageRoutingModule } from './shoppinglist-detail-routing.module';

import { ShoppinglistDetailPage } from './shoppinglist-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppinglistDetailPageRoutingModule
  ],
  declarations: [ShoppinglistDetailPage]
})
export class ShoppinglistDetailPageModule {}
