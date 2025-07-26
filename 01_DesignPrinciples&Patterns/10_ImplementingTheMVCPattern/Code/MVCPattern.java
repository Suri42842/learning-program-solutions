import java.util.Scanner;

class Student {
    private String name;
    private String id;
    private String grade;

    public Student(String name, String id, String grade) {
        this.name = name;
        this.id = id;
        this.grade = grade;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }
}

class StudentView {
    public void displayStudentDetails(Student student) {
        System.out.println("\n--- Student Details ---");
        System.out.println("Name  : " + student.getName());
        System.out.println("ID    : " + student.getId());
        System.out.println("Grade : " + student.getGrade());
    }
}

class StudentController {
    private Student student;
    private StudentView view;

    public StudentController(Student student, StudentView view) {
        this.student = student;
        this.view = view;
    }

    public void updateView() {
        view.displayStudentDetails(student);
    }

    public void setStudentName(String name) {
        student.setName(name);
    }

    public void setStudentId(String id) {
        student.setId(id);
    }

    public void setStudentGrade(String grade) {
        student.setGrade(grade);
    }

    public Student getStudent() {
        return student;
    }
}

public class MVCPattern {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter initial student details:");

        System.out.print("Name: ");
        String name = scanner.nextLine();

        System.out.print("ID: ");
        String id = scanner.nextLine();

        System.out.print("Grade: ");
        String grade = scanner.nextLine();

        Student student = new Student(name, id, grade);
        StudentView view = new StudentView();
        StudentController controller = new StudentController(student, view);

        boolean running = true;

        while (running) {
            System.out.println("\n--- Student Management ---");
            System.out.println("1. Display Student");
            System.out.println("2. Update Name");
            System.out.println("3. Update ID");
            System.out.println("4. Update Grade");
            System.out.println("5. Exit");
            System.out.print("Choose an option: ");

            int choice = Integer.parseInt(scanner.nextLine());

            switch (choice) {
                case 1:
                    controller.updateView();
                    break;
                case 2:
                    System.out.print("Enter new name: ");
                    controller.setStudentName(scanner.nextLine());
                    break;
                case 3:
                    System.out.print("Enter new ID: ");
                    controller.setStudentId(scanner.nextLine());
                    break;
                case 4:
                    System.out.print("Enter new grade: ");
                    controller.setStudentGrade(scanner.nextLine());
                    break;
                case 5:
                    running = false;
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        }

        scanner.close();
    }
}
