import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppinglistPage } from './shoppinglist.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppinglistPage
  },
  {
    path: ':shoppingListId',
    loadChildren: () => import('./shoppinglist-detail/shoppinglist-detail.module').then( m => m.ShoppinglistDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppinglistPageRoutingModule {}
