import java.util.*;

interface Stock {
    void register(Observer o);
    void deregister(Observer o);
    void notifyObservers();
    void setPrice(double price);
}

interface Observer {
    void update(double price);
}

class StockMarket implements Stock {
    private List<Observer> observers = new ArrayList<>();
    private double price;

    public void register(Observer o) {
        observers.add(o);
    }

    public void deregister(Observer o) {
        observers.remove(o);
    }

    public void notifyObservers() {
        for (Observer o : observers) {
            o.update(price);
        }
    }

    public void setPrice(double price) {
        this.price = price;
        notifyObservers();
    }
}

class MobileApp implements Observer {
    private String name;

    public MobileApp(String name) {
        this.name = name;
    }

    public void update(double price) {
        System.out.println("MobileApp " + name + ": Stock price updated to " + price);
    }
}

class WebApp implements Observer {
    private String name;

    public WebApp(String name) {
        this.name = name;
    }

    public void update(double price) {
        System.out.println("WebApp " + name + ": Stock price updated to " + price);
    }
}

public class ObserverPattern {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StockMarket market = new StockMarket();

        Observer mobile1 = new MobileApp("App1");
        Observer mobile2 = new MobileApp("App2");
        Observer web = new WebApp("Dashboard");

        boolean running = true;

        while (running) {
            System.out.println("\n--- Stock Market Menu ---");
            System.out.println("1. Register Mobile App 1");
            System.out.println("2. Register Mobile App 2");
            System.out.println("3. Register Web App");
            System.out.println("4. Deregister Mobile App 2");
            System.out.println("5. Update Stock Price");
            System.out.println("6. Exit");
            System.out.print("Choose an option: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    market.register(mobile1);
                    System.out.println("Mobile App 1 registered.");
                    break;
                case 2:
                    market.register(mobile2);
                    System.out.println("Mobile App 2 registered.");
                    break;
                case 3:
                    market.register(web);
                    System.out.println("Web App registered.");
                    break;
                case 4:
                    market.deregister(mobile2);
                    System.out.println("Mobile App 2 deregistered.");
                    break;
                case 5:
                    System.out.print("Enter new stock price: ");
                    double newPrice = scanner.nextDouble();
                    market.setPrice(newPrice);
                    break;
                case 6:
                    running = false;
                    break;
                default:
                    System.out.println("Invalid option. Try again.");
            }
        }

        scanner.close();
    }
}
