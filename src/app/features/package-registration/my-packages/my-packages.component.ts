import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  options_array: string[] = ["Cortador", "Guarnecesor", "Ensamblador"];

  public array_data: any;
  public array_filtered_packets: any;
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
            this.array_data = response.packages;
            state = "Completed";
          } else {
            this.array_data = response.package;
            state = "Pending";
          }
          this.changeTableState(state);
        }
      },
      (error) => {
        console.error("Error al obtener paquetes:", error);
      }
    );
  }

  changeTableState(value: String) {
    this.table_status = value;
    let array;
    if (value == "all") {
      array = this.array_data.filter((data: { state: String; }) => data.state === 'Closed' || data.state === 'Completed');
    } else {
      array = this.array_data.filter((data: { state: String; }) => data.state === value);
    }
    this.array_filtered_packets = [...array];
    this.total_package.total_money = this.array_filtered_packets.reduce((cumulative: number, data: any) => {
      return cumulative + parseFloat(data.cumulative_total);
    }, 0);
    this.total_package.quantity = this.array_filtered_packets.reduce((product: number, data: any) => {
      return product + parseFloat(data.product_quantity);
    }, 0);
  }

  navigate(page: string, type_login: boolean) {
    if (type_login) {
      this._router.navigate(['packageRegistration/' + page]);
    } else {
      this._router.navigate(['mainPages/' + page]);
    }
  }

  onDateChange(): void {
    const array = this.array_data.filter((data: { date: string; }) => this.formatSelectedDate(data.date, "dataBase") === this.formatSelectedDate(this.selected_date, "selected"));
    if (array.length > 0) {
      this.array_filtered_packets = [...array];
    }
  }

  receiveSearchResults(results: any[]) {
    this.array_filtered_packets = [...results];
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