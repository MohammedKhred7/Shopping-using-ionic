import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUserPageRoutingModule } from './add-user-routing.module';

import { AddUserPage } from './add-user.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    AddUserPageRoutingModule
  ],
  declarations: [AddUserPage]
})
export class AddUserPageModule {}
