import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
// import { Customer } from '../customer.interface';
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
  plus = "/assets/img/plus.png";

  constructor(private _fb: FormBuilder) { }
  @Input('group')
   public adressForm: FormGroup;
  ngOnInit() {

  }
}
