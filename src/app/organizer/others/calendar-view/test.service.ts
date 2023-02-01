import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private h:HttpClient) { }

   getObj() : Observable<any>{
    return this.h.get('https://reqres.in/api/users?page=2');
  }

}
