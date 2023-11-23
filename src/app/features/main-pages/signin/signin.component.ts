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
    // this.app_service.getEmployee().subscribe(
    //   (response: any) => this.employee_array = [...response.users], 
    //   (error) => console.error("Error al obtener los empleados:", error)
    // );
    this.employee_array = [
      {
          "email": "keiddygarcia@gmail.com",
          "id": 1,
          "id_number": "1001",
          "name": "Keiddy M",
          "role": "admin"
      },
      {
          "email": "juanapiñeros@gmail.com",
          "id": 2,
          "id_number": "1002",
          "name": "Juana Piñeros",
          "role": "cortador"
      },
      {
          "email": "valeriaramos@gmail.com",
          "id": 3,
          "id_number": "1003",
          "name": "Valeria Ramos",
          "role": "guarnecedor"
      },
      {
          "email": "ofelialondono@gmail.com",
          "id": 5,
          "id_number": "1004",
          "name": "Ofelia Londoño",
          "role": "ensamblador"
      },
      {
          "email": "willianinsignares@gmail.com",
          "id": 6,
          "id_number": "1006",
          "name": "Willi",
          "role": "ensamblador"
      },
      {
          "email": "",
          "id": 7,
          "id_number": "1007",
          "name": "",
          "role": ""
      },
      {
          "email": "123",
          "id": 8,
          "id_number": "1008",
          "name": "uu",
          "role": "cortador"
      },
      {
          "email": "tqtq",
          "id": 9,
          "id_number": "1009",
          "name": "Jesus Martinez",
          "role": "cortador"
      },
      {
          "email": "tatianagiraldor@gmail.com",
          "id": 10,
          "id_number": "",
          "name": "",
          "role": "Ensamblador"
      },
      {
          "email": "tatiMiranda@gmail.com",
          "id": 11,
          "id_number": "1010",
          "name": "",
          "role": "cortador"
      },
      {
          "email": "Mario-ortiz@gmail.com",
          "id": 13,
          "id_number": "1011",
          "name": "",
          "role": "ensamblador"
      },
      {
          "email": "CatalinaVilla@gmail.com",
          "id": 17,
          "id_number": "",
          "name": "",
          "role": "cortador"
      },
      {
          "email": "EmilianoSuarez@gmail.com",
          "id": 18,
          "id_number": "",
          "name": "",
          "role": "Ensamblador"
      },
      {
          "email": "tomasultruago@gmailcom",
          "id": 19,
          "id_number": "",
          "name": "",
          "role": "Ensamblador"
      },
      {
          "email": "marilisgonzalez@gmail.com",
          "id": 20,
          "id_number": "",
          "name": "",
          "role": "Ensamblador"
      },
      {
          "email": "gabrielbustamante@gmail.com",
          "id": 21,
          "id_number": "",
          "name": "",
          "role": "Ensamblador"
      },
      {
          "email": "dariolandinez@gmail.com",
          "id": 22,
          "id_number": "",
          "name": "",
          "role": "Ensamblador"
      }
  ]
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
    console.log ("entro al update")
    const existingEmployee = this.employee_array.find((employee: { email: any; }) => employee.email === this.data.email);
    if (existingEmployee) { // Si email_exists es true, significa que el correo ya existe en el array
      this.data.role = existingEmployee.role;
      console.log("datos a enviar: "+JSON.stringify(this.data));
      console.log ("dato viejo:: "+ JSON.stringify(existingEmployee))
      if (this.data.name!="" && this.data.email!="" && this.data.id_number!="" && this.data.role!="" && this.data.password!=""){
        console.log ("entro a datos completos: "+this.data)
        this.app_service.updateUser(this.data).subscribe(
          (response) => {
            this.employee_array.push(response)
            console.log ("El usuario registrado es: "+(this.employee_array.length -1))
            this.modalActions();
            this.navigate('login');
          },
          (error) => {
            console.error('Error al editar el usuario:', error);
          }
        );
      }
    } else {
      console.log ("entro a email no exists: ");
      this.message = true;
      this.modalActions();
      return
    }
  }


}
