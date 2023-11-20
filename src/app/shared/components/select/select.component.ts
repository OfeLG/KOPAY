import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit{
  @Input() selectedValue!: string;
  @Input() select_type!: String;
  @Input() options: string[] = [];
  @Output() send_option = new EventEmitter<any>();

  showOptions: boolean = false;
  public call: string = ""

  constructor(){}

  ngOnInit() {
    console.log("EL ARRAY DEL SELECT ES: "+ this.options)
    if (this.selectedValue=='Producto'){
      this.call = "name";
    }else if (this.selectedValue=='Paquete'){
      this.call = "id_package";
    }
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  getOptionValue(option: any, change: boolean): string {
    if(this.select_type != "package"){
      this.selectedValue = option[this.call];
    }else{
      this.selectedValue = option;
    }

    if (change){
      this.send_option.emit(this.selectedValue);
      this.toggleOptions();
    }
    return this.selectedValue;
  }
}
