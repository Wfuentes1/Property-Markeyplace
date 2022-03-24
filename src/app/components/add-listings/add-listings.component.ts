import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Property } from 'src/app/property';
import { ListingServiceService } from 'src/app/services/listing-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-listings',
  templateUrl: './add-listings.component.html',
  styleUrls: ['./add-listings.component.css']
})
export class AddListingsComponent implements OnInit {
  list:any[] = []
   

   //constructor() { }
    constructor(private data : ListingServiceService, private router:Router) {

   }

  ngOnInit(): void {
   
  }

onSubmit(data: any){
  this.data.addListings(data).subscribe(response=>{
    this.data=data.data
  })
  this.router.navigate(["listings"])
 console.log(data);
}

}
