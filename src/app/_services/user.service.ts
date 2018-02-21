import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import {  User } from '../_models/user';


import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class UserService {
  public addAdminData ="http://localhost:8080/register";
  public addEmailAddurl="http://localhost:8080/inviteuser";

  constructor(private http: HttpClient) { }

  create(user: User) {
   console.log("in create user",user);
   return this.http.post(this.addAdminData, user);
 }
 saveAdmin(adminList: any){
    console.log("inside service",adminList);
    return this.http.post(this.addEmailAddurl, adminList);
  }
}
