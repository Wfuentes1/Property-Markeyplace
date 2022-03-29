import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from 'src/app/services/credentials.service';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  img = "assets/logo/prop.jpeg";

  users: any[] = []

  constructor(private data1: DataService, private cred: CredentialsService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(data2: any) {

    this.data1.getUsers().subscribe(response=> this.users=response)
    this.users.forEach(element => {
      if(data2.username == element.username && data2.password == element.password){
        this.cred.updateUser(element.id);
      }
      if(this.cred.showUser().id != 0){
        this.router.navigate(["buyer"])
      }
      
    });

    // template text taken from add-listings.component.ts

    //   this.data.addListings(data).subscribe(response=>{
    //     this.data=data.data
    //   })
    //   this.router.navigate(["listings"])
    //  console.log(data);
  }
}
