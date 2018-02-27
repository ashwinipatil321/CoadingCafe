import { Component, OnInit,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material';
import { UserService } from '../_services/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  model: any = {};
  loading = false;
  registerData:any[];
  codingcafelogo = "/assets/img/codingcafelogo.png";
  name = 'Select teck stack';
  constructor(private router: Router,
    private userService: UserService, private route: ActivatedRoute) {
      this.route.params.subscribe( params => this.model.uuid=params.uuid );
    }

  ngOnInit() {

  }
  register() {
    this.loading = true;
    this.userService.create(this.model)
    .subscribe( data => {
          console.log("User created successfully.");
          this.registerData.push(data);
          this.router.navigate(['/login']);
           alert('User registeration done successfully');
        });
  }
}
