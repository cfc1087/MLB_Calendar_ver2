import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dates } from '../model/Dates';
import { TemplateAst } from '@angular/compiler';
import { formatDate, DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class DatesService {

  monthSelected: String;

  now = new Date();
  constructor(private http: HttpClient, private datePipe: DatePipe) {

  }
  getDates(teamSelected: String): Observable<any> {


    return this.http.get('http://localhost:8080/' + teamSelected.replace(/ /g, ""));//'?monthSelected='+this.monthSelected);
  }
  getTeamList(): Observable<any> {
    return this.http.get('http://localhost:8080');
  }
  getTeamColor(teamSelected: String) {
    return this.http.get('http://localhost:8080' + teamSelected.replace(/ /g, "") + '/color');
  }
  getNow() {
    return this.datePipe.transform(this.now, 'yyyy-MM-dd');
  }

}
