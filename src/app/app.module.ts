import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { DatepickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/components/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // DatepickerModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
