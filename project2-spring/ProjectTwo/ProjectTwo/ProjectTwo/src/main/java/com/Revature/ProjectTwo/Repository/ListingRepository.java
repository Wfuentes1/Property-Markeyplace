package com.Revature.ProjectTwo.Repository;

import com.Revature.ProjectTwo.Entity.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ListingRepository extends JpaRepository<Listing, Integer> {

}
