--  Schema for the MySQL database. Add some seed values for testing 
-- * **department**:
DROP DATABASE IF EXISTS company_DB;
CREATE database company_DB;

USE company_DB;

CREATE TABLE department_DB (
    deptid INT(10) AUTO_INCREMENT,
    name VARCHAR(200),
   PRIMARY KEY(deptid)
);

SELECT * FROM department_DB;


-- * **role**:
CREATE TABLE role_DB (
    roleid INT(10) AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,4) NOT NULL,
    PRIMARY KEY(roleid)
);

SELECT * FROM role_DB;

-- * **employee**:
CREATE TABLE employee_DB (
    employeeid INT(10) AUTO_INCREMENT,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    role_id INT(10) NOT NULL,
    manager_id INT(10) NULL,
    PRIMARY KEY(employeeid)
);

SELECT * FROM employee_DB;

