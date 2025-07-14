package com.example.demo.service;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UserServiceTest {

    @Test
    public void testFindUserByIdThrowsException() {
        UserService userService = new UserService();
        Exception exception = assertThrows(RuntimeException.class, () -> {
            userService.findUserById(100L);
        });

        assertEquals("User not found with id: 100", exception.getMessage());
    }
}
