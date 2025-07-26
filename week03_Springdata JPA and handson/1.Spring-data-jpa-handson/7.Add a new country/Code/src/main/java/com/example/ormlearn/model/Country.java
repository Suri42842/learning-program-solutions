package com.example.ormlearn.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Country {
    @Id
    private String code;
    private String name;

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
        return "Country{" +
                "code='" + code + 
                ", name='" + name + 
                '}';
    }
}