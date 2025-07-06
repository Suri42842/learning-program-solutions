  package com.example.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import com.example.ormlearn.model.Country;
import com.example.ormlearn.repository.CountryRepository;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryRepository countryRepository;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
        // countryRepository is now injected via CommandLineRunner for better practice
        LOGGER.info("Inside main");
    }

    @Bean
    public CommandLineRunner run(CountryRepository repository) {
        return args -> {
            countryRepository = repository; // Assign the injected repository

            // Add dummy data
            repository.save(new Country("BV", "Bouvet Island"));
            repository.save(new Country("DJ", "Djibouti"));
            repository.save(new Country("GP", "Guadeloupe"));
            repository.save(new Country("GS", "South Georgia and the South Sandwich Islands"));
            repository.save(new Country("LU", "Luxembourg"));
            repository.save(new Country("SS", "South Sudan"));
            repository.save(new Country("TF", "French Southern Territories"));
            repository.save(new Country("UM", "United States Minor Outlying Islands"));
            repository.save(new Country("ZA", "South Africa"));
            repository.save(new Country("ZM", "Zambia"));
            repository.save(new Country("ZW", "Zimbabwe"));

            // Call the methods to test the queries
            testFindByNameContaining();
            testFindByNameContainingOrderByNameAsc();
            testFindByNameStartingWith();
        };
    }

    private static void testFindByNameContaining() {
        LOGGER.info("Start testFindByNameContaining");
        List<Country> countries = countryRepository.findByNameContaining("ou");
        LOGGER.debug("Countries with 'ou': {}", countries);
        LOGGER.info("End testFindByNameContaining");
    }

    private static void testFindByNameContainingOrderByNameAsc() {
        LOGGER.info("Start testFindByNameContainingOrderByNameAsc");
        List<Country> countries = countryRepository.findByNameContainingOrderByNameAsc("ou");
        LOGGER.debug("Countries with 'ou' (sorted): {}", countries);
        LOGGER.info("End testFindByNameContainingOrderByNameAsc");
    }

    private static void testFindByNameStartingWith() {
        LOGGER.info("Start testFindByNameStartingWith");
        List<Country> countries = countryRepository.findByNameStartingWith("Z");
        LOGGER.debug("Countries (starting with Z): {}", countries);
        LOGGER.info("End testFindByNameStartingWith");
    }
}