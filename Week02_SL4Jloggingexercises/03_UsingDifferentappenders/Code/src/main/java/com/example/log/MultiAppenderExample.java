package com.example.log;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MultiAppenderExample {
    private static final Logger logger = LoggerFactory.getLogger(MultiAppenderExample.class);

    public static void main(String[] args) {
        logger.info("This message goes to both the console and the file.");
        logger.warn("Warning! Check your configuration.");
        logger.error("An error occurred while processing.");
    }
}
