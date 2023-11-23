import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss']
})
export class PackageDetailComponent implements OnInit {
  @ViewChild('contenidoPDF', { static: false }) contenidoPDF!: ElementRef;
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

  payment(id_employee: string, id_package:string, event: string){
    this.app_service.postPay(id_employee, id_package).subscribe(
      (response) => {
        console.log("Se realizó el pago: "+ response)
      },
      (error) => {
        console.error('Error al realizar pago:', error);
      }
    );
  }

  generatePDF() {
    const pdf = new jsPDF(); // Instancia de jsPDF
    // Captura el HTML del componente como una imagen (canvas)
    html2canvas(this.contenidoPDF.nativeElement).then((canvas) => {
      // Convierte el canvas a imagen (formato PNG por defecto)
      const imageData = canvas.toDataURL('image/png');
      // Ajusta estos valores según tus necesidades
      const x = 10;
      const y = 10;
      const w = pdf.internal.pageSize.getWidth() - 20; // Ancho de la imagen en el PDF
      const h = (canvas.height * w) / canvas.width; // Calcula la altura proporcional
      // Agrega la imagen al PDF
      pdf.addImage(imageData, 'PNG', x, y, w, h);
      // Guarda el PDF (puedes ajustar el nombre del archivo según tus necesidades)
      pdf.save('mi_archivo.pdf');
    });
  }
  
}

