import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-buyer-page',
  templateUrl: './buyer-page.component.html',
  styleUrls: ['./buyer-page.component.css']
})
export class BuyerPageComponent implements OnInit {
  users:any[] = []

  constructor(private data : DataService) {
    this.data.getUsers().subscribe(data => {this.users = data});
    console.log("Subscribed")

  }

  ngOnInit(): void {
  }

}
