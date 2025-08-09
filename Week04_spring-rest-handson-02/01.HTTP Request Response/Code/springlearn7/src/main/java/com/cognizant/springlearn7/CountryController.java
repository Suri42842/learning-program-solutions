 package com.cognizant.springlearn7;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
public class CountryController {

    @GetMapping("/countries")
    public List<Country> getCountries() {
        List<Country> countries = new ArrayList<>();
        countries.add(new Country("IN", "India"));
        countries.add(new Country("US", "United States"));
        countries.add(new Country("JP", "Japan"));
        return countries;
    }
}
