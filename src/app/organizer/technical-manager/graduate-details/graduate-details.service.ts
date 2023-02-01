import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GraduateDetailsService {

  constructor(private _http: HttpClient) { }
 
  _url = 'http://localhost:8900/addEmployee';
  _urlOne = 'http://localhost:8900/allEmployees';
  getGrad(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postGrad(userData: any) {
    console.log(userData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/plain, */*',
        'Content-Type': 'application/json' // We send JSON
      }),
      responseType: 'text' as 'json'  // We accept plain text as response.
    };
    return this._http.post<string>(this._url, userData, httpOptions);
  }
  // postGrad(userData: any) {
  //   console.log(userData);
  //   return this._http.post<GradDetails>(this._url, userData);
  // }
}
