package com.example.ems;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
    Department findByName(String name);

    @Query("SELECT d FROM Department d WHERE d.name LIKE %:keyword%")
    List<Department> searchByKeyword(String keyword);
}