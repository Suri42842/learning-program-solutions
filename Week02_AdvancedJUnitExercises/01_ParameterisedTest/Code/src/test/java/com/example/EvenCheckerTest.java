 package com.example;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

public class EvenCheckerTest {

    Evenchecker evenChecker = new Evenchecker();

    @ParameterizedTest
    @ValueSource(ints = {2, 4, 6, 8, 10})
    void testIsEvenTrue(int number) {
        assertTrue(evenChecker.isEven(number));
    }

    @ParameterizedTest
    @ValueSource(ints = {1, 3, 5, 7, 9})
    void testIsEvenFalse(int number) {
        assertFalse(evenChecker.isEven(number));
    }
}
