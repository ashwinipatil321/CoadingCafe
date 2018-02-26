import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService, UserService } from '../_services/index';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  userImg = '/assets/img/user.png';
  logoutImg = '/assets/img/logout.png'
  loading: any;
  contributorCount : any;
  approverCount: any;
  viewerCount: any;

  constructor(public dialog: MatDialog, private userService: UserService,private router: Router) {

  }

  ngOnInit() {
    this.getContributorCount();
    this.getApproverCount();
    this.getViewerCount();
  }
  display() {

  }
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogboxComponent, {
      width: '1200px',
      height: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  getContributorCount() {
    this.loading = true;
    this.userService.getContributorCount()
      .subscribe(data => {
        this.contributorCount = data;
        console.log("this.contributorCount", this.contributorCount);

      });
  }
  getApproverCount() {
    this.loading = true;
    this.userService.getApproverCount()
      .subscribe(data => {
        this.approverCount = data;
        console.log("this.approverCount", this.approverCount);
      })
  }
  getViewerCount() {
    this.loading = true;
    this.userService.getViewerCount()
      .subscribe(data => {
        this.viewerCount = data;
        console.log("this.viewerCount", this.viewerCount);

      })

  }
  logout()
  {
      this.router.navigate(['/login']);
  }
}
