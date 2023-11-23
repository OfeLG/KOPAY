import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.scss']
})
export class ProductCreationComponent implements OnInit{
  send_user_type = this.app_service.data_user.role;
  
  public open: string;
  public products_options!: any;
  public var_modal: Boolean;

  // public input_status: boolean;
  public products_array: Array<any>= []; // Guarda los datos filtrados de la busqueda
  public filtered_products: Array<any>= []; 
  public new_product = {
    name: "",
    price: ""
  }

  constructor(
    private _router: Router,
    public app_service: AppService,
    ){
    this.open = "";
    this.var_modal = false;
    // this.input_status = true;
  }

  ngOnInit() {
    this.app_service.getProduct().subscribe(
      (response) => {
        this.products_array = response.products;
        this.filtered_products = [...this.products_array];
      },
      (error) => {
        console.error("Error al obtener los productos:", error)
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

  receiveSearchResults(results: any[]) {
    this.filtered_products = results; // Actualiza los datos filtrados
  }

  modalActions(){
    this.var_modal = !this.var_modal;
  }

  create() {
    if (this.new_product.name != "" && this.new_product.price != "") { // Verificar si los datos estan llenos
      this.app_service.createProduct(this.new_product.name, this.new_product.price).subscribe(
        (response) => {
          this.filtered_products.push (response.new_product);
          this.modalActions();
        },
        (error) => {
          console.error('Error al crear el producto:', error);
        }
      );
    }else{
      console.log("No se ha creado el producto, porque no se han agregado todos los datos requeridos");
    }
    this.new_product.name = "";
    this.new_product.price = "";
    this.open='';
  }
}
