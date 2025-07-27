 package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceTest {

    @Test
    public void testMultipleReturns() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("A").thenReturn("B").thenReturn("C");

        MyService service = new MyService(mockApi);
        String[] result = service.fetchMultipleData();

        assertArrayEquals(new String[]{"A", "B", "C"}, result);
        verify(mockApi, times(3)).getData();
    }
}
