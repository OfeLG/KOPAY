import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  public show_message: boolean;

  public employee_array: any;
  public data: any;
  public var_modal: Boolean;
  public message: boolean; 

  constructor(
    private _router: Router,
    public app_service: AppService,
  ) {
    this.data = {
      name: "",
      email: "",
      id_number: "",
      role: "",
      password: ""
    };
    this.show_message = false;
    this.var_modal = false;
    this.message = false;
  }

  ngOnInit(){
    this.app_service.getEmployee().subscribe(
      (response: any) => this.employee_array = [...response.users], 
      (error) => console.error("Error al obtener los empleados:", error)
    );
  }

  navigate(page: String){
    this._router.navigate(['mainPages/'+page]);
  }

  modalActions(){
    if(this.message && this.var_modal){
      this.message = false;
    }
    this.var_modal = !this.var_modal;
  }

  update() {
    const existingEmployee = this.employee_array.find((employee: { email: any; }) => employee.email === this.data.email);
    if (existingEmployee) { // Si email_exists es true, significa que el correo ya existe en el array
      this.data.role = existingEmployee.role;
      if (this.data.name!="" && this.data.email!="" && this.data.id_number!="" && this.data.role!="" && this.data.password!=""){
        this.app_service.updateUser(this.data).subscribe(
          (response) => {
            this.employee_array.push(response)
            this.modalActions();
            this.navigate('login');
          },
          (error) => {
            console.error('Error al editar el usuario:', error);
          }
        );
      }
    } else {
      this.message = true;
      this.modalActions();
      return
    }
  }


}
