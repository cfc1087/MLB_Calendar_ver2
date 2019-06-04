import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
var DatesService = /** @class */ (function () {
    function DatesService(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.now = new Date();
    }
    DatesService.prototype.getDates = function (teamSelected) {
        console.log("getting schedule");
        console.log('http://localhost:8080/' + teamSelected.replace(/ /g, ""));
        return this.http.get('http://localhost:8080/ChicagoWhiteSox'); //'http://localhost:8080/'+teamSelected.replace(/ /g,""));//'?monthSelected='+this.monthSelected);
    };
    DatesService.prototype.getTeamList = function () {
        return this.http.get('http://localhost:8080');
    };
    DatesService.prototype.getNow = function () {
        return this.datePipe.transform(this.now, 'yyyy-MM-dd');
    };
    DatesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, DatePipe])
    ], DatesService);
    return DatesService;
}());
export { DatesService };
//# sourceMappingURL=dates.service.js.map