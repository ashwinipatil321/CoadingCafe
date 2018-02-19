import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../customer.interface';
import { UserService } from '../_services/index';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})

export class DialogboxComponent implements OnInit {
  public myForm: FormGroup;
  model: any;
  loading = false;
  // imgsrc="/assets/img/ngClickContributor.png";
  contributor = "/assets/img/contributor.png";
  approval = "/assets/img/user1.png";
  viewer = "/assets/img/viewer.png";

  constructor(private _fb: FormBuilder, private userService: UserService, private router: Router) {
    this.myForm = this._fb.group({
      addresses: this._fb.array([])
    });
    this.addAddress();
  }
  @Input('group')
  public adressForm: FormGroup;
  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([])
    });

    // add address
    this.addAddress();

    /* subscribe to addresses value changes */
    // this.myForm.controls['addresses'].valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  initAddress() {
    return this._fb.group({
      email: ['', Validators.required],
      role: ['']
    });
  }
  addRule(address: any, role: string): void {
    console.log(address, role);
    address.controls.role.patchValue(role);
    // this.imgsrc="/assets/img/ngClickContributor.png";

  }
  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    const addrCtrl = this.initAddress();
    control.push(addrCtrl);
  }
  inviteUser(addArrayList: any) {
    this.loading = true;
    console.log();
    this.userService.saveAdmin(addArrayList.addresses)
      .subscribe(data => {
        console.log("User invited successfully.");

      });
  }
}
