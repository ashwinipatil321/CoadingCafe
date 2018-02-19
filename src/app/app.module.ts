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
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogboxComponent } from './dialogbox/dialogbox.component';
import { MatSelectModule } from '@angular/material/select';
// import { AddressComponent } from './address/address.component';
import {RegisterationComponent} from './registeration/registeration.component';
import { Component } from '@angular/core';
// import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AuthenticationService,UserService} from './_services/index';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    DialogboxComponent,
    RegisterationComponent,
    LoginComponent,

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
		  ReactiveFormsModule,
      HttpModule,
      HttpClientModule,
      routing,
      MatTooltipModule,
      MatCardModule,
      RouterModule.forRoot([])
  ],
  entryComponents: [
       DialogboxComponent
   ],
  providers: [AuthenticationService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
