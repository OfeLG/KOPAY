import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPagesRoutingModule } from '../main-pages/main-pages-routing.module';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainPagesRoutingModule,
  ]
})
export class MainPagesModule { }
