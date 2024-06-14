import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManPageRoutingModule } from './man-routing.module';

import { ManPage } from './man.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ManPageRoutingModule
  ],
  declarations: [ManPage]
})
export class ManPageModule {}
