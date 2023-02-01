import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrainerAssignService {

  constructor(private _http: HttpClient) { }
 
  _url = 'http://localhost:8900/addTrainerAssigned';
  _urlOne = 'http://localhost:8900/allTrainerAssigned';
  getTrainerAssign(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postTrainerAssign(userData: any) {
    console.log(userData);
    return this._http.post<any>(this._url, userData);
  }
}
