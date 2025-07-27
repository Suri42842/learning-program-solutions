package com.example.jwtauth.controller;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START - authenticate()");
        Map<String, String> response = new HashMap<>();
        try {
            String user = getUser(authHeader);
            LOGGER.debug("User extracted: {}", user);
            String token = generateJwt(user);
            response.put("token", token);
        } catch (Exception e) {
            LOGGER.error("Exception: ", e);
            response.put("error", "Internal server error: " + e.getMessage());
        }
        LOGGER.info("END - authenticate()");
        return response;
    }

    private String getUser(String authHeader) {
        if (!authHeader.startsWith("Basic ")) {
            throw new RuntimeException("Invalid Authorization header");
        }
        String encodedCredentials = authHeader.substring("Basic ".length()).trim();
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String decoded = new String(decodedBytes); // Format: user:pwd
        return decoded.split(":")[0];
    }

    private String generateJwt(String user) {
        JwtBuilder builder = Jwts.builder();
        builder.setSubject(user);
        builder.setIssuedAt(new Date());
        builder.setExpiration(new Date(System.currentTimeMillis() + 1200000)); // 20 minutes
        builder.signWith(SignatureAlgorithm.HS256, "secretkey"); // HS256 with secret

        return builder.compact();
    }
}
