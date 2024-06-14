import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpvalidationPage } from './otpvalidation.page';

const routes: Routes = [
  {
    path: '',
    component: OtpvalidationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpvalidationPageRoutingModule {}
