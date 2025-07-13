 package com.example;

public class NotificationService {
    private Notifier notifier;

    public NotificationService(Notifier notifier) {
        this.notifier = notifier;
    }

    public void alertUser() {
        notifier.send("admin", "System error occurred");
    }
}
