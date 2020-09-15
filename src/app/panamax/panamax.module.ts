import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanamaxPageRoutingModule } from './panamax-routing.module';

import { PanamaxPage } from './panamax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanamaxPageRoutingModule
  ],
  declarations: [PanamaxPage]
})
export class PanamaxPageModule {}
