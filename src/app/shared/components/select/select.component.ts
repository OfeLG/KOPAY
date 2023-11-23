import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnChanges{
  @Input() selectedValue!: string;
  @Input() select_type!: String;
  @Input() options: any = [];
  @Output() send_option = new EventEmitter<any>();

  showOptions: boolean = false;
  public call: string = ""
  public options_update!: string[];

  constructor(){}

  ngOnChanges() {
    if (this.selectedValue=='Producto'){
      this.call = "name";
    }else if (this.selectedValue=='Paquete'){
      this.call = "id_package";
    }
    this.options_update = [...this.options];
    if(this.select_type=='package' || this.select_type == 'employee'){ ///VERIFICA SI EMPLOYEE ENTRA O NO, OJO
      this.removeOptions();
    }
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  removeOptions() {
    this.options_update = [...this.options]
    const index = this.options_update.findIndex(option => option == this.selectedValue); // Encontrar el índice del array que tiene el dato que deseo eliminar
    if (index !== -1) { // Eliminar la opcion que ya esta en el selectedValue
      this.options_update.splice(index, 1);
    }
  }

  getOptionValue(option: any): string {
    if (typeof option != 'string') {
      return option[this.call];
    } 
    return option;
  }

  emitOptionValue(option: any, event: Event): void {
    this.selectedValue = this.getOptionValue(option);
    this.send_option.emit(option);
    this.toggleOptions();
    this.removeOptions();
    event.stopPropagation();
  }
}
