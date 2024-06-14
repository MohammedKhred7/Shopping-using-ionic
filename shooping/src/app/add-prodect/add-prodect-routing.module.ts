import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProdectPage } from './add-prodect.page';

const routes: Routes = [
  {
    path: '',
    component: AddProdectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProdectPageRoutingModule {}
