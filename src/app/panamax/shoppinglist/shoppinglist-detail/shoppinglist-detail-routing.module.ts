import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppinglistDetailPage } from './shoppinglist-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppinglistDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppinglistDetailPageRoutingModule {}
