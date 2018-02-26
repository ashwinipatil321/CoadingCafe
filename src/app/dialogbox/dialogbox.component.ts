import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../customer.interface';
import { UserService } from '../_services/index';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})

export class DialogboxComponent implements OnInit {
  public myForm: FormGroup;
  model: any;
  loading = false;
  contributor = "/assets/img/contributor.png";
  approval = "/assets/img/user1.png";
  viewer = "/assets/img/viewer.png";
  isBackground = false;
  ngClickContributor = "/assets/img/ngClickContributor.png";
  ngClickApprover = "/assets/img/ngClickApprover.png";
  ngClickViewer = "/assets/img/ngClickViewer.png";
  active: boolean = false;
  active1: boolean = false;
  active2: boolean = false;

  constructor(private _fb: FormBuilder, private userService: UserService, private router: Router, private dialogRef: MatDialogRef<DialogboxComponent>, ) {
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
    this.addAddress();
  }

  initAddress() {
    return this._fb.group({
      email: ['', Validators.required],
      role: ['']
    });
  }

  addRule(address: any, role: string, image: any): void {
this.loading = true;
    if (role == 'contributor') {
      this.active = true;
      this.active1 = false;
      this.active2 = false;

      console.log(address, role);
      address.controls.role.patchValue(role);
    }
    else if (role == 'approval') {

      this.active = false;
      this.active1 = true;
      this.active2 = false;
      console.log(address, role);
      address.controls.role.patchValue(role);
    }
    else if (role == 'viewer') {
      this.active = false;
      this.active1 = false;
      this.active2 = true;
      console.log(address, role);
      address.controls.role.patchValue(role);
    }
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
        this.dialogRef.close();
        alert("User invited successfully.");
      });
  }

  close(): void {
    this.dialogRef.close();
  }
}
