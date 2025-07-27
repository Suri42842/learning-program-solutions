 package com.example;

import org.junit.jupiter.api.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class OrderedTests {

    @Test
    @Order(3)
    void testThird() {
        System.out.println("Running testThird()");
    }

    @Test
    @Order(1)
    void testFirst() {
        System.out.println("Running testFirst()");
    }

    @Test
    @Order(2)
    void testSecond() {
        System.out.println("Running testSecond()");
    }
}
