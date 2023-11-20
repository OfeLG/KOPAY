import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { SelectComponent } from './select/select.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavBarComponent,
    TableComponent,
    SelectComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    NavBarComponent,
    TableComponent,
    SelectComponent,
    SearchComponent
  ]
})
export class SharedModule { }
