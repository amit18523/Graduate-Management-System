import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlockedService {
  constructor(private _http: HttpClient) { }
 
  _url = 'http://localhost:8900/addBlocked';
  _urlOne = 'http://localhost:8900/allBlocked';
  _urlScheduleInterview = 'http://localhost:8900/interviewScheduled';
  _urlcheck = 'http://localhost:8900/getEligibleGrads';
  x:any;
  getBlocked(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postBlocked(empData: any) {
    console.log(empData);
    this.x=empData;
    return this._http.post<any>(this._url, empData);
  }
  checkEligiblity(data : any): Observable<any>{
   
    return this._http.post(this._urlcheck, data);
  }
  updateBlockedscheduleInterview(empData: any): Observable<any>{
      return this._http.post(this._urlScheduleInterview,empData)
  }
}