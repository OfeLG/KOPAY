import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';

@Component({
  selector: 'app-my-packages',
  templateUrl: './my-packages.component.html',
  styleUrls: ['./my-packages.component.scss']
})
export class MyPackagesComponent implements OnInit {

  public role_options = ["cortador", "guarnecedor", "ensamblador"];
  public packages_array: any;
  public array_filtered_packets: any;
  public employee_array: Array<any> = [];

  public selected_date: string = "";
  public input_status: Boolean;
  public table_status: String;
  public total_package = {
    quantity: 0,
    total_money: 0
  };

  constructor(
    private _router: Router,
    public app_service: AppService,
  ) {
    this.input_status = true;
    this.table_status = "Pending";
  }

  ngOnInit() {
    const type_user = this.app_service.data_user.role;
    this.app_service.getPackages().subscribe(
      (response: any) => {
        if (response) {
          let state;
          if (type_user == "admin") {
            this.packages_array = response.packages;
            state = "Completed";
          } else {
            this.packages_array = response.package;
            state = "Pending";
          }
          this.changeTableState(state, "state");
        }
      },
      (error) => {
        console.error("Error al obtener paquetes:", error);
      }
    );

    if (type_user == "admin"){
      this.app_service.getEmployee().subscribe(
        (response: any) => this.employee_array = [...response.users], 
        (error) => console.error("Error al obtener los empleados:", error)
      );
    }
  }

  changeTableState(value: String, filter_type: string) {
    this.table_status = value;
    let array = [];
    if(filter_type == "state"){
      if (value == "all") {
        array = this.packages_array.filter((item_package: { state: String; }) => item_package.state == 'Closed' || item_package.state == 'Completed');
      } else {
        array = this.packages_array.filter((item_package: { state: String; }) => item_package.state == value);
      }
    }else if (filter_type == "role"){
      let filter_users =  [...this.employee_array];
      filter_users = this.employee_array.filter((user) => user.role == value);
      array = this.packages_array.filter((item_package: { id_number: string; }) => { // Verificar si el usuario asociado al paquete está en la lista de users
        return filter_users.some((item_user) => item_user.id_number.trim() == item_package.id_number.trim());
      });
    }
    this.array_filtered_packets = [...array];
    this.total_package.total_money = this.array_filtered_packets.reduce((cumulative: number, data: any) => {
      return cumulative + parseFloat(data.cumulative_total);
    }, 0);
    this.total_package.quantity = this.array_filtered_packets.reduce((product: number, data: any) => {
      return product + parseFloat(data.product_quantity);
    }, 0);
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
    this.array_filtered_packets = [...results];
    console.log("en el my-package estoy recibiendo: " + this.array_filtered_packets);
  }

  onDateChange(): void {
    const array = this.packages_array.filter((data: { date: string; }) => this.formatSelectedDate(data.date, "dataBase") === this.formatSelectedDate(this.selected_date, "selected"));
    if (array.length > 0) {
      this.array_filtered_packets = [...array];
    }
  }

  formatSelectedDate(date: string, format_type: string): string {
    if (!date) {
      return '';
    }
    let format_date = "";
    if (format_type === "selected") {
      const parsedDate = parseISO(date);
      format_date = format(parsedDate, 'yyyy-MM-dd', { locale: enUS });
    } else if (format_type === "dataBase") {
      const parts = date.split(' ');
      if (parts.length >= 3) {
        const formattedDate = parts.slice(1, 4).join(' ');
        format_date = format(new Date(formattedDate), 'yyyy-MM-dd', { locale: enUS });
      } else {
        console.error("Formato de fecha no reconocido:", date);
      }
    }
    return format_date;
  }
}

//willianinsignares@gmail.com
