import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Team } from '../model/Team';
import { DatesService } from '../Service/dates.service';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  teamList: Team[];
  team: Team;
  modalTitle: String;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: DatesService, public dialogRef: MatDialogRef<Team>) {


  }

  ngOnInit() {
    this.service.getTeamList().subscribe(data => {
      this.teamList = data;
    })
  }

  confirm() {
    this.dialogRef.close(this.team);
  }
}
