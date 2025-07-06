package com.example.ems;

import jakarta.persistence.*;
import java.util.List;

@Entity
@NamedQueries({
    @NamedQuery(name = "Department.findByName",
                query = "SELECT d FROM Department d WHERE d.name = :name")
})
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "department")
    private List<Employee> employees;

    public Department() {}

    public Department(String name) {
        this.name = name;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}