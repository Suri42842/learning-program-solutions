 package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class NotificationServiceTest {

    @Test
    void testSendEmailThrowsException() {
        // Step 1: Create mock object
        NotificationService mockService = mock(NotificationService.class);

        // Step 2: Stub the void method to throw exception
        doThrow(new RuntimeException("Email service error"))
            .when(mockService).sendEmail("abc@example.com");

        // Step 3: Assert that the exception is thrown
        assertThrows(RuntimeException.class, () -> {
            mockService.sendEmail("abc@example.com");
        });

        // Step 4: Verify the interaction
        verify(mockService).sendEmail("abc@example.com");
    }
}
