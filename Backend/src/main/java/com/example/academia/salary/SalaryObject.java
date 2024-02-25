package com.example.academia.salary;


import lombok.Data;

@Data
public class SalaryObject {
    private String month;
    private String year;
    private float amount;
    private String paymentId;
    private String paymentDate;
    private String description;
}
