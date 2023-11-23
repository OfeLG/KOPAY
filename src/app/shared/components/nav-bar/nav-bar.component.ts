import { Component, Output, EventEmitter, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit{
  @Input() user: any; 
  @Output() send_navbar_route = new EventEmitter<string>();

  constructor(
    public app_service: AppService
  ){}

  ngOnInit() {
  }

  sendRoute(navbar_route: string){
    this.send_navbar_route.emit(navbar_route);
    if (navbar_route=="login"){
      this.app_service.logout();
      console.log("Saliooo");
    }
  }
}
