package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START - /authenticate");
        LOGGER.debug("Authorization header: {}", authHeader);

        String username = getUser(authHeader); // 🔑 Decode and extract username
        LOGGER.debug("Extracted username: {}", username);

        Map<String, String> map = new HashMap<>();
        map.put("token", "");

        LOGGER.info("END - /authenticate");
        return map;
    }

    // 🔐 Method to decode Base64 and extract username
    private String getUser(String authHeader) {
        // Remove "Basic " prefix
        String encodedCredentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String decoded = new String(decodedBytes); // e.g., "user:pwd"

        LOGGER.debug("Decoded credentials: {}", decoded);

        // Split on colon and return username
        String username = decoded.split(":")[0];
        return username;
    }
}
