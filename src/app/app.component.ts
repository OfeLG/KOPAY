import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KOPAY';
  

  constructor(
    private app_service: AppService,
    private _router: Router,
  ) {
    // app_service.getProduct().subscribe();
    // app_service.getEmployee().subscribe();
    //app_service.login("keiddygarcia@gmail.com", "M3d3ll1n").subscribe();
  }

  
}
