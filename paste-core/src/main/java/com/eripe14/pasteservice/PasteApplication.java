package com.eripe14.pasteservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication()
@EntityScan(basePackages = {"com.eripe14.pasteservice", "com.eripe14.pasteauthorization"})
@EnableJpaRepositories(basePackages = {"com.eripe14.pasteservice", "com.eripe14.pasteauthorization"})
public class PasteApplication {

    public static void main(String[] args) {
        SpringApplication.run(PasteApplication.class, args);
    }

}