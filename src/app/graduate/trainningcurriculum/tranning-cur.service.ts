import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TranningCurService {

  constructor(private _http: HttpClient) { }

  gettranningCirriculum(batchId: any): Observable<any> {
    let url = `http://localhost:8900/trainingCurriculumByBatchId/${batchId}`;
    return this._http.get< any >(url);  
  }
}
