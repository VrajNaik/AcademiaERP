package com.example.academia.bean;

import com.example.academia.salary.Salary;
import com.example.academia.salary.SalaryDTO;
import com.example.academia.salary.SalaryObject;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SalaryResponse {

    private SalaryDTO salary;
    private List<SalaryObject> details;
}
