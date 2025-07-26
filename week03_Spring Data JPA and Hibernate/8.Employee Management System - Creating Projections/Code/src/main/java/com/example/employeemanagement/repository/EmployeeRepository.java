package com.example.employeemanagement.repository;

import com.example.employeemanagement.entity.Employee;
import com.example.employeemanagement.projection.EmployeeNameEmail;
import com.example.employeemanagement.projection.EmployeeDepartmentDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Interface‑based projection
    List<EmployeeNameEmail> findByDepartment_Name(String name);

    // Class‑based projection with constructor expression
    @Query("select new com.example.employeemanagement.projection.EmployeeDepartmentDTO(e.name, d.name) " +
           "from Employee e join e.department d")
    List<EmployeeDepartmentDTO> fetchEmployeeDepartment();
}
