 package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.exception.CountryNotFoundException;
import com.cognizant.springlearn.model.Country;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class CountryController {

    private static final List<Country> countryList = Arrays.asList(
        new Country("IN", "India"),
        new Country("US", "United States"),
        new Country("JP", "Japan")
    );

    
    @GetMapping("/")
    public String home() {
        return "Spring Boot is working!";
    }

    @GetMapping("/countries/{code}")
    public Country getCountryByCode(@PathVariable String code) throws CountryNotFoundException {
        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new CountryNotFoundException("Country Not found"));
    }
}
