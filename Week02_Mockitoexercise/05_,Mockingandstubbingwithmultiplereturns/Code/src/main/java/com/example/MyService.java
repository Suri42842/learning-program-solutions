 package com.example;

public class MyService {
    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String[] fetchMultipleData() {
        String[] results = new String[3];
        results[0] = api.getData();
        results[1] = api.getData();
        results[2] = api.getData();
        return results;
    }
}
