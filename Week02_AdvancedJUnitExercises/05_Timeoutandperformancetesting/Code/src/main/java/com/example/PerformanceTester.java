 package com.example;

public class PerformanceTester {

    public void performTask() {
        // Simulate a time-consuming task
        try {
            Thread.sleep(500); // sleep for 500 ms
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
