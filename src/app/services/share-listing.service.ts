import { Injectable } from '@angular/core';
import { Listing } from '../listing';
@Injectable({
  providedIn: 'root'
})
export class ShareListingService {
  listing:Listing= {id:0,location:"kksks",price:5000,url:"jdhf",sellerId:1 };

  updateListing(id:number){
    this.listing.id=id
  
  
  }

  showListing():Listing{
    return this.listing
  }

  constructor() { }
}
