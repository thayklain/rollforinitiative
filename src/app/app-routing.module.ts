import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RemovecharComponent } from './removechar/removechar.component';
import { RulesComponent } from './rules/rules.component';
import { TurnComponent } from './turn/turn.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: 'turn', component: TurnComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'removechar', component: RemovecharComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
