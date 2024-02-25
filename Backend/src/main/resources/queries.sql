select * from employee;

select * from salary;

CREATE TABLE salary_structure (
                                  user_id int PRIMARY KEY , FOREIGN KEY (user_id) REFERENCES employee(id),
                                  description VARCHAR(255) NOT NULL,
                                  basic_pay float NOT NULL,
                                  hra_pay float NOT NULL,
                                  other_allowance float NOT NULL,
                                  total_salary float NOT NULL,
                                  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);