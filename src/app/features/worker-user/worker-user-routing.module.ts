import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPackagesComponent } from './my-packages/my-packages.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';


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
      path: '', component: ProductRegistrationComponent,
      children: [
        { path: 'productRegistration', component: ProductRegistrationComponent },
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