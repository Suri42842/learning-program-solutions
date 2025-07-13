package com.example.security.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class CountryController {

    @GetMapping("/countries")
    public List<String> getAllCountries() {
        return List.of("India", "USA", "Germany");
    }
}
