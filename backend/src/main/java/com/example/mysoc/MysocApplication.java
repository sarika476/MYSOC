package com.example.mysoc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@EnableAutoConfiguration
//@ComponentScan(basePackages = {"com.example.mysoc.service"})
public class MysocApplication {

    public static void main(String[] args) {
        SpringApplication.run(MysocApplication.class, args);
    }

}
