import { Component, OnInit } from '@angular/core';
import { ListingServiceService } from 'src/app/services/listing-service.service';
import { ShareListingService } from 'src/app/services/share-listing.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  list:any[] = []
  constructor(private data: ListingServiceService, private share:ShareListingService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(data: any){
    let path=this.share.showListing().id
    console.log(this.share.showListing())
    this.data.editListings(data,path).subscribe(response=>{
      this.data=data.data
    })
    this.router.navigate(["listings"])
   console.log(data);
  }
}
