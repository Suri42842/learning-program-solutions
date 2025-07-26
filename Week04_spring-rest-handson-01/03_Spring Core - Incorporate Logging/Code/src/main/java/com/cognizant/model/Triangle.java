package com.cognizant.model;

public class Triangle {
    private String type;

    public void setType(String type) {
        this.type = type;
    }

    public void draw() {
        System.out.println(type + " Triangle drawn.");
    }
}
