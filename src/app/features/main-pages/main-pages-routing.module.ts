import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../main-pages/main/main.component';


const routes: Routes = [
    {
      path: '', redirectTo: '/mainPages/home', pathMatch: 'full'
    },
  
    {
      path: '', component: MainComponent,
      children: [
        { path: 'home', component: MainComponent },
      ]
    },
  
    {
      path: '**', redirectTo: '/mainPages/home', pathMatch: 'full'
    },
  ];
  
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainPagesRoutingModule { }