package com.example.employeeupdate.service;

import com.example.employeeupdate.dao.EmployeeDao;
import com.example.employeeupdate.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeDao employeeDao;

    public void updateEmployee(Employee employee) {
        employeeDao.updateEmployee(employee);
    }

    public List<Employee> getAllEmployees() {
        return employeeDao.getAllEmployees();
    }
}
