import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  /** Token ID del usuario */
  public token: string = '';
  public data_user: any;
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

  getProduct(): Observable <any>{
    let url = this.api_domain + "/product/find_all";
    return this.http.get(url, this.getHeaders());
  }

  getUsers(): Observable<any> {
    let url = this.api_domain + "/user/find_all";
    return this.http.get(url, this.getHeaders());
  }

  updateUser(name: string, id: string): Observable<any> {
    let url = this.api_domain + "/user/update";
    const user = {
      name: name,
      id_number: id
    };
    return this.http.put(url, user, this.getHeaders());
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

  registerProduct(id: string, name: string): Observable<any> {
    let url = this.api_domain + "/worker/add_job";
    const product = {
      user_id_number: id,
      product_name: name
    };
    return this.http.post(url, product, this.getHeaders());
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

