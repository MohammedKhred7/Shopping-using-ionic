import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main_page',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./e-login/e-login.module').then( m => m.ELoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'otpvalidation',
    loadChildren: () => import('./otpvalidation/otpvalidation.module').then( m => m.OtpvalidationPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'level',
    loadChildren: () => import('./level/level.module').then( m => m.LevelPageModule)
  },
  {
    path: 'std',
    loadChildren: () => import('./std/std.module').then( m => m.StdPageModule)
  },
  {
    path: 'corseriar',
    loadChildren: () => import('./courceira/courceira.module').then( m => m.CourceiraPageModule)
  },
  {
    path: 'zero',
    loadChildren: () => import('./zero/zero.module').then( m => m.ZeroPageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'e-login',
    loadChildren: () => import('./e-login/e-login.module').then( m => m.ELoginPageModule)
  },
  {
    path: 'e-signup',
    loadChildren: () => import('./e-signup/e-signup.module').then( m => m.ESignupPageModule)
  },
  {
    path: 'e-home',
    loadChildren: () => import('./e-home/e-home.module').then( m => m.EHomePageModule)
  },
  {
    path: 'item-details',
    loadChildren: () => import('./item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'e-category',
    loadChildren: () => import('./e-category/e-category.module').then( m => m.ECategoryPageModule)
  },
  {
    path: 'e-users',
    loadChildren: () => import('./e-users/e-users.module').then( m => m.EUsersPageModule)
  },
  {
    path: 'e-prodect',
    loadChildren: () => import('./e-prodect/e-prodect.module').then( m => m.EProdectPageModule)
  },
  {
    path: 'add-category',
    loadChildren: () => import('./add-category/add-category.module').then( m => m.AddCategoryPageModule)
  },
  {
    path: 'add-prodect',
    loadChildren: () => import('./add-prodect/add-prodect.module').then( m => m.AddProdectPageModule)
  },
  {
    path: 'update-category',
    loadChildren: () => import('./update-category/update-category.module').then( m => m.UpdateCategoryPageModule)
  },
  {
    path: 'update-product',
    loadChildren: () => import('./update-product/update-product.module').then( m => m.UpdateProductPageModule)
  },
  {
    path: 'man',
    loadChildren: () => import('./man/man.module').then( m => m.ManPageModule)
  },
  {
    path: 'owmen',
    loadChildren: () => import('./owmen/owmen.module').then( m => m.OwmenPageModule)
  },
  {
    path: 'childern',
    loadChildren: () => import('./childern/childern.module').then( m => m.ChildernPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
