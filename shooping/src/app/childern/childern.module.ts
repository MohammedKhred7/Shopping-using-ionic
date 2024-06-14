import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildernPageRoutingModule } from './childern-routing.module';

import { ChildernPage } from './childern.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ChildernPageRoutingModule
  ],
  declarations: [ChildernPage]
})
export class ChildernPageModule {}
