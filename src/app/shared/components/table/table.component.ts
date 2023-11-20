import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data!: Array<any>;
  @Input() type_table!: String;
  public type_user: string = this.app_service.data_user.role;
  public state_options: string[];
  public role_options: string[];

  constructor(public app_service: AppService) {
    this.state_options = ["Completed", "Closed"];
    this.role_options = ["cortador", "guarnecedor", "ensamblador", "admin"];
  }

  //POR SI LA TABLA NO SE ACTUALIZA CUANDO SE CAMBIE EL VALOR DE UN SELECT DE LA TABLA]
  
  // changeTableState(value: String) {
  //   this.table_status = value;
  //   let array;
  //   if (value == "all") {
  //     array = this.array_data.filter((data: { state: String; }) => data.state === 'Closed' || data.state === 'Completed');
  //   } else {
  //     array = this.array_data.filter((data: { state: String; }) => data.state === value);
  //   }
  //   this.array_filtered_packets = [...array];
  //   this.total_package.total_money = this.array_filtered_packets.reduce((cumulative: number, data: any) => {
  //     return cumulative + parseFloat(data.cumulative_total);
  //   }, 0);
  //   this.total_package.quantity = this.array_filtered_packets.reduce((product: number, data: any) => {
  //     return product + parseFloat(data.product_quantity);
  //   }, 0);
  // }
}
