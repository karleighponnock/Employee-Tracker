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
        choices: ["View  All Employees",
            "View  All Employees By Departments",
            "View  All Employees By Manager",
            "Add employee",
            "Remove employee",
            "Update Employee Role",
            "Update Employee Manager",
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
            } else if (answer.action === "View  All Employees By Departments") {
                employeeByDept();
            } else if (answer.action === "View  All Employees By Manager") {
                employeeByMan();
            } else if (answer.action === "Add employee") {
                addEmployee();
            } else if (answer.action === "Remove employee") {
                remEmployee();
            } else if (answer.action === "Update Employee Role") {
                updateEmployee();
            } else if (answer.action === "Update Employee Manager") {
                updateEmployeeMan();
            } else {
                //if exit program is selected we console goodbye and end here
                console.log("Goodbye")
            }
        }
    )
};

function viewEmployees() {
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee_role.title, employee_role.salary from employeeTracker_DB.employee LEFT JOIN employee_role ON employee_role.id = employee.role_id", function (error, results){
        if (error) throw error
        console.table(results)
      startApp();
    })
  };

function employeeByDept() {

};
function employeeByMan() {

};

///add an employee
function addEmployee() {
        inquirer
            .prompt([
                {
                    name: "firstName",
                    type: "input",
                    message: "First Name: ",

                },
                {
                    name: "lastName",
                    type: "input",
                    message: "lastName?",

                },
                {
                    name: "employeeRole",
                    type: "list",
                    message: "What is the employee's role?",
                    choices: [
                        "Front End",
                        "Back End",
                        "Software Dev",
                        "Marketing",
                        "Cyber Security",
                        "Management",
                        "Machine Learning Engineer",
                        "Junior Dev",
                    ]
                },
            ]).then(function (answer) {
                // when finished prompting, insert a new item into the db with that info
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: answer.employeeRole,
                        manager_id: answer.manager_id,
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("New employee created and added to database!");
                        // Restart the prompt
                        startApp();
                    }
                );
            });
    }







                // function remEmployee() {

                // };
                // function updateEmployee() {

                // };
                // function updateEmployeeMan() {

                // };

