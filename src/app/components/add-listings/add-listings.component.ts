import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Property } from 'src/app/property';
import { ListingServiceService } from 'src/app/services/listing-service.service';

@Component({
  selector: 'app-add-listings',
  templateUrl: './add-listings.component.html',
  styleUrls: ['./add-listings.component.css']
})
export class AddListingsComponent implements OnInit {
  
   propModel= new Property("seller",5000, "chhic", "hshh")

   constructor() { }
   

  ngOnInit(): void {
    
  }

onSubmit(data: any){
  
 console.log(data);
}

}
