package com.example.employeemanagement.controller;

import com.example.employeemanagement.projection.EmployeeNameEmail;
import com.example.employeemanagement.projection.EmployeeDepartmentDTO;
import com.example.employeemanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees/projection")
public class ProjectionController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Interface‑based: return name & email for a given department
    @GetMapping("/interface/{dept}")
    public List<EmployeeNameEmail> getNameEmailByDept(@PathVariable("dept") String dept) {
        return employeeRepository.findByDepartment_Name(dept);
    }

    // Class‑based: return DTO with name & departmentName
    @GetMapping("/class")
    public List<EmployeeDepartmentDTO> getNameAndDepartment() {
        return employeeRepository.fetchEmployeeDepartment();
    }
}
