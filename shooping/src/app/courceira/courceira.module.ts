import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourceiraPageRoutingModule } from './courceira-routing.module';

import { CourceiraPage } from './courceira.page';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddVedioComponent } from './add-vedio/add-vedio.component';
import { CourceDetailComponent } from './cource-detail/cource-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CourceiraPageRoutingModule
  ],
  declarations: [CourceiraPage , AddCategoryComponent , AddVedioComponent , CourceDetailComponent]
})
export class CourceiraPageModule {}
