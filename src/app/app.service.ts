import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  /** Token ID del usuario */
  public token: string = '';
  public data_user: any;
  public id_detail = {
    id_number: "",
    id_package: ""
  };
  public api_domain = "http://keiddyg.pythonanywhere.com";
  constructor(private http: HttpClient) { 
  }

  private getHeaders(): any {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
    })
    return ({ headers: headers });
  }

  login(credentials: {}): Observable <any>{
    let url = this.api_domain + "/auth/login";
    return this.http.post(url, credentials, this.getHeaders());
  }

  getUsers(): Observable<any> {
    let url = this.api_domain + "/user/find_all";
    return this.http.get(url, this.getHeaders());
  }

  getaUser(): Observable<any> { // Obtener un solo usuario
    let url = `${this.api_domain}/user/find_one/${this.id_detail?.id_number || ''}`;
    return this.http.get(url, this.getHeaders());
  }

  updateUser(user: any): Observable<any> {
    let url = this.api_domain + "/user/update";
    return this.http.put(url, user, this.getHeaders());
  }

  getProduct(): Observable <any>{
    let url = this.api_domain + "/product/find_all";
    return this.http.get(url, this.getHeaders());
  }

  createProduct(p_name: string, p_price: string): Observable <any>{
    let url = this.api_domain + "/product/create";
    const product = {
      name: p_name,
      price: p_price
    };
    return this.http.post(url, product, this.getHeaders());
  }

  registerProduct(id: string, name: string): Observable<any> {
    let url = this.api_domain + "/worker/add_job";
    const product = {
      user_id_number: id,
      product_name: name
    };
    return this.http.post(url, product, this.getHeaders());
  }
  
  getPackages(): Observable<any> {
    let url = "";
    if(this.data_user.role == "admin"){
      url = this.api_domain + "/package/find_all";
    }else{
      url = `${this.api_domain}/package/find_one/${this.data_user?.id_number || ''}`;
    }
    return this.http.get(url, this.getHeaders());
  }

  getPackageDetails(): Observable<any> {
    let url = `${this.api_domain}/package/find_detail_one/${this.id_detail?.id_package || ''}`;
    return this.http.get(url, this.getHeaders());
  }

  getEmployee(): Observable<any> {
    let url = this.api_domain + "/user/find_all";
    return this.http.get(url, this.getHeaders());
  }

  createEmployee(p_email: string, p_role: string): Observable <any>{
    let url = this.api_domain + "/user/create";
    const employee = {
      name: "",
      role: p_role,
      email: p_email,
      id_number: ""
    };
    return this.http.post(url, employee, this.getHeaders());
  }

  // postPay(id: string, name: string): Observable<any> {
  //   let url = this.api_domain + "/payment/create";
  //   const product = {
  //     user_id_number: id,
  //     product_name: name
  //   };
  //   return this.http.post(url, product, this.getHeaders());
  // }
}

