import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public array_main: Array<any>;
  public index: number;

  constructor(private _router: Router) {
    this.index = 0;
    this.array_main =[
      {
        title: "Generación de Etiquetas Personalizadas",
        description: "Ofrecemos la posibilidad de crear etiquetas únicas y personalizadas para cada producto fabricado. ¡Dale a tu trabajo el reconocimiento que se merece!",
        img: "../../../../assets/slider_login_1.png"
      },
      {
        title: "Seguimiento de Tu Producción",
        description: "¿Te gustaría saber cuántos productos has fabricado hoy? Con nuestra App, puedes realizar un seguimiento en tiempo real de tu producción diaria y ver tus ganancias acumuladas al instante.",
        img: "../../../../assets/slider_login_2.png"
      },
      {
        title: "Paga Justa y Transparente",
        description: "Olvídate de los cálculos manuales complicados. Nuestra App garantiza que se te pague de manera justa y transparente en función de tu producción.",
        img: "../../../../assets/slider_login_3.png"
      },
      {
        title: "Acceso Seguro y Privado",
        description: "Tus datos y ganancias son seguros con nosotros. Garantizamos un acceso seguro y privado a tu información personal y de producción.",
        img: "../../../../assets/slider_login_4.png"
      },
      {
        title: "Historial de Producción Detallado",
        description: "Consulta tu historial de producción detallado en cualquier momento. Sabrás exactamente cuántos productos has fabricado y cuánto has ganado en cualquier período.",
        img: "../../../../assets/slider_login_5.png"
      }
    ]
  }

  ngOnInit(): void {
    setInterval(() => this.automaticCounter(), 4000 );
  };

  count(operation: String){
    if(operation == "-"){
      if(this.index == 0 ){
        this.index=this.array_main.length-1;
      }else{
        this.index--;
      }
    }else{
      if(this.index==this.array_main.length-1){
        this.index=0;
      }else{
        this.index++;
      }
    }
  }
  
  automaticCounter(){
    if(this.index==this.array_main.length-1){
      this.index=0;
    }else{
      this.index++;
    }
  }

  navigate(page: String){
    this._router.navigate(['mainPages/'+page]);
  }
}
