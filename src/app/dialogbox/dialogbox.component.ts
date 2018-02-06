import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../customer.interface';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})

export class DialogboxComponent implements OnInit {
  public myForm: FormGroup;
  contributor = "/assets/img/contributor.png";
  approval = "/assets/img/user1.png";
  viewer = "/assets/img/viewer.png";

  constructor(private _fb: FormBuilder) {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([])
    });
    this.addAddress();

  }
  @Input('group')
  public adressForm: FormGroup;
  ngOnInit() {

  }
  initAddress() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    const addrCtrl = this.initAddress();
    control.push(addrCtrl);
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }

  save(model: Customer) {
    console.log(model);
  }
  chBackcolor(color) {
   document.body.style.background = color;
}
}
