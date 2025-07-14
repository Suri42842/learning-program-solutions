package com.example.demo;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @PostMapping("/countries")
    public Country addCountry(@RequestBody Country country) {
        LOGGER.info("Start");

        // Create validator factory
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        // Validation is done against the annotations defined in country bean
        Set<ConstraintViolation<Country>> violations = validator.validate(country);
        List<String> errors = new ArrayList<>();

        // Accumulate all errors in an ArrayList of type String
        for (ConstraintViolation<Country> violation : violations) {
            errors.add(violation.getMessage());
        }

        // Throw exception so that the user of this web service receives appropriate error message
        if (!violations.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.toString());
        }

        return country;
    }
}