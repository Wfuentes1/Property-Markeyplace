import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

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
    AddListingsComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
