import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemovecharPage } from './removechar.page';

const routes: Routes = [
  {
    path: '',
    component: RemovecharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemovecharPageRoutingModule {}
