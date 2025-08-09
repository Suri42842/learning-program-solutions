package com.library;

import com.library.service.LibraryService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {

    public static void main(String[] args) throws InterruptedException {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        LibraryService service = context.getBean(LibraryService.class);
        service.issueBook("Spring in Action");
        service.returnBook("Spring in Action");
    }
}
