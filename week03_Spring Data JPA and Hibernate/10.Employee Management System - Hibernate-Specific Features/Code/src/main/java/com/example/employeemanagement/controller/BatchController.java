package com.example.employeemanagement.controller;

import com.example.employeemanagement.entity.Employee;
import com.example.employeemanagement.service.EmployeeBatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/batch")
public class BatchController {

    @Autowired
    private EmployeeBatchService batchService;

    @PostMapping("/employees/{count}")
    public String createBulkEmployees(@PathVariable("count") int count) {
        List<Employee> list = new ArrayList<>();
        for (int i = 1; i <= count; i++) {
            Employee e = new Employee();
            e.setName("Emp-" + i);
            e.setEmail("emp" + i + "@example.com");
            e.setDepartment(i % 2 == 0 ? "IT" : "HR");
            e.setAttributesJson("{"index":" + i + "}");
            list.add(e);
        }
        batchService.saveEmployeesInBatch(list, 30);
        return "Inserted " + count + " employees in batch";
    }
}
