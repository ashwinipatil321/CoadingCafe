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

      this.authenticationService.sendOTPService(this.model.email)
          .subscribe(
              data => {

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
}
