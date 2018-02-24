import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { User } from '../_models/user';
import { Subject } from 'rxjs/Subject';


import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class UserService {
  public addAdminData = "http://localhost:8080/register";
  public inviteuser = "http://localhost:8080/inviteuser";
  public contributorCountUrl = "http://localhost:8080/getcontributorcount";
  public approverCountUrl= " http://localhost:8080/getapprovercount";
  public viewerCountUrl= " http://localhost:8080/getviewercount";


  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  create(user: User) {
    console.log("in create user", user);
    return this.http.post(this.addAdminData, user);
  }
  saveAdmin(adminList: any) {
    console.log("inside service", adminList);
    return this.http.post(this.inviteuser, adminList);
  }

  getContributorCount() {
    return this.http.get(this.contributorCountUrl);
  }
  getApproverCount() {
    return this.http.get(this.approverCountUrl);
  }
  getViewerCount() {
    return this.http.get(this.viewerCountUrl);
  }
}
