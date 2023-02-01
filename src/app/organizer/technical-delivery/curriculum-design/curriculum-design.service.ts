import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CurriculumDesignService {
 
  constructor(private _http: HttpClient) { }
 
  _url = 'http://localhost:8900/addTopic';
  _urlOne = 'http://localhost:8900/allTopics';
  getTopic(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postTopic(userData: any) {
    console.log(userData);
    return this._http.post<any>(this._url, userData);
  }
}
