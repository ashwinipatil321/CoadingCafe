import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogRef,MatInputModule, MAT_DIALOG_DATA} from '@angular/material';
import {DialogboxComponent } from './dialogbox/dialogbox.component';
import { MatSelectModule } from '@angular/material/select';
// import { AddressComponent } from './address/address.component';
import { Component } from '@angular/core';

// import {routes} from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    DialogboxComponent,
    // AddressComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
     FormsModule,
     MatInputModule,
     MatSelectModule,
		 ReactiveFormsModule
    // routes
  ],
  entryComponents: [
       DialogboxComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
