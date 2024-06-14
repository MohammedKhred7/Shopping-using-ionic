import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManPage } from './man.page';

const routes: Routes = [
  {
    path: '',
    component: ManPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManPageRoutingModule {}
