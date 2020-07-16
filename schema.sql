--  Schema for the MySQL database. Add some seed values for testing 
-- * **department**:
DROP DATABASE IF EXISTS company_DB;
CREATE database company_DB;

USE company_DB;

CREATE TABLE department_DB (
    id INT(10) NOT NULL,
    NAME VARCHAR(200)
);

SELECT * FROM department_DB;


-- * **role**:
CREATE TABLE role_DB (
    id INT(10) NOT NULL,
    name VARCHAR(200) NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,4) NOT NULL,
    PRIMARY KEY(id)
);

SELECT * FROM role_DB;

-- * **employee**:
CREATE TABLE employee_DB (
    id INT(10) NOT NULL,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    role_id INT(10) NOT NULL,
    manager_id INT(10) NULL
);

SELECT * FROM employee_DB;

