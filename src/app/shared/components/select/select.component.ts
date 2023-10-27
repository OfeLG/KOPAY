import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() selectedValue!: string;
  @Input() select_type!: String;
  @Input() options: string[] = [];

  showOptions: boolean = false;

  constructor(){}

  ngOnInit() {
    if(this.selectedValue!='Producto' && this.selectedValue!='Paquete' && this.selectedValue!='Filtrar'){
      if (!this.options.includes(this.selectedValue)) {
        this.selectedValue = "Pendiente";
        this.select_type = "Pendiente";
      }
    }
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  selectOption(option: string) {
    this.selectedValue = option;
    this.showOptions = false;
  }
}
