package com.Revature.ProjectTwo.Entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Listing {

    @Id
    @SequenceGenerator(
            name = "listing_sequence",
            sequenceName = "listing_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "listing_sequence"
    )
    private int id;
    @Column(
            name = "location",
            nullable = false
    )
    private String location;
    @Column(
            name = "price",
            nullable = false
    )
    private float price;
    @Column(
            name = "url",
            nullable = false
    )
    private String url;
    @Column(
            name = "sellerID",
            nullable = false
    )
    private int sellerID;



}
