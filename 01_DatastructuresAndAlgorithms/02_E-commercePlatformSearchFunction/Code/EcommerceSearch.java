 import java.util.Scanner;
import java.util.Arrays;

class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    void display() {
        System.out.println("ID: " + productId + ", Name: " + productName + ", Category: " + category);
    }
}

public class EcommerceSearch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Product[] products = {
            new Product(101, "Phone", "Electronics"),
            new Product(205, "Shoes", "Fashion"),
            new Product(303, "Laptop", "Electronics"),
            new Product(404, "Watch", "Accessories"),
            new Product(150, "Tablet", "Electronics")
        };

        System.out.println("Available Products:");
        for (int i = 0; i < products.length; i++) {
            products[i].display();
        }

        int choice = 0;
        while (choice != 3) {
            System.out.println("\nChoose search method:");
            System.out.println("1. Linear Search by Name");
            System.out.println("2. Binary Search by ID");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");

            if (scanner.hasNextInt()) {
                choice = scanner.nextInt();
                scanner.nextLine();

                if (choice == 1) {
                    System.out.print("Enter product name to search: ");
                    String name = scanner.nextLine();
                    boolean found = false;
                    for (int i = 0; i < products.length; i++) {
                        if (products[i].productName.equalsIgnoreCase(name)) {
                            System.out.println("Product Found:");
                            products[i].display();
                            found = true;
                        }
                    }
                    if (!found) {
                        System.out.println("Product not found.");
                    }
                } else if (choice == 2) {
                    Product[] sortedProducts = Arrays.copyOf(products, products.length);
                    for (int i = 0; i < sortedProducts.length - 1; i++) {
                        for (int j = 0; j < sortedProducts.length - i - 1; j++) {
                            if (sortedProducts[j].productId > sortedProducts[j + 1].productId) {
                                Product temp = sortedProducts[j];
                                sortedProducts[j] = sortedProducts[j + 1];
                                sortedProducts[j + 1] = temp;
                            }
                        }
                    }

                    System.out.print("Enter product ID to search: ");
                    if (scanner.hasNextInt()) {
                        int id = scanner.nextInt();
                        scanner.nextLine();
                        int low = 0, high = sortedProducts.length - 1;
                        boolean found = false;
                        while (low <= high) {
                            int mid = (low + high) / 2;
                            if (sortedProducts[mid].productId == id) {
                                System.out.println("Product Found:");
                                sortedProducts[mid].display();
                                found = true;
                                break;
                            } else if (sortedProducts[mid].productId < id) {
                                low = mid + 1;
                            } else {
                                high = mid - 1;
                            }
                        }
                        if (!found) {
                            System.out.println("Product not found.");
                        }
                    } else {
                        System.out.println("Invalid input. Please enter a valid number.");
                        scanner.next(); // clear the invalid input
                    }
                } else if (choice == 3) {
                    System.out.println("Exiting search system.");
                } else {
                    System.out.println("Invalid choice.");
                }
            } else {
                System.out.println("Please enter a valid number.");
                scanner.next(); // skip invalid input
            }
        }

        scanner.close();
    }
}

