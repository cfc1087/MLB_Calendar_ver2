import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DatesService } from '../Service/dates.service';
import { MatDialogRef } from '@angular/material';
var DialogComponent = /** @class */ (function () {
    function DialogComponent(data, service, dialogRef) {
        this.data = data;
        this.service = service;
        this.dialogRef = dialogRef;
    }
    DialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getTeamList().subscribe(function (data) {
            _this.teamList = data;
        });
    };
    DialogComponent.prototype.confirm = function () {
        this.dialogRef.close(this.team);
    };
    DialogComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dialog',
            templateUrl: './dialog.component.html',
            styleUrls: ['./dialog.component.css']
        }),
        tslib_1.__param(0, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object, DatesService, MatDialogRef])
    ], DialogComponent);
    return DialogComponent;
}());
export { DialogComponent };
//# sourceMappingURL=dialog.component.js.map