import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcharPage } from './addchar.page';

const routes: Routes = [
  {
    path: '',
    component: AddcharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcharPageRoutingModule {}
