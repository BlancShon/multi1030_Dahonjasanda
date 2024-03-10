package com.multi.dahon.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Arrays;

@Getter
@Setter
public class Address {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    private String city;
    private String street;
    private String zipcode;

    protected Address() {
    }


    private Address(String name, String city, String street, String zipcode) {
        this.name = name;
        this.city = city;
        this.street = street;
        this.zipcode = zipcode;
    }

    public static Address createAddress(String name, String city, String street, String zipcode) {
       return new Address(name, city, street, zipcode);
    }

}
