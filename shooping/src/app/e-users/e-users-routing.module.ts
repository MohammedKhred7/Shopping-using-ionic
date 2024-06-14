import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EUsersPage } from './e-users.page';

const routes: Routes = [
  {
    path: '',
    component: EUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EUsersPageRoutingModule {}
