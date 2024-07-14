package com.eripe14.pasteservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.eripe14.pasteservice", "com.eripe14.pasteauthorization"})
public class PasteApplication {

    public static void main(String[] args) {
        SpringApplication.run(PasteApplication.class, args);
    }

}