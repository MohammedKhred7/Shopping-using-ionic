import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EUsersPageRoutingModule } from './e-users-routing.module';

import { EUsersPage } from './e-users.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EUsersPageRoutingModule
  ],
  declarations: [EUsersPage]
})
export class EUsersPageModule {}
