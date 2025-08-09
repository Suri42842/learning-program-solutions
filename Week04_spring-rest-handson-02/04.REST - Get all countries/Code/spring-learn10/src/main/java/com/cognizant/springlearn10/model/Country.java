package com.cognizant.springlearn10.model;
import java.io.Serializable;

public class Country implements Serializable {
    private String code;
    private String name;

    public Country() {
        System.out.println("Country Constructor Called");
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}
