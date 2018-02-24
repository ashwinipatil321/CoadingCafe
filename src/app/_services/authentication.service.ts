import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Login} from '../_models/login';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public  loginUserUrl="http://localhost:8080/sendotp";
    public verfiyOTPrUrl="http://localhost:8080/verifyotp";
   constructor(private http: HttpClient) { }

    sendOTPService(email: string) {
        // console.log("in auth service"+login);
        //  return this.http.post(this.loginUserUrl, login);
        return this.http.post(this.loginUserUrl, null,{
    headers: new HttpHeaders().set('email', email).set('Content-Type', 'application/json')
    })
  // }).map((response: Response) => {
  //   console.log("data send sucessfully...")
  //   }
  // }
}
    verfiyOtp(userOTP:Login)
    {
      console.log("in auth service"+userOTP);
       return this.http.post(this.verfiyOTPrUrl, userOTP);
    }
}
