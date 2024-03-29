package com.example.academia.structure;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.OffsetDateTime;

@Data
@Entity
@Table(name = "salary_structure")
public class SalaryStructure {
    @Id
    @Column(name = "user_id")
    private int userId;

    @Column(name = "description")
    private String description;

    @Column(name = "basic_pay")
    private float basicPay;

    @Column(name = "hra_pay")
    private float hraPay;

    @Column(name = "other_allowance")
    private float otherAllowance;

    @Column(name = "total_salary")
    private float totalSalary;

    @CreationTimestamp
    @Column(name = "updatedAt")
    private OffsetDateTime updatedAt;
}
