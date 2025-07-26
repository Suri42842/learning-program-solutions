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
        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(CountryNotFoundException::new);
    }
}