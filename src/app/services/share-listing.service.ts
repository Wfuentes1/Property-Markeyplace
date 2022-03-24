import { Injectable } from '@angular/core';
import { Listing } from '../listing';
@Injectable({
  providedIn: 'root'
})
export class ShareListingService {
  listing:Listing= {id:0,location:"kksks",price:5000,url:"jdhf",sellerId:1 };

  updateListing(list:Listing){
    this.listing=list
  console.log(list)
  
  }

  showListing():Listing{
    return this.listing
  }

  constructor() { }
}
