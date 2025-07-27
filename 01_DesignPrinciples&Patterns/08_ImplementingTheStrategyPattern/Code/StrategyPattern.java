import java.util.Scanner;

interface PaymentStrategy {
    void pay(double amount);
}

class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;

    public CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using Credit Card: " + cardNumber);
    }
}

class PayPalPayment implements PaymentStrategy {
    private String email;

    public PayPalPayment(String email) {
        this.email = email;
    }

    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using PayPal: " + email);
    }
}

class PaymentContext {
    private PaymentStrategy strategy;

    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void makePayment(double amount) {
        if (strategy != null) {
            strategy.pay(amount);
        } else {
            System.out.println("Payment method not selected.");
        }
    }
}

public class StrategyPattern {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        PaymentContext context = new PaymentContext();
        boolean running = true;

        while (running) {
            System.out.println("\n--- Payment Menu ---");
            System.out.println("1. Pay using Credit Card");
            System.out.println("2. Pay using PayPal");
            System.out.println("3. Exit");
            System.out.print("Choose an option: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter Credit Card Number: ");
                    scanner.nextLine();
                    String card = scanner.nextLine();
                    context.setPaymentStrategy(new CreditCardPayment(card));
                    System.out.print("Enter amount: ₹");
                    double amount1 = scanner.nextDouble();
                    context.makePayment(amount1);
                    break;
                case 2:
                    System.out.print("Enter PayPal Email: ");
                    scanner.nextLine();
                    String email = scanner.nextLine();
                    context.setPaymentStrategy(new PayPalPayment(email));
                    System.out.print("Enter amount: ₹");
                    double amount2 = scanner.nextDouble();
                    context.makePayment(amount2);
                    break;
                case 3:
                    running = false;
                    break;
                default:
                    System.out.println("Invalid option. Try again.");
            }
        }

        scanner.close();
    }
}
