package com.example.employeemanagement.department.repository;

import com.example.employeemanagement.department.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
