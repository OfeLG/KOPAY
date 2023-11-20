import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPackagesComponent } from './my-packages/my-packages.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { SettingComponent } from './setting/setting.component';


const routes: Routes = [
    {
      path: '', redirectTo: '/packageRegistration/myPackages', pathMatch: 'full'
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
      path: '', component: PackageDetailComponent,
      children: [
        { path: 'packageDetail', component: PackageDetailComponent },
      ]
    },

    {
      path: '', component: ProductCreationComponent,
      children: [
        { path: 'productCreation', component: ProductCreationComponent },
      ]
    },

    {
      path: '', component: EmployeeRegistrationComponent,
      children: [
        { path: 'employeeRegistration', component: EmployeeRegistrationComponent },
      ]
    },

    {
      path: '', component: SettingComponent,
      children: [
        { path: 'setting', component: SettingComponent },
      ]
    },

    {
      path: '**', redirectTo: '/packageRegistration/main', pathMatch: 'full'
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PackageRegistrationRoutingModule { }

  //package-registration