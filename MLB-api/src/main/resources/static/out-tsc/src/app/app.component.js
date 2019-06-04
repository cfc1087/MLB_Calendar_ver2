import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DatesService } from './Service/dates.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
var AppComponent = /** @class */ (function () {
    function AppComponent(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.title = 'MLB-app';
    }
    AppComponent.prototype.ngOnInit = function () {
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
            aspectRatio: 2.25
        };
        //this.service.getDates("Atlanta Braves").subscribe(data=>{
        //  this.dates = data;
        //});
    };
    AppComponent.prototype.click = function () {
        var _this = this;
        this.service.getTeamList().subscribe(function (data) {
            _this.teamList = data;
        });
        this.openModal();
    };
    AppComponent.prototype.openModal = function () {
        var _this = this;
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            team: this.team,
            title: 'Team Selection'
        };
        var dialogRef = this.dialog.open(DialogComponent, {
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(function (selection) {
            _this.team = selection;
            console.log("GETTING SCHEUDULE");
            console.log(_this.service.getDates(_this.team));
        });
        console.log(this.team);
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DatesService, MatDialog])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map