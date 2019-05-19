import { Component, OnInit } from '@angular/core';


import { Dates } from './model/Dates';
import { DatesService } from './Service/dates.service';
import { Team } from './model/Team';

import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  events: any[];
  options: any;
  title = 'MLB-app';
  dates: Dates[];
  teamList: Team[];
  team: Team;
  color: String;
  constructor(private service: DatesService, public dialog: MatDialog) {

  }
  getColor() {
    console.log(this.color)
    return this.color
  }
  ngOnInit() {

    this.options = {
      plugins: [dayGridPlugin],
      defaultDate: this.service.getNow(),
      customButtons: {
        myCustomButton: {
          text: 'Team Selection',
          click: this.click.bind(this)
        }
      },
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'myCustomButton',
      },
      height: 850,
      aspectRatio: 2.25,
     
      eventBackgroundColor:'#4286f4',
     // eventColor: 'rgb(0,0,0)'
    };

    //this.service.getDates("Atlanta Braves").subscribe(data=>{
    //  this.dates = data;
    //});
  }

  click() {
    this.service.getTeamList().subscribe(data => {
      this.teamList = data;
    });
    this.openModal();
  }
  openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      team: this.team,
      title: 'Team Selection'
    }
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '300px'
    });


    dialogRef.afterClosed().subscribe(selection => {
      this.team = selection;
      this.color = this.team.color;
      this.service.getDates(this.team.name).subscribe(schedule => {
        this.events = schedule;
console.log(this.events)

      });
      this.events = [{
        start:'2019-05-19',
        rendering:'background'

      }]
this.options = {
  rendering:'background',
  eventBackgroundColor:this.color
  //eventColor:this.color
}
    });

  }

}