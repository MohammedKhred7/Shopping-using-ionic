import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProdectPageRoutingModule } from './add-prodect-routing.module';

import { AddProdectPage } from './add-prodect.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddProdectPageRoutingModule
  ],
  declarations: [AddProdectPage]
})
export class AddProdectPageModule {}
