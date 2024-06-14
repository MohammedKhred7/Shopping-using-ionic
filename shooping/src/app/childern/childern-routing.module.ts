import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildernPage } from './childern.page';

const routes: Routes = [
  {
    path: '',
    component: ChildernPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildernPageRoutingModule {}
