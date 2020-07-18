INSERT INTO department (id, department_name)
VALUES (1, "Management"),
       (2,"Marketing"),
       (3, "Sales"),
       (4,"IT"),
       (5,"Intern");

INSERT INTO employee_role (id, title, salary, department_id)
VALUES (1, "Front End", 75000, 4),
       (2, "Back End", 100000, 4),
       (3, "Software Dev", 700000, 4),
       (4, "Sales Rep", 60000, 2),
       (5, "Cyber Security",120000, 4),
       (6, "Manager", 100000, 1),
       (7, "Machine Learning Engineer", 150000, 4),
       (8, "Junior Dev", 40000, 5);



INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1, "Leticia", "Hall", 1),
       (2, "Peter", "Rolen", 2),
       (3, "Stephanie", "Smith", 3),
       (4, "Joseph", "Man", 4),
       (5, "Sorin", "White", 5),
       (6, "Haley", "Maxwell", 6);