import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TurnComponent } from '../turn/turn.component';
import { RulesComponent } from '../rules/rules.component';
import { RemovecharComponent } from '../removechar/removechar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TurnComponent, RulesComponent, RemovecharComponent]
})
export class HomePageModule {}
