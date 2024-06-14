import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwmenPage } from './owmen.page';

const routes: Routes = [
  {
    path: '',
    component: OwmenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwmenPageRoutingModule {}
