import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPackagesComponent } from './my-packages/my-packages.component';


const routes: Routes = [
    {
      path: '', redirectTo: '/workerUser/myPackages', pathMatch: 'full'
    },
  
    {
      path: '', component: MyPackagesComponent,
      children: [
        { path: 'myPackages', component: MyPackagesComponent },
      ]
    },
  
    {
      path: '**', redirectTo: '/workerUser/main', pathMatch: 'full'
    },
  ];
  
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class WorkerUserRoutingModule { }