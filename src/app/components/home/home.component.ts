import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any[] = []

  constructor(private data : DataService) {
    this.data.getUsers().subscribe(data => {this.users = data});
    console.log("Subscribed")

  }
  ngOnInit(): void {
  }

}
