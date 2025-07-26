package com.example.employeeupdate.dao;

import com.example.employeeupdate.exception.EmployeeNotFoundException;
import com.example.employeeupdate.model.Employee;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;

@Repository
public class EmployeeDao {
    private static final List<Employee> EMPLOYEE_LIST = new ArrayList<>();

    public void updateEmployee(Employee employee) {
        for (int i = 0; i < EMPLOYEE_LIST.size(); i++) {
            if (EMPLOYEE_LIST.get(i).getId().equals(employee.getId())) {
                EMPLOYEE_LIST.set(i, employee);
                return;
            }
        }
        throw new EmployeeNotFoundException("Employee not found with id: " + employee.getId());
    }

    public List<Employee> getAllEmployees() {
        return EMPLOYEE_LIST;
    }
}
