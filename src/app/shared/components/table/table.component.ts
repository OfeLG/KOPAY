import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data!: Array<any>;
  @Input() type_table!: String;
  @Output() send_detail_route = new EventEmitter<any>();
  
  public type_user: string = this.app_service.data_user.role;
  public state_options: string[];
  public role_options: string[];

  constructor(public app_service: AppService) {
    this.state_options = ["Completed", "Closed"];
    this.role_options = ["cortador", "guarnecedor", "ensamblador", "admin"];
  }
    
  sendRoute(id_user: string, id_package: string){
    this.app_service.id_detail.id_number = id_user;
    this.app_service.id_detail.id_package = id_package;
    this.send_detail_route.emit('packageDetail');
  }

  payment(new_state: string){
    console.log("Realizar el pago")
    // this.data = this.data.filter((item_package: { state: String; }) => item_package.state == 'Completed');
  }

  updateEmployee(employee: any, role: string){ //Cambia el rol de un usuario
    const employee_data = {
      name: employee.name,
      email: employee.email,
      id_number: employee.id_number,
      role: role,
      password: employee.password // OJO QUE AUN NO ESTA DEVOLVIENDO EL PASSWORD
    };
    this.app_service.updateUser(employee_data).subscribe(
      (response) => {
        console.log("Se editó el rol del trabajador: "+ response)
      },
      (error) => {
        console.error('Error al editar el usuario:', error);
      }
    );
  }
}
