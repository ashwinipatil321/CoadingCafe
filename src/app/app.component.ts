import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
template:`<app-topnavbar></app-topnavbar>`,
// templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;

    constructor() { }

    ngOnInit() {

}
}
