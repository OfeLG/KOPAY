import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-packages',
  templateUrl: './my-packages.component.html',
  styleUrls: ['./my-packages.component.scss']
})
export class MyPackagesComponent {
  send_user_type: string = 'worker';
  array_prueba_tabla: Array<any> = [
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Completado"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pendiente"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pago"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Completado"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pendiente"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pago"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Completado"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pendiente"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pago"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Completado"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pendiente"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pago"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Completado"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pendiente"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pago"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Completado"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pendiente"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pago"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Completado"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pendiente"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pago"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Completado"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pendiente"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pago"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Completado"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pendiente"
      },
      {
        id: "10002345",
        date: "30/09/23",
        product_quantity: 4,
        cumulative_total: 30.000,
        state: "Pago"
      },
    ]

  public input_status: Boolean;
  public table_status: String;


  constructor(private _router: Router){
    this.input_status = true;
    this.table_status = "pendientes";
  }
  
  changeTableState(value: String){
    this.table_status = value;
  }

  navigate(page: string){
    this._router.navigate(['workerUser/'+page]);
  }
}
