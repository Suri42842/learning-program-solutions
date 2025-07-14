// AdapterPattern.java

import java.util.Scanner;

// Target Interface
interface PaymentProcessor {
    void processPayment(double amount);
}

// Adaptee 1
class PayPalGateway {
    public void makePayment(double amountInDollars) {
        System.out.println("Payment of $" + amountInDollars + " processed via PayPal.");
    }
}

// Adaptee 2
class StripeGateway {
    public void sendPayment(double value) {
        System.out.println("Payment of $" + value + " sent via Stripe.");
    }
}

// Adaptee 3
class RazorpayGateway {
    public void doTransaction(double amt) {
        System.out.println("Transaction of $" + amt + " completed via Razorpay.");
    }
}

// Adapter for PayPal
class PayPalAdapter implements PaymentProcessor {
    private PayPalGateway paypal = new PayPalGateway();

    public void processPayment(double amount) {
        paypal.makePayment(amount);
    }
}

// Adapter for Stripe
class StripeAdapter implements PaymentProcessor {
    private StripeGateway stripe = new StripeGateway();

    public void processPayment(double amount) {
        stripe.sendPayment(amount);
    }
}

// Adapter for Razorpay
class RazorpayAdapter implements PaymentProcessor {
    private RazorpayGateway razorpay = new RazorpayGateway();

    public void processPayment(double amount) {
        razorpay.doTransaction(amount);
    }
}

// Main class with switch-case
public class AdapterPattern {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("=== Payment Processor ===");
        System.out.println("Select a Payment Gateway:");
        System.out.println("1. PayPal");
        System.out.println("2. Stripe");
        System.out.println("3. Razorpay");
        System.out.print("Enter choice (1-3): ");
        int choice = scanner.nextInt();

        System.out.print("Enter amount to pay: $");
        double amount = scanner.nextDouble();

        PaymentProcessor processor = null;

        switch (choice) {
            case 1:
                processor = new PayPalAdapter();
                break;
            case 2:
                processor = new StripeAdapter();
                break;
            case 3:
                processor = new RazorpayAdapter();
                break;
            default:
                System.out.println("Invalid choice.");
                System.exit(0);
        }

        processor.processPayment(amount);
        scanner.close();
    }
}
