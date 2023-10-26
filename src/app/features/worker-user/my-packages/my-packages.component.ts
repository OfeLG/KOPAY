import { Component} from '@angular/core';


@Component({
  selector: 'app-my-packages',
  templateUrl: './my-packages.component.html',
  styleUrls: ['./my-packages.component.scss']
})
export class MyPackagesComponent {
  send_user_type: string = 'worker';
  
  selectedDate: Date = new Date();

  onDateChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const selectedDate = new Date(target.value);
    if (!isNaN(selectedDate.getTime())) {
      this.selectedDate = selectedDate;
    }
  }
}
