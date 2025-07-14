 package com.cognizant.ormlearn;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService; 

    public static void main(String[] args) {
        LOGGER.info("Inside main"); 
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args); 
        countryService = context.getBean(CountryService.class);
       testGetAllCountries();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start testGetAllCountries()");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("Countries: {}", countries); 
        //LOGGER.info("End testGetAllCountries()"); // This line was commented out
    }
}