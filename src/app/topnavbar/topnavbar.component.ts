import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { AdmincardComponent } from '../admincard/admincard.component';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {
 userImg = '/assets/img/user.png';
 logoutImg='/assets/img/logout.png'

 constructor(public dialog: MatDialog) { }
 openDialog(): void {
   let dialogRef = this.dialog.open(DialogboxComponent, {
          width:'1200px',
         height: '600px',
   });
}
  ngOnInit() {
  }

}
