import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanamaxPage } from './panamax.page';

const routes: Routes = [
  {
    path: '',
    component: PanamaxPage,
    children: [
      {
        path: 'shoppinglist',
        loadChildren: () => import('./shoppinglist/shoppinglist.module').then( m => m.ShoppinglistPageModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
      },
      {
        path: 'product-detail',
        loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
      },
      {
        path: '',
        redirectTo: '/panamax/shoppinglist',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/panamax/shoppinglist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanamaxPageRoutingModule {}
