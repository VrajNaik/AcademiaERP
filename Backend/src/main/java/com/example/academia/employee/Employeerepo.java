package com.example.academia.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface Employeerepo extends JpaRepository <Employee,Integer> {
    Optional<Employee> findByEmail(String email);
}
