 package com.cognizant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cognizant.model.Triangle;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("STARTING SPRING APPLICATION");

        SpringApplication.run(SpringLearnApplication.class, args);

        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        Triangle triangle = (Triangle) context.getBean("triangle");
        triangle.draw();

        displayDate();

        LOGGER.info("APPLICATION ENDED");
    }

    public static void displayDate() {
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
        java.text.SimpleDateFormat format = context.getBean("dateFormat", java.text.SimpleDateFormat.class);
        try {
            java.util.Date date = format.parse("31/12/2018");
            System.out.println("Parsed Date: " + date);
        } catch (java.text.ParseException e) {
            e.printStackTrace();
        }
    }
}
