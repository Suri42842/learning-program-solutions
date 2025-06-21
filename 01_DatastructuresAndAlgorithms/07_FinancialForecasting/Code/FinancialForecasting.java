 import java.util.Scanner;

public class FinancialForecasting {
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.print("Enter number of years to predict: ");
        int years = scanner.nextInt();
        System.out.print("Enter current value: ");
        double currentValue = scanner.nextDouble();
        System.out.print("Enter annual growth rate in %: ");
        double growthRate = scanner.nextDouble();

        double futureValue = predictFutureValue(currentValue, growthRate, years);
        System.out.printf("Predicted future value after %d years: %.2f\n", years, futureValue);

        System.out.println("Year-wise forecast:");
        for (int i = 0; i <= years; i++) {
            double val = predictFutureValue(currentValue, growthRate, i);
            System.out.printf("Year %d: %.2f\n", i, val);
        }
    }

    static double predictFutureValue(double current, double rate, int years) {
        if (years == 0) return current;
        return predictFutureValue(current, rate, years - 1) * (1 + rate / 100);
    }
}
