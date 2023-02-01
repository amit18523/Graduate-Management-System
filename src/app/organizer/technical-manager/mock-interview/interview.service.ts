import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private _http: HttpClient) { }
 
  _url = 'http://localhost:8900/addMockInterview';
  _urlOne = 'http://localhost:8900/allMockInterview';
  getMockInterview(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postMockInterview(userData: any) {
    console.log(userData);
    return this._http.post<any>(this._url, userData);
  }
}
