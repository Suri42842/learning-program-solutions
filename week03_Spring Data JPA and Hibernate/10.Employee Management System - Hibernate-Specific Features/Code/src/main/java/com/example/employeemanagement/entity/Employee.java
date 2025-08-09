package com.example.employeemanagement.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@DynamicUpdate                // Only changed columns in UPDATE
@BatchSize(size = 30)         // Fetch batching for collections
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    @Column(columnDefinition = "varchar(255)")
    private String department;

    // Example JSON field stored as text; requires hibernate-types lib
    @Type(org.hibernate.type.TextType.class)
    @Column(columnDefinition = "clob")
    private String attributesJson; // e.g. {"skill":"Java","level":5}
}
