package com.library;

import org.springframework.stereotype.Repository;

@Repository
public class BookRepository {
    public String getBookName() {
        return "Effective Java";
    }
}
