package com.example.employeeupdate.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.*;
import java.util.Date;
import java.util.List;

public class Employee {
    @NotNull
    private Integer id;

    @NotBlank
    @Size(min = 1, max = 30)
    private String name;

    @NotNull
    @Min(0)
    private Double salary;

    @NotNull
    private Boolean permanent;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private Date dateOfBirth;

    @NotNull
    private Department department;

    private List<Skill> skills;

	public Object getId() {
		// TODO Auto-generated method stub
		return null;
	}

	public Object getId1() {
		// TODO Auto-generated method stub
		return null;
	}

    // Getters and setters omitted for brevity
}
