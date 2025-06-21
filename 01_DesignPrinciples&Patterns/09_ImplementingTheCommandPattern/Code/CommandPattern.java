import java.util.Scanner;

interface Command {
    void execute();
}

class Light {
    public void turnOn() {
        System.out.println("Light is turned ON.");
    }

    public void turnOff() {
        System.out.println("Light is turned OFF.");
    }
}

class LightOnCommand implements Command {
    private Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        light.turnOn();
    }
}

class LightOffCommand implements Command {
    private Light light;

    public LightOffCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        light.turnOff();
    }
}

class RemoteControl {
    private Command command;

    public void setCommand(Command command) {
        this.command = command;
    }

    public void pressButton() {
        if (command != null) {
            command.execute();
        } else {
            System.out.println("No command set.");
        }
    }
}

public class CommandPattern {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Light livingRoomLight = new Light();
        Command onCommand = new LightOnCommand(livingRoomLight);
        Command offCommand = new LightOffCommand(livingRoomLight);
        RemoteControl remote = new RemoteControl();
        boolean running = true;

        while (running) {
            System.out.println("\n--- Home Automation ---");
            System.out.println("1. Turn Light ON");
            System.out.println("2. Turn Light OFF");
            System.out.println("3. Exit");
            System.out.print("Choose an option: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    remote.setCommand(onCommand);
                    remote.pressButton();
                    break;
                case 2:
                    remote.setCommand(offCommand);
                    remote.pressButton();
                    break;
                case 3:
                    running = false;
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        }

        scanner.close();
    }
}
