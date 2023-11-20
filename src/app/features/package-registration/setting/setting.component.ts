import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit{
  @ViewChild('myForm') myForm: any;
  public data!: any;

  public var_modal: Boolean;
  // public input_name: string = this.data.name;

  constructor(
    private _router: Router,
    public app_service: AppService,
    )
  {
    this.var_modal = false;
  }

  ngOnInit() {
    this.data = this.app_service.data_user;
  }

  navigate(page: string){
    this._router.navigate(['packageRegistration/'+page]);
  }

  modalActions(){
    this.var_modal = !this.var_modal;
  }

  update() {
    const user_id_number = this.app_service.data_user.id_number; 
    if (this.myForm.dirty) { // Verificar si el formulario ha sido modificado
      this.app_service.updateUser(this.data.name, user_id_number).subscribe(
        (response) => {
          this.app_service.data_user = response.users;
          this.modalActions();
        },
        (error) => {
          console.error('Error al registrar el producto:', error);
        }
      );
    }else{
      console.log("No se han actualizado los datos, porque no ha habido cambios en los datos");
    }
  }
}
