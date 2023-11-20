import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input()
  array_search: Array<any> = [];
  @Input()
  type_search: string = "";
// En el componente de búsqueda
  @Output() searchResult = new EventEmitter<any[]>();

  public search: string= '';
  public results: Array<any> = [];


  public input_status: Boolean;

  constructor(){
    this.input_status = true;
  }

  searchElements() {
    if (this.search.trim() === '') {
      this.results = [];
      return;
    }
    else{
      if(this.type_search == "package"){
        this.results = this.array_search.filter((item) => {
          return (item.id_user ?? '').toString().toLowerCase().includes(this.search.toLowerCase());
        });
      }
      else if(this.type_search == "product"){
          this.results = this.array_search.filter((item) => {
            return (item.name ?? '').toString().toLowerCase().includes(this.search.toLowerCase());
          });
      }
    }
    this.searchResult.emit(this.results);
  }
}

