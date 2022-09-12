import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemovecharPageRoutingModule } from './removechar-routing.module';

import { RemovecharPage } from './removechar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemovecharPageRoutingModule
  ],
  declarations: [RemovecharPage]
})
export class RemovecharPageModule {}
