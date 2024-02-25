INSERT INTO `Employee` (`emp_id`, `email`, `fname`, `lname`, `password`, `department`, `title`, `photograph`)
VALUES
    ('EMP001', 'john@example.com', 'John', 'Doe', 'password123', 'Human Resources', 'HR Manager', 'john_photo.jpg'),
    ('EMP002', 'jane@example.com', 'Jane', 'Smith', 'pass456', 'Finance', 'Financial Analyst', 'jane_photo.jpg'),
    ('EMP003', 'mike@example.com', 'Mike', 'Johnson', 'mikepass', 'Sales', 'Sales Manager', 'mike_photo.jpg');
INSERT INTO `Salary_Detail` (`emp_id`, `decription`, `amount`, `month`, `year`, `salary_slip`, `payment_date`)
VALUES
    ('EMP001', 'January Salary', '5000', 'January', '2023', 'salary_jan.pdf', '2023-02-05'),
    ('EMP001', 'February Salary', '5100', 'February', '2023', 'salary_feb.pdf', '2023-03-05'),
    ('EMP002', 'January Salary', '6000', 'January', '2023', 'salary_jan.pdf', '2023-02-05'),
    ('EMP002', 'February Salary', '6100', 'February', '2023', 'salary_feb.pdf', '2023-03-05'),
    ('EMP003', 'January Salary', '5500', 'January', '2023', 'salary_jan.pdf', '2023-02-05'),
    ('EMP003', 'February Salary', '5600', 'February', '2023', 'salary_feb.pdf', '2023-03-05');
INSERT INTO `Employees_Salary` (`employee_id`, `description`, `basic_pay`, `hra_pay`, `amount`, `payment_date`)
VALUES
    ('EMP001', 'January Salary', 4000, 1000, 5000, '2023-02-05'),
    ('EMP001', 'February Salary', 4100, 1000, 5100, '2023-03-05'),
    ('EMP002', 'January Salary', 4800, 1200, 6000, '2023-02-05'),
    ('EMP002', 'February Salary', 4900, 1200, 6100, '2023-03-05'),
    ('EMP003', 'January Salary', 4400, 1100, 5500, '2023-02-05'),
    ('EMP003', 'February Salary', 4500, 1100, 5600, '2023-03-05');
