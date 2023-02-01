import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StatusServiceService {
  
  constructor(private _http: HttpClient) { }
  getStatusbyBatch(batchId: any): Observable<any> {
    let urlx = `http://localhost:8900/approval/${batchId}`;
    return this._http.get< any >(urlx);  
  }
  
  getStatus(): Observable<any> {
    let urlx = `http://localhost:8900/allApproval`;
    return this._http.get< any >(urlx);  
  }

}
