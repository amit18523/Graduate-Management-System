import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedDashBoardService {

  constructor(private _http : HttpClient) { }
  _urlGetAllBatchTable = 'http://localhost:8900/allBatches';
  _urlGetbyBatchName = 'http://localhost:8900/employeeCountByBatchId/{batchId}'
  getAllBatches():Observable<any>{
    return this._http.get<any>(this._urlGetAllBatchTable);
  }
   getcount(batchId: any): Observable<any> {
    let urlx = `http://localhost:8900/employeeCountByBatchId/${batchId}`;
    return this._http.get< any >(urlx);  
  }
  getcountselected(batchId: any): Observable<any> {
    let urlx = `http://localhost:8900/selectedCountByBatchId/${batchId}`;
    return this._http.get< any >(urlx);  
  }
  getcountRequstion(batchId: any): Observable<any> {
    let urlx = `http://localhost:8900/RequirementsCountByBatchId/${batchId}`;
    return this._http.get< any >(urlx);  
  }
  // http://localhost:8900/requirementsByBatchId/5000
  getAllRequstion(batchId: any): Observable<any> {
    let urlx = `http://localhost:8900/requirementsByBatchId/${batchId}`;
    return this._http.get< any >(urlx);  
  }
}
