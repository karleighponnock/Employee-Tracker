// Requirements
var express = require("express");
var mysql = require("mysql");
var inquirer = require("inquirer");


//create connection to database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employeeTracker_DB',
    port: 3306
});

//on connection run start app function
connection.connect(function (err) {
    if (err) throw err;
    startApp()
});

//start app function will use inquirer to prompt the user to select an action
function startApp() {
    inquirer.prompt([{
        name: "action",
        type: "list",
        //array of choices
        choices: [
            "View  All Employees",
            "View All Departments",
            "View All Roles",
            "Add employee",
            "Add Department",
            "Add Role",
            "Update Employee Role",
            "Exit Program"

        ],
        //message the user will see on prompt 
        message: "What would you like to do?"
    }
        // after selecting an action run the correlating prompt
    ]).then(
        answer => {
            if (answer.action === "View  All Employees") {
                viewEmployees();
            } else if (answer.action === "View All Departments") {
                viewDept();
            } else if (answer.action === "View All Roles") {
                viewRoles();
            } else if (answer.action === "Add Department") {
                addDept();
            } else if (answer.action === "Add Role") {
                addRole();
            } else if (answer.action === "Add employee") {
                addEmployee();
            } else if (answer.action === "Update Employee Role") {
                updateEmployeeRole();
            } else if (answer.action === "Exit Program") {
                exit();
            }
        }
    )
};

function viewEmployees() {
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee_role.title, employee_role.salary from employeeTracker_DB.employee LEFT JOIN employee_role ON employee_role.id = employee.role_id", function (error, results) {
        if (error) throw error
        console.table(results)
        startApp();
    })
}

function viewDept() {
    connection.query("SELECT * FROM department", function (error, results) {
        if (error) throw error;
        console.table(results);
        startApp();
    })
};

function viewRoles() {
    connection.query("SELECT employee_role.id, employee_role.title, department.dept_name AS department, employee_role.salary FROM employee_role LEFT JOIN department on employee_role.department_id = department.id;", function (error, results) {
        if (error) throw error
        console.table(results)
        back();
    })
};

function addDept() {
    inquirer.prompt({
        name: "newDepartment",
        type: "input",
        message: "What department would you like to add?",
    }).then(answers => {
        connection.query("INSERT INTO department SET ?",
            {
            department_name: answers.newDepartment,
            },
            (err, results) => {
                console.log("New Department created and added to database!")
                if (err) throw err;
                startApp();
            })
    })
};

/////////todo add a role type
function addRole() {
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "Role Title:"
        },
        {
            name: "salary",
            type: "input",
            message: "Salary:"
        },
        {
            name: "dept_Id",
            type: "input",
            message: "Department ID:",
        },
    ])
        .then(answers => {

            connection.query("INSERT INTO employee_role SET ?",
                {
                    title: answers.title,
                    salary: answers.salary,
                    department_id: answers.dept_Id
                },

                (err, results) => {
                    if (err) throw err;
                    startApp();
                })
        })
}


///add an employee
function addEmployee() {
    connection.query("SELECT * FROM employee_role", function (err, results) {
        inquirer
            .prompt([
                {
                    name: "firstName",
                    type: "input",
                    message: "First Name:",

                },
                {
                    name: "lastName",
                    type: "input",
                    message: "lastName?",

                },
                {
                    type: "list",
                    name: "role_id",
                    message: "What is the new employee's role?",
                    choices: function () {

                        var employeeArr = [];
                        for (i = 0; i < results.length; i++) {
                            employeeArr.push(results[i].title);
                        }
                        // console.log(empArray);
                        return employeeArr;
                    }
                },
            ])
            .then(function (answer) {

                var employee_id;
                for (r = 0; r < results.length; r++) {
                    if (results[r].title === answer.role_id) {
                        employee_id = results[r].id;
                    }
                }

                // when finished prompting, insert a new item into the db with that info
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: employee_id,
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("New employee created and added to database!");
                        // Restart the prompt
                        startApp();
                    }
                )
            })
    })
}

//////////TODO update employees role
// function updateEmployeeRole() {

// };

//end app function
function exit() {
    inquirer.prompt({

        name: "end",
        type: "list",
        choices: ["Quit Application?"]

    }).then(function (answer) {

        if (answer.end === "Quit Application?") {
            console.log("Goodbye!")
            connection.end()
        }
    })
}

