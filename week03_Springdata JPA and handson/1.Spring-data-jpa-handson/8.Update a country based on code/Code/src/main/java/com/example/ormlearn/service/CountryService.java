 package com.example.ormlearn.service;

import com.example.ormlearn.model.Country;
import com.example.ormlearn.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public void addCountry(Country country) {
        countryRepository.save(country);
    }

    public Country findCountryByCode(String code) {
        return countryRepository.findById(code).orElse(null);
    }

    @Transactional
    public void updateCountry(String code, String newName) {
        Country country = countryRepository.findById(code)
                .orElseThrow(() -> new RuntimeException("Country not found"));
        country.setName(newName);
        countryRepository.save(country);
    }
}
