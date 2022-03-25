package com.Revature.ProjectTwo.Service;

import com.Revature.ProjectTwo.Entity.Listing;
import com.Revature.ProjectTwo.Repository.ListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListingServiceImpl implements ListingService {

    @Autowired
    private ListingRepository repository;

    @Override
    public List<Listing> getAllListings() {
        return repository.findAll();
    }

    @Override
    public Listing getListingById(int id) {
        return repository.findById(id).get();
    }

    @Override
    public Listing addListing(Listing listing) {
        return repository.save(listing);
    }

    @Override
    public void updateListing(int id, Listing listing) {
        Listing oldListing = repository.findById(id).get();
        oldListing.setLocation(listing.getLocation());
        oldListing.setPrice(listing.getPrice());
        oldListing.setUrl(listing.getUrl());
        repository.save(oldListing);



    }

    @Override
    public void deleteListing(int id) {
        repository.deleteById(id);
    }
}
