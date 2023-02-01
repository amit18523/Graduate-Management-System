import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ScheduleInterviewService {

  constructor(private _http: HttpClient) { }
 
  _url = 'http://localhost:8900/addInterview';
  _urlOne = 'http://localhost:8900/allInterview';
  _urlSelected = 'http://localhost:8900/addSelectedGrad';
  _urlGradSelected = 'http://localhost:8900/gradSelected';
  _urlDeleteSelectedGrad = 'http://localhost:8900/deleteSelectedGrad';
  _urlCheckGradInterviewScheduled = 'http://localhost:8900/getInterviewScheduledGrads';

  getInterview(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postInterview(empData: any) : Observable<any> {
    console.log("hi " + " " + empData);
    return this._http.post<any>(this._url, empData);
  }
  addSelectedGrad(empData: any): Observable<any>{
    return this._http.post(this._urlSelected,empData);
  }
  updateGradSelected(empData: any): Observable<any>{
    return this._http.post(this._urlGradSelected,empData);
  }
  deleteSelectedGrad(empData: any): Observable<any>{
    return this._http.post(this._urlDeleteSelectedGrad,empData);
  }
  getInterviewScheduledGrads(jobData: any): Observable<any>{
    return this._http.post(this._urlCheckGradInterviewScheduled,jobData);
  }

}
