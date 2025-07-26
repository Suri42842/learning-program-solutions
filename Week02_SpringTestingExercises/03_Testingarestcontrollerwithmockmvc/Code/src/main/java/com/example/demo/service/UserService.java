 package com.example.demo.service;

import com.example.demo.entity.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    public User getUserById(Long id) {
        return new User(id, "John Doe");
    }
}
