 import java.util.Scanner;

class Task {
    int taskId;
    String taskName;
    String status;
    Task next;

    Task(int taskId, String taskName, String status) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.status = status;
        this.next = null;
    }
}

public class TaskManagementSystem {
    static Task head = null;
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int choice;
        do {
            System.out.println("1.Add Task 2.Search Task 3.Traverse Tasks 4.Delete Task 5.Exit");
            choice = scanner.nextInt();
            scanner.nextLine();
            if (choice == 1) addTask();
            else if (choice == 2) searchTask();
            else if (choice == 3) traverseTasks();
            else if (choice == 4) deleteTask();
        } while (choice != 5);
    }

    static void addTask() {
        System.out.print("Enter Task ID: ");
        int id = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter Task Name: ");
        String name = scanner.nextLine();
        System.out.print("Enter Status: ");
        String status = scanner.nextLine();
        Task newTask = new Task(id, name, status);
        if (head == null) head = newTask;
        else {
            Task temp = head;
            while (temp.next != null) temp = temp.next;
            temp.next = newTask;
        }
    }

    static void searchTask() {
        System.out.print("Enter Task ID to search: ");
        int id = scanner.nextInt();
        Task temp = head;
        boolean found = false;
        while (temp != null) {
            if (temp.taskId == id) {
                System.out.println("Task Found: " + temp.taskId + " " + temp.taskName + " " + temp.status);
                found = true;
                break;
            }
            temp = temp.next;
        }
        if (!found) System.out.println("Task not found.");
    }

    static void traverseTasks() {
        Task temp = head;
        if (temp == null) System.out.println("No tasks available.");
        else {
            while (temp != null) {
                System.out.println(temp.taskId + " " + temp.taskName + " " + temp.status);
                temp = temp.next;
            }
        }
    }

    static void deleteTask() {
        System.out.print("Enter Task ID to delete: ");
        int id = scanner.nextInt();
        if (head == null) System.out.println("List is empty.");
        else if (head.taskId == id) {
            head = head.next;
            System.out.println("Task deleted.");
        } else {
            Task temp = head;
            Task prev = null;
            boolean found = false;
            while (temp != null) {
                if (temp.taskId == id) {
                    prev.next = temp.next;
                    System.out.println("Task deleted.");
                    found = true;
                    break;
                }
                prev = temp;
                temp = temp.next;
            }
            if (!found) System.out.println("Task not found.");
        }
    }
}
