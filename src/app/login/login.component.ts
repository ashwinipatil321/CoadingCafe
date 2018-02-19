import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  codingcafelogo = "/assets/img/codingcafelogo.png";
  model: any = {};
   loading = false;
     returnUrl: string;

  constructor( private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

  ngOnInit() {
       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  sendOTP() {
      this.loading = true;
      this.authenticationService.sendOTPService(this.model)
          .subscribe(
              data => {
                console.log("OTP Send Sucessfully");
                  // this.router.navigate([]);
                  alert('Login successfully');
              },
              error => {
                  this.loading = false;
              });
}
  verfiyOtp() {
      this.loading = true;
      console.log("this model otp",this.model)
      this.authenticationService.verfiyOtp(this.model)

          .subscribe(
              data => {
                console.log("login Sucessfully");
                  // this.router.navigate([]);
              },
              error => {
                  this.loading = false;
              });
  }

//
// login() {
//         // console.log("login component.ts"+this.model.email+""+this.model.password+"::::::::"+this.model);
//         this.loading = true;
//         console.log(this.model);
//         this.authenticationService.login(this.model)
//             .subscribe(
//                 data => {
//                    console.log("login  data");
//                   console.log(data.responseMessage);
//                   let token=data.responseMessage;
//                      //console.log(JSON.parse(data['_body']));
//
//                          if(token!=null){
//                          this.loading = false;
//                          localStorage.setItem('token',  token);
//
//                          this.router.navigate(['/home']);
//                      }
//                      else{
//                         this.loading = false;
//                      }
//               },
//                 error => {
//                     console.log(error);
//                     this.loading = false;
//                 });
//
//     }
}
