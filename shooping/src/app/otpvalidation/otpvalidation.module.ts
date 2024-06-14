import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpvalidationPageRoutingModule } from './otpvalidation-routing.module';

import { OtpvalidationPage } from './otpvalidation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpvalidationPageRoutingModule
  ],
  declarations: [OtpvalidationPage]
})
export class OtpvalidationPageModule {}
