package com.example.academia.controller;

import com.example.academia.Academiaservice.Credentials;
import com.example.academia.Academiaservice.EmployeeService;
import com.example.academia.bean.AuthResponse;
import com.example.academia.bean.SalaryResponse;
import com.example.academia.employee.Employee;
import com.example.academia.salary.Salary;
import com.example.academia.salary.SalaryDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(
        origins = {
                "http://localhost:3000",
        },
        methods = {
                RequestMethod.OPTIONS,
                RequestMethod.DELETE,
                RequestMethod.GET,
                RequestMethod.POST,
                RequestMethod.PUT
        }
)

public class Controller {
        private final EmployeeService employeeService;
        @Autowired
        public Controller(EmployeeService employeeService) {
                this.employeeService = employeeService;
        }

        @PostMapping("/login")
        public AuthResponse login(@RequestBody Credentials credentials){ return employeeService.login(credentials); }
        @PostMapping("/salary")
        public SalaryResponse getSalaryDetails(@RequestBody SalaryDTO salaryDTO){return employeeService.getSalaryDetails(salaryDTO);

        }

}
