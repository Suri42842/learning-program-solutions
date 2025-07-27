package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class ProcessorTest {

    @Test
    public void testVoidMethodCalled() {
        Logger mockLogger = mock(Logger.class);

        // Stub the void method (optional, not strictly needed here)
        doNothing().when(mockLogger).log(anyString());

        Processor processor = new Processor(mockLogger);
        processor.process();

        verify(mockLogger).log("Process started");
    }
}
