ALTER TABLE
    `Employee` ADD PRIMARY KEY `employee_emp_id_primary`(`emp_id`);
ALTER TABLE
    `Employee` ADD UNIQUE `employee_email_unique`(`email`);
ALTER TABLE
    `Salary_Detail` ADD PRIMARY KEY `salary_detail_emp_id_primary`(`emp_id`);
ALTER TABLE
    `Employees_Salary` ADD CONSTRAINT `employees_salary_employee_id_foreign` FOREIGN KEY(`employee_id`) REFERENCES `Employee`(`emp_id`);
ALTER TABLE
    `Employee` ADD CONSTRAINT `employee_emp_id_foreign` FOREIGN KEY(`emp_id`) REFERENCES `Salary_Detail`(`emp_id`);