package com.example.academia.config;

import com.example.academia.employee.Employeerepo;
import com.example.academia.salary.Salaryrepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



@Configuration
public class Config {

    @Bean
    CommandLineRunner commandLineRunner(Employeerepo employee, Salaryrepo salary) {
        return args -> {
        };
    }
}
