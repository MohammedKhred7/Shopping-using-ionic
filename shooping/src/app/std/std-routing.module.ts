import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StdPage } from './std.page';

const routes: Routes = [
  {
    path: '',
    component: StdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StdPageRoutingModule {}
