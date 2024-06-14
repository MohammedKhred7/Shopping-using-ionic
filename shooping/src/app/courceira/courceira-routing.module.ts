import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourceiraPage } from './courceira.page';
import { AddVedioComponent } from './add-vedio/add-vedio.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CourceDetailComponent } from './cource-detail/cource-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CourceiraPage
  },
  {
    path: 'add-video',
    component: AddVedioComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent
  },
  {
    path: 'detail',
    component: CourceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourceiraPageRoutingModule {}
