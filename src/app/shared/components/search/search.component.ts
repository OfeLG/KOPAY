import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges {
  @Input()
  array_search: Array<any> = [];
  @Input()
  type_search: string = "";
// En el componente de búsqueda
  @Output() searchResult = new EventEmitter<any[]>();

  public search: string= '';
  public results: Array<any> = [];
  public originalArray: Array<any> = [];


  public input_status: Boolean;
  public type_user: string = this.app_service.data_user.role;

  constructor(public app_service: AppService){
    this.input_status = true;
  }
  ngOnChanges() {
    // Verificar si array_search es válido antes de asignar a originalArray
    if (Array.isArray(this.array_search)) {
      this.originalArray = this.array_search.map(item => ({ ...item }));
    }
  }


  resetResults() {
    this.input_status=true;
  }

  searchElements() {
    if (this.search.trim() === '') {
      this.results = [...this.originalArray];
    }
    else{
      if(this.type_search == "package"){
        if(this.type_user == "admin"){
          this.results = this.originalArray.filter((item) => {
            return (item.id_number ?? '').toString().toLowerCase().includes(this.search.toLowerCase());
          });
        }else{
          this.results = this.originalArray.filter((item) => {
            return (item.id_package ?? '').toString().toLowerCase().includes(this.search.toLowerCase());
          });
        }
      }
      else if(this.type_search == "product"){
          this.results = this.originalArray.filter((item) => {
            return (item.name ?? '').toString().toLowerCase().includes(this.search.toLowerCase());
          });
      }
      else if(this.type_search == "employee"){
        this.results = this.originalArray.filter((item) => {
          return (item.name ?? '').toString().toLowerCase().includes(this.search.toLowerCase());
        });
    }
    }
    this.searchResult.emit(this.results);
  }
}

