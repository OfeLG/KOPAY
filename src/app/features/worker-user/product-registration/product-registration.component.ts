import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent {
  send_user_type = "worker";
  options_array: string[] = ["Producto 1","Producto 2","Producto 3", "Producto 4"];

  constructor(private _router: Router){}
  

  navigate(page: string){
    this._router.navigate(['workerUser/'+page]);
  }
}
