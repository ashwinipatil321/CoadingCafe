import { Component, OnInit } from '@angular/core';
import { UserService, ContributorService } from '../_services/index';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  loading = false;
  contributorDetail=[];
  constructor(private contributorService: ContributorService) { }

  ngOnInit() {
    this.getContributor();
  }
  getContributor() {
    this.loading = true;
    this.contributorService.getContributors()
      .subscribe(response => {
        if (response) {
                 //console.log(response.data);
                 // items.slice().reverse();
                 console.log("response" + response);
                  this.contributorDetail.push(response);

               }
             },
               error => console.log("Error while retrieving"))
       }

}
