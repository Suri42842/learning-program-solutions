package com.example.employeemanagement.employee.repository;

import com.example.employeemanagement.employee.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
