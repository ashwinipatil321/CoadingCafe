import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ContributorService
{
  constructor(private http: HttpClient) { }

  public getContributorUrl = " http://localhost:8080/getcontributorcount";

getContributors()
{
  return this.http.get(this.getContributorUrl)
  .map((response: Response) => {
      let resData = response;
      return resData;
    })
}
}
