import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ContactProvider {

  private api: string = "https://randomuser.me/api/?results=10";

  constructor(public http: HttpClient) {
    console.log('Hello ContactProvider Provider');
  }

  getUsers(): Observable<any>
  {
    return this.http.get<any>(this.api);
  }


}
