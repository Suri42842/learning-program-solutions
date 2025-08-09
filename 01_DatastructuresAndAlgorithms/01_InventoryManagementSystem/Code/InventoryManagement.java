

import java.util.*;

class Product {
    private int productId;
    private String productName;
    private int quantity;
    private double price;

    public Product(int productId, String productName, int quantity, double price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public int getProductId() { return productId; }
    public void setProductName(String name) { this.productName = name; }
    public void setQuantity(int qty) { this.quantity = qty; }
    public void setPrice(double price) { this.price = price; }

    public String toString() {
        return "ID: " + productId + ", Name: " + productName +
               ", Qty: " + quantity + ", Price: ₹" + price;
    }
}

public class InventoryManagement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashMap<Integer, Product> inventory = new HashMap<>();

        while (true) {
            System.out.println("\n1. Add Product\n2. Update Product\n3. Delete Product\n4. View All\n5. Exit");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter Product ID: ");
                    int id = sc.nextInt();
                    sc.nextLine(); // consume newline
                    System.out.print("Enter Name: ");
                    String name = sc.nextLine();
                    System.out.print("Enter Quantity: ");
                    int qty = sc.nextInt();
                    System.out.print("Enter Price: ");
                    double price = sc.nextDouble();
                    inventory.put(id, new Product(id, name, qty, price));
                    System.out.println("Product added.");
                    break;
                case 2:
                    System.out.print("Enter Product ID to update: ");
                    id = sc.nextInt();
                    if (inventory.containsKey(id)) {
                        sc.nextLine(); // consume newline
                        System.out.print("Enter New Name: ");
                        name = sc.nextLine();
                        System.out.print("Enter New Quantity: ");
                        qty = sc.nextInt();
                        System.out.print("Enter New Price: ");
                        price = sc.nextDouble();
                        Product p = inventory.get(id);
                        p.setProductName(name);
                        p.setQuantity(qty);
                        p.setPrice(price);
                        System.out.println("Product updated.");
                    } else {
                        System.out.println("Product not found.");
                    }
                    break;
                case 3:
                    System.out.print("Enter Product ID to delete: ");
                    id = sc.nextInt();
                    if (inventory.remove(id) != null)
                        System.out.println("Product removed.");
                    else
                        System.out.println("Product not found.");
                    break;
                case 4:
                    System.out.println("Current Inventory:");
                    for (Product prod : inventory.values())
                        System.out.println(prod);
                    break;
                case 5:
                    System.out.println("Exiting...");
                    sc.close();
                    return;
                default:
                    System.out.println("Invalid option.");
            }
        }
    }
}
