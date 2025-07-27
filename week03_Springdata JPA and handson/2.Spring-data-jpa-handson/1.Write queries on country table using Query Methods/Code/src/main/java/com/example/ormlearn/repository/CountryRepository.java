 package com.example.ormlearn.repository; // Adjust package name as needed

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ormlearn.model.Country; // Adjust package name as needed

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

    // Query Method 1: Search by containing text
    List<Country> findByNameContaining(String text);

    // Query Method 2: Search by containing text and sort by name in ascending order
    List<Country> findByNameContainingOrderByNameAsc(String text);

    // Query Method 3: Search by name starting with a given alphabet
    List<Country> findByNameStartingWith(String startingCharacter);
}