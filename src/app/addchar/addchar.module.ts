import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcharPageRoutingModule } from './addchar-routing.module';

import { AddcharPage } from './addchar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcharPageRoutingModule
  ],
  declarations: [AddcharPage]
})
export class AddcharPageModule {}
