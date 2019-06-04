import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dates } from '../model/Dates';
import { TemplateAst } from '@angular/compiler';
import { formatDate, DatePipe } from '@angular/common';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Events } from '../model/Events';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  monthSelected: String;

  now = new Date();
  constructor(private http: HttpClient, private datePipe: DatePipe) {

  }
  /*getDates(teamSelected: String): Observable<any> {

    return this.http.get<Events[]>('http://localhost:8080/' + teamSelected.replace(/ /g, ""));
  
 //   return this.http.get('http://localhost:8080/' + teamSelected.replace(/ /g, ""));//'?monthSelected='+this.monthSelected);
  }*/
  getDates(teamSelected: String): Observable<any> {

    return this.http.get<Events[]>('/api/'+teamSelected.replace(/ /g, ""));

  }
  getTeamList(): Observable<any> {
    return this.http.get('http://localhost:8080/');
  }

  getNow() {
    return this.datePipe.transform(this.now, 'yyyy-MM-dd');
  }

}
