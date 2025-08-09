package com.example.employeeapiapp.service;

import com.example.employeeapiapp.dao.EmployeeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeDao employeeDao;

    public void deleteEmployee(int id) {
        employeeDao.deleteEmployeeById(id);
    }
}
