import { Component, OnInit } from '@angular/core';
import { ListingServiceService } from 'src/app/services/listing-service.service';
import { Router } from '@angular/router';
import { Listing } from 'src/app/listing';
import { ShareListingService } from 'src/app/services/share-listing.service';
@Component({
  selector: 'app-see-all-listings',
  templateUrl: './see-all-listings.component.html',
  styleUrls: ['./see-all-listings.component.css']
})
export class SeeAllListingsComponent implements OnInit {
  list:any[] = []
  showDelete: any[50] = []

  //constructor() { }
   constructor(private data : ListingServiceService, private router: Router, private share: ShareListingService) {

  }

 ngOnInit(): void {
   this.data.getListings().subscribe(data => {this.list = data});
   
 }

  clickSearch(): void {
    console.log("button clicked");
  }
listing:Listing= {id:0,location:"dhff",price:5000,url:"jdhf",sellerId:1 };



  onClick(id:any){
  this.share.updateListing(id)
    this.router.navigate(["edit",id])
    console.log("clicked")
  

  }

  deleteButtonHandler(data: any){
    if(!this.showDelete[data]){
      this.showDelete[data] = true
    }
    else{
      this.showDelete[data] = false
    }
  }

  deleteRowHandler(id: any){
    this.data.deleteListingById(id)
    .subscribe()
    
    // (data => {
    //   this.listings = data;
      
    //   // this.listings.push(show);
    //   // console.log(this.listings)
    // })
    
  }

  

}

