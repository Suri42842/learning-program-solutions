package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CountryService {
    private List<Country> countries = List.of(
        new Country("IN", "India"),
        new Country("US", "United States"),
        new Country("JP", "Japan"),
        new Country("DE", "Germany")
    );

    public Country getCountry(String code) {
        return countries.stream()
                        .filter(c -> c.getCode().equalsIgnoreCase(code))
                        .findFirst()
                        .orElse(null);
    }

    public List<Country> getAllCountries() {
        return countries;
    }

    public Country getCountryIndia() {
        return getCountry("IN");
    }
}