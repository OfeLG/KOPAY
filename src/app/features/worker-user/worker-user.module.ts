import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPackagesComponent } from './my-packages/my-packages.component';
import { WorkerUserRoutingModule } from './worker-user-routing.module';
import { SharedModule } from 'src/app/shared/components/shared.module';



// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyPackagesComponent
  ],
  imports: [
    CommonModule,
    // FormsModule,
    WorkerUserRoutingModule,
    SharedModule
  ]
})
export class WorkerUserModule { }
