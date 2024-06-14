import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZeroPageRoutingModule } from './zero-routing.module';

import { ZeroPage } from './zero.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    
    ZeroPageRoutingModule
  ],
  declarations: [ZeroPage]
})
export class ZeroPageModule {}
