package com.library;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public void displayBook() {
        System.out.println("Book: " + bookRepository.getBookName());
    }
}
