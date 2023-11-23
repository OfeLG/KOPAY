import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-package-registration',
  templateUrl: './package-registration.component.html',
  styleUrls: ['./package-registration.component.scss']
})
export class WorkerUserComponent implements OnInit {

  constructor(public app_service: AppService) { }

  ngOnInit(): void {
    this.app_service.getUserDataFromLocalStorage();
  }

}