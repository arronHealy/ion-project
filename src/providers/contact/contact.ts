import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import http & observables

@Injectable()
export class ContactProvider {

  //api string
  private api: string = "https://randomuser.me/api/?results=10";

  //pass http client to constructor
  constructor(public http: HttpClient) {
    console.log('Hello ContactProvider Provider');
  }

  //get user returns observables from api string 
  getUsers(): Observable<any>
  {
    return this.http.get<any>(this.api);
  }


}
