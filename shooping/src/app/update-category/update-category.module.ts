import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCategoryPageRoutingModule } from './update-category-routing.module';

import { UpdateCategoryPage } from './update-category.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCategoryPageRoutingModule
  ],
  declarations: [UpdateCategoryPage]
})
export class UpdateCategoryPageModule {}
