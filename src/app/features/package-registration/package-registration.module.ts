import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPackagesComponent } from './my-packages/my-packages.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { PackageRegistrationRoutingModule } from './package-registration-routing.module';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MyPackagesComponent,
    ProductRegistrationComponent,
    PackageDetailComponent,
    ProductCreationComponent,
    EmployeeRegistrationComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    PackageRegistrationRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PackageRegistration { }
