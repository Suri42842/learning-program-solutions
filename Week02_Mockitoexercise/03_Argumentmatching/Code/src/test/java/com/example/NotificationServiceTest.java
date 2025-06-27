 package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;


public class NotificationServiceTest {

    @Test
    public void testSendCalledWithArguments() {
        // Create mock
        Notifier mockNotifier = mock(Notifier.class);

        // Use it
        NotificationService service = new NotificationService(mockNotifier);
        service.alertUser();

        // Verify interaction
        verify(mockNotifier).send(eq("admin"), eq("System error occurred"));
    }
}
