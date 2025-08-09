 import java.util.Scanner;
import java.util.Arrays;

class Book {
    int bookId;
    String title;
    String author;

    Book(int bookId, String title, String author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }
}

public class LibraryManagementSystem {
    static Book[] books = new Book[100];
    static int count = 0;
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int choice;
        do {
            System.out.println("1.Add Book 2.Linear Search by Title 3.Binary Search by Title 4.Display All Books 5.Exit");
            choice = scanner.nextInt();
            scanner.nextLine();
            if (choice == 1) addBook();
            else if (choice == 2) linearSearch();
            else if (choice == 3) binarySearch();
            else if (choice == 4) displayBooks();
        } while (choice != 5);
    }

    static void addBook() {
        System.out.print("Enter Book ID: ");
        int id = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter Title: ");
        String title = scanner.nextLine();
        System.out.print("Enter Author: ");
        String author = scanner.nextLine();
        books[count++] = new Book(id, title, author);
    }

    static void linearSearch() {
        System.out.print("Enter title to search: ");
        String title = scanner.nextLine();
        boolean found = false;
        for (int i = 0; i < count; i++) {
            if (books[i].title.equalsIgnoreCase(title)) {
                System.out.println("Found: " + books[i].bookId + " " + books[i].title + " " + books[i].author);
                found = true;
            }
        }
        if (!found) System.out.println("Book not found.");
    }

    static void binarySearch() {
        if (count == 0) {
            System.out.println("No books to search.");
            return;
        }
        Arrays.sort(books, 0, count, (a, b) -> a.title.compareToIgnoreCase(b.title));
        System.out.print("Enter title to search: ");
        String key = scanner.nextLine();
        int left = 0, right = count - 1;
        boolean found = false;
        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = books[mid].title.compareToIgnoreCase(key);
            if (cmp == 0) {
                System.out.println("Found: " + books[mid].bookId + " " + books[mid].title + " " + books[mid].author);
                found = true;
                break;
            } else if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        if (!found) System.out.println("Book not found.");
    }

    static void displayBooks() {
        if (count == 0) System.out.println("No books available.");
        else {
            for (int i = 0; i < count; i++) {
                System.out.println(books[i].bookId + " " + books[i].title + " " + books[i].author);
            }
        }
    }
}
