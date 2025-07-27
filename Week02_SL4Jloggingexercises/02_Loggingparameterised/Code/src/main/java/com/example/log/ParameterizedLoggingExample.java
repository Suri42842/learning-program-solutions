 package com.example.log;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(ParameterizedLoggingExample.class);

    public static void main(String[] args) {
        String user = "Alice";
        int age = 30;

        logger.info("User {} has logged in", user);
        logger.debug("User {} is {} years old", user, age);
        logger.warn("Memory usage is at {}%", 85);
        logger.error("Failed to load configuration for user: {}", user);
    }
}
