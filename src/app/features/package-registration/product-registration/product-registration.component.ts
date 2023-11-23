import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent implements OnInit{
  public product_array: any = [];
  public package_array: any = [];
  public data_register: any = []; //LOS DATOS DEL REGISTRO 

  public selected_product: any = {};
  public selected_package: string = "";
  public var_modal: Boolean;

  constructor(
    private _router: Router,
    public app_service: AppService
  ){
    this.var_modal = false;
  }
  
  ngOnInit() {
    this.app_service.getProduct().subscribe(
      (response: any) => {this.product_array = [...response.products];
      },
      (error) => console.error("Error al obtener los productos:", error)
    );
  
    this.app_service.getPackages().subscribe(
      (response: any) => this.package_array = response.package.filter((data: { state: String; }) => data.state === "Pending"),
      (error) => console.error("Error al obtener paquetes:", error)
    );
  }

  modalActions(){
    if(this.var_modal){
      this.selected_product = {};
      this.selected_package = "";
    }
    this.var_modal = !this.var_modal;
  }

  navigate(page: string){
    if(page == "login"){
      this._router.navigate(['mainPages/'+page]);
      return;
    }else{
      this._router.navigate(['packageRegistration/'+page]);
    }
  }

  updateInput(option: any, type: string){
    if (type == "product") {
      this.selected_product = option;
    }else if (type == "package"){
      this.selected_package = option.id_package;
    }
  }

  register() {
    const user_id_number = this.app_service.data_user.id_number; 
    if (this.package_array.length>0 && this.selected_package){
      this.appServiceProduct(user_id_number, this.selected_product.name);
    }else if (this.package_array.length<=0 && user_id_number && this.selected_product.name){
      this.appServiceProduct(user_id_number, this.selected_product.name);
    }else{
      console.log('Los datos estan llegando vacios');
    }
  }

  appServiceProduct(user_id_number: string, product_name: string){
    this.app_service.registerProduct(user_id_number, product_name).subscribe(
      (response) => {
        this.data_register = response;
        this.modalActions();
      },
      (error) => {
        console.error('Error al registrar el producto:', error);
      }
    );
  }
}
