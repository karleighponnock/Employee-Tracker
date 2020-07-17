// Requirements
var express = require("express");
var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employeeTracker_DB',
    port: 3306
});

connection.connect();

var connection = mysql.createConnection(connection);

connection.connect(function (err) {
    if (err) throw err;
    startApp();
});

function startApp() {
    inquirer.prompt([{
        name: "action",
        type: "list",
        choices: ["View  All Employees",
                 "View  All Employees By Departments",
                 "View  All Employees By Manager",
                 "Add employee",
                 "Remove employee",
                 "Update Employee Role",
                 "Update Employee Manager",
                 "Exit Program"
        ],
        message: "What would you like to do?"
    }
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
            }
        }
    )
};

prompt();



