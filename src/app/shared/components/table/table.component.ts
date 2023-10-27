import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input()
  data!: Array<any>;
  @Input()
  type_user!: String;

  options_array: string[] = ["Pendiente","Pago"];
  constructor(){
  }
}
