import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    NavBarComponent,
    TableComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    TableComponent,
    SelectComponent,
  ]
})
export class SharedModule { }
