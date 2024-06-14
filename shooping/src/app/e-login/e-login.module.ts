import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ELoginPageRoutingModule } from './e-login-routing.module';

import { ELoginPage } from './e-login.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ELoginPageRoutingModule
  ],
  declarations: [ELoginPage]
})
export class ELoginPageModule {}
