package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @PostMapping("/countries")
    public Country addCountry(@RequestBody Country country) {
        LOGGER.info("Start");
        LOGGER.info("Country Code: " + country.getCode());
        LOGGER.info("Country Name: " + country.getName());
        return country;
    }
}