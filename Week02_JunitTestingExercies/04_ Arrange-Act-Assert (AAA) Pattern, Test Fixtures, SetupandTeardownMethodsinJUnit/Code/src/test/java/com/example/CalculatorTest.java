 package com.example;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

 
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup complete");
    }

      @After
    public void tearDown() {
        System.out.println("Test completed");
    }

    @Test
    public void testAddition() {
        int a = 10;
        int b = 5;
 
        int result = calculator.add(a, b);
 
        assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange
        int a = 10;
        int b = 5;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(5, result);
    }
}
