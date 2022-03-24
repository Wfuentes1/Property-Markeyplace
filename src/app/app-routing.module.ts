import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddListingsComponent } from './components/add-listings/add-listings.component';
import { BuyerPageComponent } from './components/buyer-page/buyer-page.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SeeAllListingsComponent } from './components/see-all-listings/see-all-listings.component';




const routes: Routes = [
   { path: "buyer", component:BuyerPageComponent},
   {path: "contact", component:ContactusComponent},
   {path:"about",component:AboutUsComponent},
   {path:"add",component:AddListingsComponent},
   {path:"login",component:LoginComponent},
   {path:"listings",component:SeeAllListingsComponent},
   {path:"home",component:HomeComponent}
  
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }