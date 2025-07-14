import java.util.Scanner;

class Order {
    int orderId;
    String customerName;
    double totalPrice;

    Order(int orderId, String customerName, double totalPrice) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalPrice = totalPrice;
    }
}

public class OrderSorting {

    public static void bubbleSort(Order[] orders) {
        int n = orders.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (orders[j].totalPrice > orders[j + 1].totalPrice) {
                    Order temp = orders[j];
                    orders[j] = orders[j + 1];
                    orders[j + 1] = temp;
                }
            }
        }
    }

    public static void quickSort(Order[] orders, int low, int high) {
        if (low < high) {
            int pi = partition(orders, low, high);
            quickSort(orders, low, pi - 1);
            quickSort(orders, pi + 1, high);
        }
    }

    public static int partition(Order[] orders, int low, int high) {
        double pivot = orders[high].totalPrice;
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (orders[j].totalPrice < pivot) {
                i++;
                Order temp = orders[i];
                orders[i] = orders[j];
                orders[j] = temp;
            }
        }
        Order temp = orders[i + 1];
        orders[i + 1] = orders[high];
        orders[high] = temp;
        return i + 1;
    }

    public static void printOrders(Order[] orders) {
        for (Order o : orders) {
            System.out.println("Order ID: " + o.orderId + ", Customer: " + o.customerName + ", Total: " + o.totalPrice);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Order[] orders = {
            new Order(101, "Alice", 2500.50),
            new Order(102, "Bob", 1500.75),
            new Order(103, "Charlie", 3500.00),
            new Order(104, "David", 2000.00)
        };

        System.out.println("Original Orders:");
        printOrders(orders);

        System.out.println("Choose Sorting Method:");
        System.out.println("1. Bubble Sort");
        System.out.println("2. Quick Sort");

        int choice = scanner.nextInt();

        if (choice == 1) {
            bubbleSort(orders);
            System.out.println("Orders Sorted Using Bubble Sort:");
            printOrders(orders);
        } else if (choice == 2) {
            quickSort(orders, 0, orders.length - 1);
            System.out.println("Orders Sorted Using Quick Sort:");
            printOrders(orders);
        } else {
            System.out.println("Invalid choice.");
        }

        scanner.close();
    }
}
