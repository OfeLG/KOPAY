import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent {
  options_array_rol_employee: string[] = ["Cortador","Ensamblador", "Guarnecedor", "Admin"];

  public employee_array: Array<any> = [];
  public filtered_employee: any = [];

  public open: string;
  public var_modal: boolean;
  public employee_email: string;
  public employee_role: string;
  public var_error: boolean;

  constructor(
    private _router: Router,
    public app_service: AppService,
    ){
    this.open = "";
    this.var_modal = false;
    this.var_error = false;
    this.employee_email = "";
    this.employee_role = "";
  }

  ngOnInit() {
    this.app_service.getEmployee().subscribe(
      (response) => {
        this.employee_array = response.users;
        this.filtered_employee = [...this.employee_array];
      },
      (error) => {
        console.error("Error al obtener a los trabajadores:", error)
      }
    );
  }

  navigate(page: string){
    if(page == "login"){
      this._router.navigate(['mainPages/'+page]);
      return;
    }else{
      this._router.navigate(['packageRegistration/'+page]);
    }
  }

  modalActions(){
    if(this.var_error && this.var_modal){
      this.var_error = false;
    }
    this.var_modal = !this.var_modal;
  }

  selectRole(role: string){
    this.employee_role = role;
  }

  receiveSearchResults(results: any) {
    this.filtered_employee = [...results]; // Actualiza los datos filtrados
  }
  
  create() {
    if (this.employee_email!= "" && this.employee_role != "") { // Verificar si los datos estan llenos
      this.app_service.createEmployee(this.employee_email, this.employee_role).subscribe(
        (response) => {
          this.filtered_employee.push (response.new_user);
          this.modalActions();
        },
        (error) => {
          this.var_error = true;
          if (error instanceof HttpErrorResponse) { // Verificar el código de estado y la estructura del error
            if (error.status === 400 && error.error.message === 'User exist') {
              this.var_error = true;
              this.modalActions();
              return;
            }
          }
          console.error('Error al crear el empleado:', error);
        }
        
      );
    }else{
      console.log("No se ha creado el empleado, porque no se han agregado todos los datos requeridos");
    }
    this.employee_email = "";
    this.employee_role = "";
    this.open='';
  }
}
