package com.example.ems;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("/role/{role}")
    public List<Employee> getByRole(@PathVariable String role) {
        return employeeRepository.findByRole(role);
    }

    @GetMapping("/search")
    public List<Employee> searchByName(@RequestParam String name) {
        return employeeRepository.searchByName(name);
    }
}