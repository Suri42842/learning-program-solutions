package com.example.employeemanagement.service;

import com.example.employeemanagement.entity.Employee;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeBatchService {

    @PersistenceContext
    private EntityManager em;

    /**
     * Persist employees in batches for performance.
     */
    @Transactional
    public void saveEmployeesInBatch(List<Employee> employees, int batchSize) {
        for (int i = 0; i < employees.size(); i++) {
            em.persist(employees.get(i));
            if (i % batchSize == 0 && i > 0) {
                em.flush();
                em.clear(); // free memory
            }
        }
    }
}
