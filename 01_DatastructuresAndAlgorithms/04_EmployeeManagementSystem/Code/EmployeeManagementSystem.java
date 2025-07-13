 import java.util.Scanner;

class Employee {
    int employeeId;
    String name;
    String position;
    double salary;

    Employee(int employeeId, String name, String position, double salary) {
        this.employeeId = employeeId;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    void display() {
        System.out.println("ID: " + employeeId + ", Name: " + name + ", Position: " + position + ", Salary: " + salary);
    }
}

public class EmployeeManagementSystem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Employee[] employees = new Employee[100];
        int count = 0;

        int choice;
        do {
            System.out.println("\n1. Add Employee");
            System.out.println("2. Search Employee by ID");
            System.out.println("3. Display All Employees");
            System.out.println("4. Delete Employee by ID");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            if (choice == 1) {
                if (count >= employees.length) {
                    System.out.println("Employee storage is full.");
                } else {
                    System.out.print("Enter Employee ID: ");
                    int id = sc.nextInt();
                    boolean exists = false;
                    for (int i = 0; i < count; i++) {
                        if (employees[i].employeeId == id) {
                            exists = true;
                            break;
                        }
                    }
                    if (exists) {
                        System.out.println("Employee with ID already exists.");
                    } else {
                        sc.nextLine();
                        System.out.print("Enter Name: ");
                        String name = sc.nextLine();
                        System.out.print("Enter Position: ");
                        String position = sc.nextLine();
                        System.out.print("Enter Salary: ");
                        double salary = sc.nextDouble();
                        employees[count] = new Employee(id, name, position, salary);
                        count++;
                        System.out.println("Employee added successfully.");
                    }
                }
            } else if (choice == 2) {
                System.out.print("Enter Employee ID to Search: ");
                int searchId = sc.nextInt();
                boolean found = false;
                for (int i = 0; i < count; i++) {
                    if (employees[i].employeeId == searchId) {
                        employees[i].display();
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    System.out.println("Employee not found.");
                }
            } else if (choice == 3) {
                if (count == 0) {
                    System.out.println("No employees to display.");
                } else {
                    for (int i = 0; i < count; i++) {
                        employees[i].display();
                    }
                }
            } else if (choice == 4) {
                System.out.print("Enter Employee ID to Delete: ");
                int deleteId = sc.nextInt();
                boolean deleted = false;
                for (int i = 0; i < count; i++) {
                    if (employees[i].employeeId == deleteId) {
                        for (int j = i; j < count - 1; j++) {
                            employees[j] = employees[j + 1];
                        }
                        employees[count - 1] = null;
                        count--;
                        deleted = true;
                        System.out.println("Employee deleted.");
                        break;
                    }
                }
                if (!deleted) {
                    System.out.println("Employee ID not found.");
                }
            } else if (choice == 5) {
                System.out.println("Exiting...");
            } else {
                System.out.println("Invalid choice.");
            }

        } while (choice != 5);

        sc.close();
    }
}
