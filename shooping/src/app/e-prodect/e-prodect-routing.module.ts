import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EProdectPage } from './e-prodect.page';

const routes: Routes = [
  {
    path: '',
    component: EProdectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EProdectPageRoutingModule {}
