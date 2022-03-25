package com.Revature.ProjectTwo.Repository;

import com.Revature.ProjectTwo.Entity.Listing;
import com.Revature.ProjectTwo.Entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class RepositoryTests {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ListingRepository listingRepository;

    @Test
    public void saveUser(){
        User user = User.builder()
                .name("BuyerGuy")
                .password("password")
                .email("buyer@buymail.com")
                .status("buyer")
                .build();
        userRepository.save(user);

    }

    @Test
    public void saveListing(){
        Listing listing = Listing.builder()
                .location("America")
                .price(10.00F)
                .sellerID(2)
                .url("URL")
                .build();

        listingRepository.save(listing);
    }
}
