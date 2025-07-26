package com.cognizant.springlearn10.controller;

 
import com.cognizant.springlearn10.model.Country;
import org.springframework.web.bind.annotation.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
public class CountryController {

    @GetMapping("/countries")
    public List<String> getCountries() {
        return List.of("India", "USA", "UK");
    }
}

