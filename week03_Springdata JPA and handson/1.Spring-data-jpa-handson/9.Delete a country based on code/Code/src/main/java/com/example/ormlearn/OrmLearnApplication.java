 package com.example.ormlearn;

import com.example.ormlearn.model.Country;
import com.example.ormlearn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        testAddCountry();
        testUpdateCountry();
        testDeleteCountry();
    }

    void testAddCountry() {
        Country newCountry = new Country();
        newCountry.setCode("INX");
        newCountry.setName("Testland");

        countryService.addCountry(newCountry);

        Country savedCountry = countryService.findCountryByCode("INX");
        System.out.println("Saved Country: " + savedCountry);
    }

    void testUpdateCountry() {
        System.out.println("Before update: " + countryService.findCountryByCode("INX"));
        countryService.updateCountry("INX", "Updatedland");
        System.out.println("After update: " + countryService.findCountryByCode("INX"));
    }

    void testDeleteCountry() {
        countryService.deleteCountry("INX");
        Country deletedCountry = countryService.findCountryByCode("INX");
        if (deletedCountry == null) {
            System.out.println("Country deleted successfully.");
        } else {
            System.out.println("Country still exists: " + deletedCountry);
        }
    }
}
