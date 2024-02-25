package com.example.academia.salary;

import com.example.academia.employee.Employee;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;
import java.time.OffsetDateTime;


@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Salary {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;
    @Column(insertable=false, updatable=false)
    private int salary_id;
    private String month;
    private String year;
    @CreationTimestamp
    private OffsetDateTime paymentDate;
    private float amount;
    private String description;
    @ManyToOne
    @JoinColumn(name = "salary_id")
    private Employee employee;
}
