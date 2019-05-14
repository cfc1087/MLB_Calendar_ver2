import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClientModule} from '@angular/common/http';
//primeng components
import {FullCalendarModule} from 'primeng/fullcalendar';
import { DatePipe } from '@angular/common';
 


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    
  ],
  exports:[
    
  ],
  
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
