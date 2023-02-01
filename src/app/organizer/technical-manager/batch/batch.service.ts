import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BatchService {
  constructor(private _http: HttpClient) { }
 

  _url = 'http://localhost:8900/addBatch';
  _urlOne = 'http://localhost:8900/allBatches';
  _urlCheckIfBatchAlreadyExists = 'http://localhost:8900/checkIfBatchAlreadyExists';
  getBatches(): Observable<any>{
    return this._http.get<any>(this._urlOne);
  }
  postBatch(userData: any) {
    console.log(userData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/plain, */*',
        'Content-Type': 'application/json' // We send JSON
      }),
      responseType: 'text' as 'json'  // We accept plain text as response.
    };
    return this._http.post<string>(this._url, userData, httpOptions);
    // return this._http.post<any>(this._url, userData,responseType: 'text');
    // return this._http.post<any>(this._url, userData, {
    //   responseType: 'text'
    // });
  }
  checkIfBatchExists(batchName: string): Observable<any>{
    let urlx = `http://localhost:8900/checkIfBatchAlreadyExists/${batchName}`;
    return this._http.get<any>(urlx);
  }
  // postBatch(userData: any) {
  //   console.log(userData);
  //   return this._http.post<Batch>(this._url, userData);
  // }
}
