import { Component, OnInit } from '@angular/core';
import { ListingServiceService } from 'src/app/services/listing-service.service';
@Component({
  selector: 'app-see-all-listings',
  templateUrl: './see-all-listings.component.html',
  styleUrls: ['./see-all-listings.component.css']
})
export class SeeAllListingsComponent implements OnInit {
  list:any[] = []
 

  //constructor() { }
   constructor(private data : ListingServiceService) {

  }

 ngOnInit(): void {
   this.data.getListings().subscribe(data => {this.list = data});
   
 }

  clickSearch(): void {
    console.log("button clicked");
  }

}

