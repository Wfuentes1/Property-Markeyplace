import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { User } from '../user';
import { DataService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  
  private user:User={id:0, email:"", name:"", password:"", rating:0, status:""}

  updateUser(id:number){
    this.dataService.getUserById(id).subscribe(data => this.user = data)
  }

  logout(){
    this.user = {id:0, email:"", name:"", password:"", rating:0, status:""}
  }

  showUser():User{
    return this.user
  }

  constructor(private dataService:DataService) { }
}


// ngOnInit(): void {
//   this.data.getListings().subscribe(data => {this.list = data});
  
// }