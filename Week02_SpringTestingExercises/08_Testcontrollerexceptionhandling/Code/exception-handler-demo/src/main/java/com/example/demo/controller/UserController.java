package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/{id}")
    public String getUser(@PathVariable int id) {
        throw new NoSuchElementException("User not found with id: " + id);
    }
}
