package com.example.demo.service;

import com.example.demo.model.User;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {
    public User findUserById(Long id) {
        // Simulate user not found
        throw new RuntimeException("User not found with id: " + id);
    }
}
