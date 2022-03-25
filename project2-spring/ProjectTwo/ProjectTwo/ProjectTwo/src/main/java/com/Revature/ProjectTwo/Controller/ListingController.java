package com.Revature.ProjectTwo.Controller;

import com.Revature.ProjectTwo.Entity.Listing;
import com.Revature.ProjectTwo.Service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ListingController {

    @Autowired
    private ListingService service;

    @GetMapping("/listings")
    public List<Listing> getAllListings(){
        return service.getAllListings();
    }

    @GetMapping("/listings/{id}")
    public Listing getListingById(@PathVariable("id") int id){
        return service.getListingById(id);
    }

    @PostMapping("/listings")
    public Listing addListing(@RequestBody Listing listing){
        return service.addListing(listing);
    }

    @PutMapping("/listings/{id}")
    public String updateListing(@PathVariable("id") int id, @RequestBody Listing listing){
        service.updateListing(id, listing);
        return "record updated successfully";
    }

    @DeleteMapping("/listings/{id}")
    public String deleteListing(@PathVariable("id") int id){
        service.deleteListing(id);
        return "record deleted successfully";
    }


}