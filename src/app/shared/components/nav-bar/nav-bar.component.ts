import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  @Output() send_navbar_route = new EventEmitter<string>();

  public data: any;

  constructor(
    public app_service: AppService
  ){}

  ngOnInit() {
    this.data = this.app_service.data_user;
  }

  sendRoute(navbar_route: string){
    this.send_navbar_route.emit(navbar_route);
  }
}
