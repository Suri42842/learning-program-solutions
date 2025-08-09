package com.example.employeemanagement.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.context.annotation.Bean;

import java.util.Optional;

@Configuration
public class AuditorAwareImpl {

    @Bean
    public AuditorAware<String> auditorProvider() {
        return () -> Optional.of("system"); // static user; replace with security principal in real app
    }
}
