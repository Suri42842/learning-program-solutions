package com.example.demo;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    private final Calculator calculator = new Calculator();

    @ParameterizedTest
    @CsvSource({
        "1, 2, 3",
        "4, 5, 9",
        "10, -5, 5",
        "-3, -6, -9"
    })
    public void testAdd(int a, int b, int expected) {
        assertEquals(expected, calculator.add(a, b));
    }
}
