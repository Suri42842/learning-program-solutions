  package com.cognizant.springlearn5;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLearnApplication {

    public static void main(String[] args) {
        System.out.println("STARTING SPRING APPLICATION");
        displayCountry();
        System.out.println("END SPRING APPLICATION");
    }

    public static void displayCountry() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        Country country = context.getBean("country", Country.class);
        Country anotherCountry = context.getBean("country", Country.class);

        System.out.println("Country: " + country);
        System.out.println("Another Country: " + anotherCountry);

        ((ClassPathXmlApplicationContext) context).close();
    }
}
