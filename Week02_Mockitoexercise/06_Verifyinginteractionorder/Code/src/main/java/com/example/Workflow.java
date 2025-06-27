 package com.example;

public class Workflow {
    private final Service service;

    public Workflow(Service service) {
        this.service = service;
    }

    public void execute() {
        service.stepOne();
        service.stepTwo();
        service.stepThree();
    }
}
