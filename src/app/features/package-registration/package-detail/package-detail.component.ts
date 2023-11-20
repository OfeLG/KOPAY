import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss']
})
export class PackageDetailComponent {
  public type_user: string = "";
  options_array: string[] = ["pendiente","pago"];

  //ES UN ARRAY DE PRUEBA PARA MOSTRAR LOS PRODUCTOS
  array_product: Array<any> = [
    {
      id: "100232",
      name: "Tacones",
      date_hour: "09/10/23 - 3:20",
      price: 30.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      date_hour: "09/10/23 - 3:20",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      date_hour: "09/10/23 - 3:20",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      date_hour: "09/10/23 - 3:20",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      date_hour: "09/10/23 - 3:20",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      date_hour: "09/10/23 - 3:20",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      date_hour: "09/10/23 - 3:20",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      date_hour: "09/10/23 - 3:20",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      date_hour: "09/10/23 - 3:20",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      date_hour: "09/10/23 - 3:20",
      price: 50.000
    }
  ];

  constructor(
    private _router: Router,
    private app_service: AppService,
    ){
  }

  ngOnInit() {
    this.type_user = this.app_service.data_user.role;
  }

  navigate(page: string){
    this._router.navigate(['packageRegistration/'+page]);
  }
}
