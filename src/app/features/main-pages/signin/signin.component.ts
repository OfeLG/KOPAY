import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  public show_message: boolean;

  constructor(private _router: Router) {
    this.show_message = false;
  }

  navigate(page: String){
    this._router.navigate(['mainPages/'+page]);
  }
}
