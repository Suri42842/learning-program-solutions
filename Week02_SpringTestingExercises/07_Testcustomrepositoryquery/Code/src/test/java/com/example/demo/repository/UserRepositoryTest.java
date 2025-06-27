package com.example.demo.repository;

import com.example.demo.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testFindByName() {
        User user1 = new User("Alice");
        User user2 = new User("Bob");
        User user3 = new User("Alice");

        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(user3);

        List<User> results = userRepository.findByName("Alice");

        assertEquals(2, results.size());
        for (User user : results) {
            assertEquals("Alice", user.getName());
        }
    }
}
