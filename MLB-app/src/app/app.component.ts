import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dates } from './model/Dates';
import { DatesService } from './Service/dates.service';
import { Team } from './model/Team';

import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 events:any[];
 options:any;
  title = 'MLB-app';
  dates: Dates[];
  teamList:Team[];
  

  constructor(private service:DatesService){

  }
ngOnInit(){
  this.options = {
    plugins: [dayGridPlugin],
    defaultDate: this.service.getNow(),
    header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
    }
  };




 this.service.getTeamList().subscribe(data=>{
   this.teamList = data;
 });
 //this.service.getDates("Atlanta Braves").subscribe(data=>{
//  this.dates = data;
//});
} 

}