import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPagesRoutingModule } from '../main-pages/main-pages-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { MainPagesComponent } from './main-pages.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
// import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MainPagesComponent,
    MainComponent,
    LoginComponent,
    SigninComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    MainPagesRoutingModule,
    FormsModule,
    // SharedModule,
  ]
})
export class MainPagesModule { }
