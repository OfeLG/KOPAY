import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss']
})
export class PackageDetailComponent implements OnInit {
  public type_user: string = "";
  options_array: string[] = ["Closed"];
  public detail_data: any;
  public data_employee: any;

  constructor(
    private _router: Router,
    public app_service: AppService,
  ) {}

  ngOnInit() {
    this.type_user = this.app_service.data_user.role;
    this.loadData();
  }

  private loadData() {
    if (this.type_user == "admin"){
      this.app_service.getaUser().subscribe(
        (response: any) => {
          this.data_employee = response.users;
        },
        (error) => console.error("Error al obtener los detalles del paquete seleccionado: ", error)
      );
    }
    this.app_service.getPackageDetails().subscribe(
      (response: any) => {
        this.detail_data = response.package;
      },
      (error) => console.error("Error al obtener los detalles del paquete:", error)
    );
  }

  navigate(page: string) {
    if (page == "login") {
      this._router.navigate(['mainPages/' + page]);
    } else {
      this._router.navigate(['packageRegistration/' + page]);
    }
  }

  generatePDF() {
    const pdf = new jsPDF(); // Instancia de jsPDF
  
    // Agrega contenido al PDF (puedes personalizar esto según tus datos)
    pdf.text('Hola, este es mi PDF generado desde Angular', 10, 10);
  
    // Guarda el PDF (puedes ajustar el nombre del archivo según tus necesidades)
    pdf.save('mi_archivo.pdf');
  }

}



