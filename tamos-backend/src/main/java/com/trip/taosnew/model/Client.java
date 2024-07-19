package com.trip.taosnew.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Client {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    private  String firstName;
    private  String lastName;
    private  String mobile;
    @NaturalId(mutable = true)
    private  String email;
    private Long age;
    private String membershipStatus;
}
