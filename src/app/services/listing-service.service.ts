import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../property';
import { Listing } from '../listing';
const Url="http://localhost:9000/listings";
@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {
 
  constructor(private http: HttpClient) { }
  
  getListings(): Observable<any[]>{
    return this.http.get<any[]>(Url)
  }

  addListings(data: Property): Observable<Property>{
   return this.http.post<Property>(Url,data);
  }

  editListings(data: Property, path:number): Observable<Property>{
    
    return this.http.put<Property>(Url+"/"+path,data);
   }
  
   getListing(id:number): Observable<Listing>{
    return this.http.get<any>(Url+"/"+id)
  }

}
