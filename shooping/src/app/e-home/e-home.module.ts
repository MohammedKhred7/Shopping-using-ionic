import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EHomePageRoutingModule } from './e-home-routing.module';
import { EHomePage } from './e-home.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EHomePageRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [EHomePage]
})
export class EHomePageModule {
 
}
