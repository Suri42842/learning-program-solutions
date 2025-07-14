 package com.example.ems;

import jakarta.persistence.*;

@Entity
public class EmployeeController {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String role; // ✅ This must be declared

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    // ✅ Constructors
    public EmployeeController() {}

    public EmployeeController(String name, String role, Department department) {
        this.name = name;
        this.role = role;
        this.department = department;
    }

    // ✅ Getters and setters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
