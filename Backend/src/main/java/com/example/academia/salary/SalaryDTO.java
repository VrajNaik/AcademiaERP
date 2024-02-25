package com.example.academia.salary;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class SalaryDTO {
    int employee_id;
    String description;
    float basicPay;
    float hraPay;
    float otherPay;
    float totalAmount;

}
