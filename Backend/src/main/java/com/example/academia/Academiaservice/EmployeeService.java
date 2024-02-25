package com.example.academia.Academiaservice;


import com.example.academia.bean.AuthResponse;
import com.example.academia.bean.SalaryResponse;
import com.example.academia.employee.Employee;
import com.example.academia.employee.Employeerepo;
import com.example.academia.salary.Salary;
import com.example.academia.salary.SalaryDTO;
import com.example.academia.salary.SalaryObject;
import com.example.academia.salary.Salaryrepo;
import com.example.academia.structure.SalaryStructure;
import com.example.academia.structure.StructureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    private final Salaryrepo salaryrepo;
    private final Employeerepo employeerepo;

    private final StructureRepo strucRepo;
    @Autowired
    public EmployeeService(Salaryrepo salaryrepo, Employeerepo employeerepo, StructureRepo strucRepo) {
        this.salaryrepo = salaryrepo;
        this.employeerepo = employeerepo;
        this.strucRepo = strucRepo;
    }
    public AuthResponse login(Credentials credentials){
        Optional<Employee> temp=employeerepo.findByEmail(credentials.username);
        AuthResponse resp = new AuthResponse();
        if( temp.map(value -> value.getPassword().equals(credentials.password)).orElse(false)){
            resp.setLoggedIn(true);
            resp.setUserId(String.valueOf(temp.get().getId()));
            return resp;
        }else {
            resp.setLoggedIn(false);
            resp.setUserId("-1");
            return resp;
        }
    }
    public SalaryResponse getSalaryDetails(SalaryDTO salaryDTO){

        SalaryResponse resp = new SalaryResponse();
        List<SalaryObject> ls = new ArrayList<>();
        List<Salary> salaryList = salaryrepo.findSalariesByEmployeeId(salaryDTO.getEmployee_id());
        //System.out.println("List: "+salaryList);
        Optional<Employee> emp = employeerepo.findById(salaryDTO.getEmployee_id());

        SalaryStructure structure = strucRepo.getReferenceById(salaryDTO.getEmployee_id());
        System.out.println("Structure: "+structure);
        resp.setSalary(getDTO(structure, emp.get()));
        resp.setDetails(ls);
        if(salaryList != null && !salaryList.isEmpty()){
            resp.setDetails(getSalaryList(salaryList));
        }
        return resp;
    }

    private List<SalaryObject> getSalaryList(List<Salary> list) {
        List<SalaryObject> ls = new ArrayList<>();
        for(Salary s : list){
            SalaryObject obj = new SalaryObject();
            obj.setAmount(s.getAmount());
            obj.setDescription(s.getDescription());
            obj.setYear(s.getYear());
            obj.setMonth(s.getMonth());
            obj.setPaymentDate(String.valueOf(s.getPaymentDate()));
            obj.setPaymentId(String.valueOf(s.getId()));
            ls.add(obj);
        }
        return ls;
    }

    private SalaryDTO getDTO(SalaryStructure structure, Employee employee) {
        SalaryDTO dto = new SalaryDTO();
        dto.setEmployee_id(employee.getId());
        dto.setBasicPay(structure.getBasicPay());
        dto.setHraPay(structure.getHraPay());
        dto.setOtherPay(structure.getOtherAllowance());
        dto.setTotalAmount(structure.getTotalSalary());
        dto.setDescription(structure.getDescription());

        return dto;

    }

}
