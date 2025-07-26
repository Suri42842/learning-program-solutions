package com.cognizant.springlearn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import java.security.Key;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    // Use a strong 256-bit secret key (32+ characters)
    private static final Key SECRET_KEY = Keys.hmacShaKeyFor("ThisIsASecretKeyForJwtAuth1234567890".getBytes());

    @GetMapping("/authenticate")
    public String authenticate(HttpServletRequest request) {
        LOGGER.info("Generating token...");

        String username = request.getUserPrincipal().getName(); // Gets the Basic Auth username
        LOGGER.debug("Username: {}", username);

        String token = Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + 5 * 60 * 1000)) // 5 mins
                .signWith(SECRET_KEY, SignatureAlgorithm.HS256)
                .compact();

        return token;
    }
}
