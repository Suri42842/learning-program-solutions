package com.example.departmentrest;

import java.util.List;

public class DepartmentDao {
    private List<Department> departmentList;

    public List<Department> getAllDepartments() {
        return departmentList;
    }

    public void setDepartmentList(List<Department> departmentList) {
        this.departmentList = departmentList;
    }
}
