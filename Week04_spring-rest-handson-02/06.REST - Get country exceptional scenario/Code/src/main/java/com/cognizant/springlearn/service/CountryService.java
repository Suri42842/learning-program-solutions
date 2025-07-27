 package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.exception.CountryNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CountryService {

    private static final List<Country> countryList = new ArrayList<>(Arrays.asList(
        new Country("IN", "India"),
        new Country("US", "United States"),
        new Country("CN", "China")
    ));

    public Country getCountry(String code) {
        if (code == null || code.trim().isEmpty()) {
            throw new IllegalArgumentException("Country code cannot be null or empty");
        }

        return countryList.stream()
                .filter(c -> c.getCode() != null && c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new CountryNotFoundException("Country with code '" + code + "' not found."));
    }
}