import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ESignupPageRoutingModule } from './e-signup-routing.module';

import { ESignupPage } from './e-signup.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ESignupPageRoutingModule
  ],
  declarations: [ESignupPage]
})
export class ESignupPageModule {}
