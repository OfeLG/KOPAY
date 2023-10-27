import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input()
  type_user!: string;
  @Output() send_navbar_route = new EventEmitter<string>();

  // public navbar_route: String = "";

  constructor(){
  }

  sendRoute(navbar_route: string){
    this.send_navbar_route.emit(navbar_route);
  }
}
