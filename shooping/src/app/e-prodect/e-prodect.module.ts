import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EProdectPageRoutingModule } from './e-prodect-routing.module';

import { EProdectPage } from './e-prodect.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EProdectPageRoutingModule
  ],
  declarations: [EProdectPage]
})
export class EProdectPageModule {}
