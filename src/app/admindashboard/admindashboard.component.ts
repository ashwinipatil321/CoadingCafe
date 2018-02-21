import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  userImg = '/assets/img/user.png';
  logoutImg='/assets/img/logout.png'
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogboxComponent, {
           width:'1200px',
          height: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');

     });
  }
}
