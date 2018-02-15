import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import {  User } from '../_models/user';


// import { IUser } from '../interface';
// //  import { ConfigService } from '../configSettings/config.service';
// import { User } from './_models/index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class UserService {
  public addAdminData="http://localhost:8080/register";
  public addEmailAddurl="http://localhost:8080/saveAdmin";

//  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  create(user: User) {
   console.log("in create user",user);
   return this.http.post(this.addAdminData, user);
 }
 saveAdmin(adminList: any){
    console.log("inside service",adminList);
    return this.http.post(this.addEmailAddurl, adminList);
  }




 // getTokenLocalStorage() {
 //   var headers = new Headers();
 //   headers.set('Content-Type', 'application/json');
 //   headers.set('Authorization', localStorage.getItem("token"));
 //   return headers;
 // }

}


//
// url: string;
// constructor(private http: Http, private config: ConfigService)
// {
//   this.url = config.getApiUrl();
// }
//
// AddUser(name: string, email: string)
// {
//
//   let user =
//     {
//       'name': name,
//       'email':email
//     };
//   return this.http.post(this.url +"Account/AddUser", user).toPromise()
//     .then
//     (
//     res => res.json() as IUser
//     )
// }
