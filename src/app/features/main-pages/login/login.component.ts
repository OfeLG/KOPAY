import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public user = {
    email: "",
    password: ""
  };

  constructor(
    private _router: Router,
    private app_service: AppService,) {
  }

  navigate(module_page: String){
    this._router.navigate([module_page]);
  }
  validate_login(credentials: {}){
    this.app_service.login(credentials).subscribe(
      (response: any) => {
        if (response && response.access_token && response.access_token.token) {
          this.app_service.token = response.access_token.token;
          this.app_service.data_user = jwt_decode.jwtDecode(this.app_service.token);
          console.log("MI INFO: ", this.app_service.data_user);
          this.navigate('packageRegistration/myPackages');
        } else {
          console.error("La respuesta de inicio de sesión no contiene un token válido.");
        }
      },
      (error) => {
        console.error("Error al iniciar sesión:", error);
      }
    );
  }
}
