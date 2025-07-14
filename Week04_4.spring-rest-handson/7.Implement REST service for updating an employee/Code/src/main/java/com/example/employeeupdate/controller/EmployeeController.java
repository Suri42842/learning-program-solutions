package com.example.employeeupdate.controller;

import com.example.employeeupdate.model.Employee;
import com.example.employeeupdate.service.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PutMapping
    public void updateEmployee(@RequestBody @Valid Employee employee) {
        employeeService.updateEmployee(employee);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }
}
