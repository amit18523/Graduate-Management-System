import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientrequirementsService {

  constructor(private _http: HttpClient) { }
 
  _url = 'http://localhost:8900/addRequirements';
  _urlOne = 'http://localhost:8900/allRequirements';
  getClientRequirements(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postClientRequirements(userData: any) {
    console.log(userData);
    return this._http.post<any>(this._url, userData);
  }
}
