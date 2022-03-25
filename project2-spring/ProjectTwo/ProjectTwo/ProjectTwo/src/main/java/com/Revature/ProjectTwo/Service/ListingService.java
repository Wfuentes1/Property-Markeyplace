package com.Revature.ProjectTwo.Service;

import com.Revature.ProjectTwo.Entity.Listing;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ListingService {
    List<Listing> getAllListings();
    Listing getListingById(int id);
    Listing addListing(Listing listing);
    void updateListing(int id, Listing listing);
    void deleteListing(int id);
}
