import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwmenPageRoutingModule } from './owmen-routing.module';

import { OwmenPage } from './owmen.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    OwmenPageRoutingModule
  ],
  declarations: [OwmenPage]
})
export class OwmenPageModule {}
