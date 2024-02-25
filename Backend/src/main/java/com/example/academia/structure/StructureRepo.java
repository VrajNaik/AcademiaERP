package com.example.academia.structure;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StructureRepo extends JpaRepository<SalaryStructure, Integer> {
}
