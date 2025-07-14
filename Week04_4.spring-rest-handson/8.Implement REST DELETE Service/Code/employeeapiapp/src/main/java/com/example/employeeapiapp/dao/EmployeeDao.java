package com.example.employeeapiapp.dao;

import com.example.employeeapiapp.model.Employee;
import com.example.employeeapiapp.exception.EmployeeNotFoundException;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Repository
public class EmployeeDao {
    private static final List<Employee> employees = new ArrayList<>();

    static {
        employees.add(new Employee(1, "John Doe", "Developer"));
        employees.add(new Employee(2, "Jane Smith", "Tester"));
        employees.add(new Employee(3, "Alice Johnson", "Manager"));
    }

    public List<Employee> getAllEmployees() {
        return employees;
    }

    public void deleteEmployeeById(int id) {
        Iterator<Employee> iterator = employees.iterator();
        boolean removed = false;

        while (iterator.hasNext()) {
            Employee emp = iterator.next();
            if (emp.getId() == id) {
                iterator.remove();
                removed = true;
                break;
            }
        }

        if (!removed) {
            throw new EmployeeNotFoundException("Employee with ID " + id + " not found.");
        }
    }
}
