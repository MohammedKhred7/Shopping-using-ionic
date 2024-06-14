import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ECategoryPageRoutingModule } from './e-category-routing.module';

import { ECategoryPage } from './e-category.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    ECategoryPageRoutingModule
  ],
  declarations: [ECategoryPage]
})
export class ECategoryPageModule {}
