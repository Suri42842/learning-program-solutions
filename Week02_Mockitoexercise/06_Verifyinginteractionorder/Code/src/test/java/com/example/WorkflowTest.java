 package com.example;

import org.junit.jupiter.api.Test;
import org.mockito.InOrder;

import static org.mockito.Mockito.*;

public class WorkflowTest {

    @Test
    public void testMethodCallOrder() {
        Service mockService = mock(Service.class);
        Workflow workflow = new Workflow(mockService);

        workflow.execute();

        InOrder inOrder = inOrder(mockService);
        inOrder.verify(mockService).stepOne();
        inOrder.verify(mockService).stepTwo();
        inOrder.verify(mockService).stepThree();
    }
}
