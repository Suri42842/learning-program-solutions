package com.library.service;

import org.springframework.stereotype.Component;

@Component
public class LibraryService {

    public void issueBook(String bookName) throws InterruptedException {
        Thread.sleep(500);
        System.out.println("Issued book: " + bookName);
    }

    public void returnBook(String bookName) throws InterruptedException {
        Thread.sleep(300);
        System.out.println("Returned book: " + bookName);
    }
}
