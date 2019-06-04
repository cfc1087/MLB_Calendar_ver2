import { Component, OnInit, ViewChild } from '@angular/core';


import { Dates } from './model/Dates';
import { DatesService } from './Service/dates.service';
import { Team } from './model/Team';

import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

import { FullCalendar } from 'primeng/fullcalendar';
import { element, elementStyling } from '@angular/core/src/render3';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('calendar') fc: FullCalendar
  events: any[];
  options: any;
  title = 'MLB-app';
  dates: Dates[];
  teamList: Team[];
  color: String ;
  team: Team;

  constructor(private service: DatesService, public dialog: MatDialog) {
this.color = '#fff'
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
      aspectRatio: 2.0,
      contentHeight: 850,
      eventTextColor: "#ffff",
      eventRender: (event) => {

       /* let element: Element = event.el;
        let s: String = event.event.title;

        let away: String = s.substring(s.lastIndexOf('@') + 1, s.length);
        let home: String = s.split("VS")[1];

       if (event.event.backgroundColor === this.team.color) {
          element.insertAdjacentHTML('beforeend', '<p style="color:white; text-align:center">vs. ' + home + '</p>');
        }
        else {
          element.insertAdjacentHTML('beforeend', '<p style="color:black; text-align:center">' + '@ ' + away + '</p>');
        }*/

      }
    };
   
  }
getColor(){
  return this.color;
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
        this.clearEvents();
        //console.log(schedule[0].games[0].gameDate)



        for (let event of schedule) {
          let startTime: string = event.games[0].gameDate;

         
          // console.log(event.games[0].gameDate);
          if (event.games[0].home === this.team.name) {
            this.events.push({
              title: '\nVS\n' + event.games[0].away,
              start: startTime,
              //rendering: 'background',
              color: this.team.color,



            })
          } else {
            this.events.push({
              title: '\n@\n' + event.games[0].home,
              start: startTime,//event.date,
             // rendering: 'background',
              color: '#bcbcbc',

            })
          }
        }

      });



    });

  }
  clearEvents() {
    this.events = [];

  }


}