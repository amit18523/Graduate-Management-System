import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,Observable , BehaviorSubject} from 'rxjs';
import { Task } from './graduate/feedback/shared/models/task.model';
@Injectable({
  providedIn: 'root'
})
 export class GlobalService {

  batchEmitter = new BehaviorSubject<any>(-1);
  newVal = new Subject<any>();
  constructor(private _http: HttpClient) { }
  
  _url = 'http://localhost:8900/addApproval';
  _urlGetAllTopics = 'http://localhost:8900/allTopics';
  _urlGetAllBatchTable = 'http://localhost:8900/allBatches'
  _urlTwo = 'http://localhost:8900/allApproval';
  _urlThree = 'localhost:8900/trainingCurriculumByBatchId/1';
  _urlGetEmployees = 'http://localhost:8900/allEmployees'
  _urlGetJob = 'http://localhost:8900/allJobs'
  _urlGetProjectTopics = 'http://localhost:8900/allProjectTopics'
  _urlGetFeedback = 'http://localhost:8900/allFeedback';
  _urlGetBuddy = 'http://localhost:8900/allBuddy';

  
  getBuddy(){
    return this._http.get<any>(this._urlGetBuddy);
  }
  getFeedback(){
    return this._http.get< any >(this._urlGetFeedback);  
  }
  getApproval(batch: any): Observable<any> {
    let urlx = `http://localhost:8900/approval/${batch}`;
    return this._http.get< any >(urlx);  
  }
  getJob():Observable<any> {
    return this._http.get<any>(this._urlGetJob);
  }
  getProjectTopics():Observable<any>{
    return this._http.get<any>(this._urlGetProjectTopics);
  }

  getUser(username: any): Observable<any> {
    let urlx = `http://localhost:8900/trainingCurriculumByBatchId/${username}`;
    return this._http.get< any >(urlx);  
  }

  getAllEmployees():Observable<any> {
    return this._http.get<any>(this._urlGetEmployees);
  }

  getAllBatches():Observable<any>{
    return this._http.get<any>(this._urlGetAllBatchTable);
  }
  getTopic(): Observable<any>{
    return this._http.get<any>(this._urlGetAllTopics);
  }

  getTopicid(): Observable<any>{
    return this._http.get<any>(this._urlThree);
  }

  postApproval(userData: any) {
    console.log(userData);
    return this._http.post<any>(this._url, userData);
  }

  emitBatchId(batchid : any){
    this.batchEmitter.next(batchid);
  }
}
