import { Component, OnInit, ViewChild } from '@angular/core';


import { Dates } from './model/Dates';
import { DatesService } from './Service/dates.service';
import { Team } from './model/Team';

import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

import { FullCalendar } from 'primeng/fullcalendar';
import { element } from '@angular/core/src/render3';



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
  color: String;
  team: Team;

  constructor(private service: DatesService, public dialog: MatDialog) {

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
        var bgEventTitle = document.createElement('div');

        bgEventTitle.style.position = 'absolute';
        bgEventTitle.style.bottom = '0';
        bgEventTitle.classList.add('fc-event');
        bgEventTitle.innerHTML = '<span class="fc-title">' + event.title + '</span>';
        /* set container element positioning to relative so the positioning above will work */
        // console.log(event.el)
      event.el
        //event.el.html(bgEventTitle);
        //event.el.css('position', 'relative').html(bgEventTitle);
      }
    };

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
      this.service.getDates(this.team.name).subscribe(schedule => {
        this.clearEvents();



        for (let event of schedule) {
          if (event.games[0].home === this.team.name) {
            this.events.push({
              title: this.team.name + ' VS ' + event.games[0].away,
              start: event.date,
              rendering: 'background',
              color: this.team.color,


            })
          } else {
            this.events.push({
              title: this.team.name + ' @ ' + event.games[0].away,
              start: event.date,
              rendering: 'background',
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