import java.util.*;

interface CustomerRepository {
    Customer findCustomerById(int id);
    void addCustomer(Customer customer);
}

class Customer {
    private int id;
    private String name;
    private String email;

    public Customer(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}

class CustomerRepositoryImpl implements CustomerRepository {
    private Map<Integer, Customer> customerMap;

    public CustomerRepositoryImpl() {
        customerMap = new HashMap<>();
    }

    public Customer findCustomerById(int id) {
        return customerMap.get(id);
    }

    public void addCustomer(Customer customer) {
        customerMap.put(customer.getId(), customer);
    }
}

class CustomerService {
    private CustomerRepository repository;

    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public void displayCustomerById(int id) {
        Customer customer = repository.findCustomerById(id);
        if (customer != null) {
            System.out.println("\n--- Customer Details ---");
            System.out.println("ID    : " + customer.getId());
            System.out.println("Name  : " + customer.getName());
            System.out.println("Email : " + customer.getEmail());
        } else {
            System.out.println("Customer not found.");
        }
    }

    public void addCustomer(Customer customer) {
        repository.addCustomer(customer);
        System.out.println("Customer added successfully.");
    }
}

public class DependencyInjection{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        CustomerRepository repository = new CustomerRepositoryImpl();
        CustomerService service = new CustomerService(repository);

        boolean running = true;

        while (running) {
            System.out.println("\n--- Customer Management ---");
            System.out.println("1. Add Customer");
            System.out.println("2. Find Customer by ID");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            int choice = Integer.parseInt(scanner.nextLine());

            switch (choice) {
                case 1:
                    System.out.print("Enter Customer ID: ");
                    int id = Integer.parseInt(scanner.nextLine());

                    System.out.print("Enter Customer Name: ");
                    String name = scanner.nextLine();

                    System.out.print("Enter Customer Email: ");
                    String email = scanner.nextLine();

                    Customer newCustomer = new Customer(id, name, email);
                    service.addCustomer(newCustomer);
                    break;

                case 2:
                    System.out.print("Enter Customer ID to find: ");
                    int searchId = Integer.parseInt(scanner.nextLine());
                    service.displayCustomerById(searchId);
                    break;

                case 3:
                    running = false;
                    break;

                default:
                    System.out.println("Invalid choice. Try again.");
            }
        }

        scanner.close();
    }
}
