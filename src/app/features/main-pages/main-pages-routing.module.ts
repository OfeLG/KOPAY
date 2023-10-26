import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { MainPagesComponent } from './main-pages.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';


const routes: Routes = [
    {
      path: '', redirectTo: '/mainPages/main', pathMatch: 'full'
    },
  
    {
      path: '', component: MainPagesComponent,
      children: [
        { path: 'main', component: MainComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signin', component: SigninComponent },
        { path: 'recover', component: RecoverPasswordComponent }
      ]
    },
  
    {
      path: '**', redirectTo: '/mainPages/main', pathMatch: 'full'
    },
  ];
  
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainPagesRoutingModule { }