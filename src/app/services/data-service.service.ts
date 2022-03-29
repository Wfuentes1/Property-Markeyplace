import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
  }
  getUsers(): Observable<any>{
    return this.http.get<any>('http://localhost:9000/users')
  }

  getUserById(id:number): Observable<User>{
    return this.http.get<any>('http://localhost:9000/users/'+ id)
  }

/*   getListings(): Observable<any>{
    return this.http.get<any>('http://localhost:9000/listings')
  } */
}