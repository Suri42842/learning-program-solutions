
class Computer {
    private String CPU;
    private String RAM;
    private String storage;
    private String graphicsCard;
    private String operatingSystem;

    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.storage = builder.storage;
        this.graphicsCard = builder.graphicsCard;
        this.operatingSystem = builder.operatingSystem;
    }

    public void displayConfiguration() {
        System.out.println("Computer Configuration:");
        System.out.println("CPU: " + CPU);
        System.out.println("RAM: " + RAM);
        System.out.println("Storage: " + (storage != null ? storage : "Not Set"));
        System.out.println("Graphics Card: " + (graphicsCard != null ? graphicsCard : "Not Set"));
        System.out.println("Operating System: " + (operatingSystem != null ? operatingSystem : "Not Set"));
        System.out.println();
    }

    public static class Builder {
        private String CPU;
        private String RAM;
        private String storage;
        private String graphicsCard;
        private String operatingSystem;

        public Builder(String CPU, String RAM) {
            this.CPU = CPU;
            this.RAM = RAM;
        }

        public Builder setStorage(String storage) {
            this.storage = storage;
            return this;
        }

        public Builder setGraphicsCard(String graphicsCard) {
            this.graphicsCard = graphicsCard;
            return this;
        }

        public Builder setOperatingSystem(String os) {
            this.operatingSystem = os;
            return this;
        }

        public Computer build() {
            return new Computer(this);
        }
    }
}

public class BuilderPattern {
    public static void main(String[] args) {
        Computer basicComputer = new Computer.Builder("Intel i3", "8GB").build();

        Computer gamingComputer = new Computer.Builder("Intel i9", "32GB")
            .setStorage("1TB SSD")
            .setGraphicsCard("NVIDIA RTX 4080")
            .setOperatingSystem("Windows 11")
            .build();

        Computer workstation = new Computer.Builder("AMD Ryzen 9", "64GB")
            .setStorage("2TB SSD")
            .setOperatingSystem("Ubuntu Linux")
            .build();

        basicComputer.displayConfiguration();
        gamingComputer.displayConfiguration();
        workstation.displayConfiguration();
    }
}
