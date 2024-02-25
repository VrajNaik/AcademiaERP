CREATE TABLE `Employee`(
                           `emp_id` VARCHAR(255) NOT NULL,
                           `email` VARCHAR(255) NULL,
                           `fname` VARCHAR(255) NULL,
                           `lname` VARCHAR(255) NOT NULL,
                           `password` VARCHAR(255) NOT NULL,
                           `department` VARCHAR(255) NOT NULL,
                           `title` VARCHAR(255) NOT NULL,
                           `photograph` VARCHAR(255) NOT NULL
);

CREATE TABLE `Salary_Detail`(
                                `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
                                `emp_id` VARCHAR(255) NOT NULL,
                                `decription` VARCHAR(255) NOT NULL,
                                `amount` VARCHAR(255) NULL,
                                `month` VARCHAR(255) NOT NULL,
                                `year` VARCHAR(255) NOT NULL,
                                `salary_slip` VARCHAR(255) NULL,
                                `payment_date` DATE NOT NULL
);
CREATE TABLE `Employees_Salary`(
                                   `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
                                   `employee_id` VARCHAR(255) NOT NULL,
                                   `description` VARCHAR(255) NOT NULL,
                                   `basic_pay` BIGINT NULL,
                                   `hra_pay` BIGINT NULL,
                                   `amount` BIGINT NULL,
                                   `payment_date` DATE NULL
);