import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EHomePage } from './e-home.page';

const routes: Routes = [
  {
    path: '',
    component: EHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EHomePageRoutingModule {}
