import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { userLoginData } from './login/loginData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {  
  user = new userLoginData();
  transferData = new BehaviorSubject<userLoginData>(this.user);
  constructor(private _http : HttpClient) { }
  getUser(userName : any): Observable<any> {
    let urlx = `http://localhost:8900/LoginByUserName/${userName}`;
    return this._http.get< any >(urlx);  
  }

  sendData(userData : userLoginData){
    console.log("hi");
    return this.transferData.next(userData);
  }
}



