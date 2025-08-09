
package com.example.employeerestservice.dao;

import com.example.employeerestservice.model.Employee;
import org.springframework.stereotype.Repository;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ClassPathResource;

import jakarta.annotation.PostConstruct;
import javax.xml.parsers.DocumentBuilderFactory;
import java.util.ArrayList;
import java.util.List;
import org.w3c.dom.*;

@Repository
public class EmployeeDao {

    private List<Employee> employeeList = new ArrayList<>();

    @PostConstruct
    public void loadEmployees() {
        try {
            Resource resource = new ClassPathResource("employees.xml");
            Document doc = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(resource.getInputStream());
            NodeList nodeList = doc.getElementsByTagName("employee");

            for (int i = 0; i < nodeList.getLength(); i++) {
                Element element = (Element) nodeList.item(i);
                int id = Integer.parseInt(element.getElementsByTagName("id").item(0).getTextContent());
                String name = element.getElementsByTagName("name").item(0).getTextContent();
                String department = element.getElementsByTagName("department").item(0).getTextContent();
                employeeList.add(new Employee(id, name, department));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Employee> getAllEmployees() {
        return employeeList;
    }

    public Employee getEmployeeById(int id) {
        return employeeList.stream().filter(emp -> emp.getId() == id).findFirst().orElse(null);
    }
}
