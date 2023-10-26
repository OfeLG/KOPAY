import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {
  public var_recovery: String;
  public var_modal: Boolean;
  constructor(private _router: Router) {
    this.var_recovery = "email";
    this.var_modal = false;
  }

  navigate(page: String){
    this._router.navigate(['mainPages/'+page]);
  }
  continueRecovery(variable: String){ // ESTO ES PARA SIMULAR LO DEL CONTINUAR EN RECUPERAR CONTRASEÑA
    this.var_recovery = variable;
  }

  modalActions(){
    this.var_modal = !this.var_modal;
  }

}
