package com.example.departmentrest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource("classpath:department.xml")
public class DepartmentRestServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(DepartmentRestServiceApplication.class, args);
    }
}
