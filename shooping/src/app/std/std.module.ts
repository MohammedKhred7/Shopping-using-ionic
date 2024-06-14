import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StdPageRoutingModule } from './std-routing.module';

import { StdPage } from './std.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,HttpClientModule,
    FormsModule,
    IonicModule,
    StdPageRoutingModule
  ],
  declarations: [StdPage]
})
export class StdPageModule {}
