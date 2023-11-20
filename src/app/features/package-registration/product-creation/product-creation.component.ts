import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.scss']
})
export class ProductCreationComponent {
  send_user_type = this.app_service.data_user.role;
  
  public open: string;
  public products_options!: any;


  // public input_status: boolean;
  filteredData: Array<any>= []; // Guarda los datos filtrados de la busqueda
  products_array: Array<any> = [
    {
      id: "100232",
      name: "Tacones",
      price: 30.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      price: 50.000
    },
    {
      id: "100112",
      name: "Zapato plano",
      price: 50.000
    }
  ];

  constructor(
    private _router: Router,
    public app_service: AppService,
    ){
    this.open = "";
    // this.input_status = true;
  }

  ngOnInit() {
    this.app_service.getProduct().subscribe(
      (response: any) => this.products_array = response.products,
      (error) => console.error("Error al obtener los productos:", error)
    );
  }
  
  navigate(page: string){
    this._router.navigate(['packageRegistration/'+page]);
  }

  receiveSearchResults(results: any[]) {
    this.filteredData = results; // Actualiza los datos filtrados
    if (results.length == 0) {
      this.filteredData = [...this.products_array]; // Restablecer a todos los registros si no hay coincidencias
    }
  }
}
