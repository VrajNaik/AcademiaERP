package com.example.academia.salary;

import com.example.academia.employee.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Salaryrepo extends JpaRepository <Salary,Integer> {

    @Query("SELECT s from Salary s where s.salary_id = ?1")
    List<Salary> findSalariesByEmployeeId(int id);
}
