package com.example.ems;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@NamedQuery(name = "Employee.findByRole", query = "SELECT e FROM Employee e WHERE e.role = :role")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String role;

    @ManyToOne
    @JoinColumn(name = "department_id")
    @JsonBackReference
    private Department department;

    public Employee() {}

    public Employee(String name, String role, Department department) {
        this.name = name;
        this.role = role;
        this.department = department;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    public Department getDepartment() { return department; }
    public void setDepartment(Department department) { this.department = department; }
}