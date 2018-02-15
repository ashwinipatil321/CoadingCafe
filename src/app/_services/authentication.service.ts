import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Login} from '../_models/login';
// import {UserOTP} from '../_models/Otp';


// import {header.interceptor} from '../_helpers/index'
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public  loginUserUrl="http://localhost:8080/sendOTP";
    public verfiyOTPrUrl="http://localhost:8080/verifyOTP";
   constructor(private http: HttpClient) { }


    sendOTPService(login: Login) {

        console.log("in auth service"+login);
         return this.http.post(this.loginUserUrl, login);

    }
    verfiyOtp(userOTP:Login)
    {
      console.log("in auth service"+userOTP);
       return this.http.post(this.verfiyOTPrUrl, userOTP);
    }
}
