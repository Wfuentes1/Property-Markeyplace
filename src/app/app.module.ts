import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BuyerPageComponent } from './components/buyer-page/buyer-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SellersPageComponent } from './components/sellers-page/sellers-page.component';
import { AddListingsComponent } from './components/add-listings/add-listings.component';
import { SeeAllListingsComponent } from './components/see-all-listings/see-all-listings.component';
import { FormsModule } from '@angular/forms';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    IndexComponent,
    HomeComponent,
    SidebarComponent,
    BuyerPageComponent,
    HeaderComponent,
    ContactusComponent,
    AboutUsComponent,
    SellersPageComponent,
    AddListingsComponent,
    SeeAllListingsComponent,
    EditListingComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
