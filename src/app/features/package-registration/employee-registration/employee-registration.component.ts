import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent {
  options_array_rol_employee: string[] = ["Cortador","Ensamblador", "Administrador"];

  filteredData: Array<any>= []; // Guarda los datos filtrados de la busqueda
  array_employeee: Array<any> = [
    {
      id: "121333",
      name: "Ofelia Londoño",
      mail: "Ofelialondonog@gmail.com",
      role: "Cortador"
    },
    {
      id: "100023",
      name: "Natalia Castañeda",
      mail: "NataliaCastañeda@gmail.com",
      role: "Ensamblador"
    },
    {
      id: "1013233",
      name: "Valeria Isabelle",
      mail: "ValeriaIsabellg@gmail.com",
      role: "Guarnecedor"
    },
    {
      id: "121333",
      name: "Juana Valentina",
      mail: "JuanaValentina@gmail.com",
      role: "Cortador"
    },
    {
      id: "1013233",
      name: "Valeria Isabelle",
      mail: "ValeriaIsabellg@gmail.com",
      role: "Guarnecedor"
    },
    {
      id: "121333",
      name: "Ofelia Londoño",
      mail: "Ofelialondonog@gmail.com",
      role: "Cortador"
    }
  ]

  public open: string;

  constructor(private _router: Router){
    this.open = "";
  }

  navigate(page: string){
    this._router.navigate(['packageRegistration/'+page]);
  }

  receiveSearchResults(results: any[]) {
    this.filteredData = results; // Actualiza los datos filtrados
    if (results.length == 0) {
      this.filteredData = [...this.array_employeee]; // Restablecer a todos los registros si no hay coincidencias
    }
    console.log('RESULTADOS DEL SEARCH AL PADRE:'+ this.filteredData);
  }
  
}
