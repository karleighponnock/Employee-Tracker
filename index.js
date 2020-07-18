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

};
function employeeByDept() {

};
function employeeByMan() {

};

///add an employee
 function addEmployee(){
    const addEmployee = () => {
        inquirer.prompt([{
            name: "firstName",
            type: "input",
            message: "First Name: "
        },
        {   name: "lastName",
            type: "input",
            message: "Last Name: "
        }
    ]).then(answer => {
        //make a query to database insert into "table name" then pass answers through corresponsding columns
                connection.query("INSERT INTO employee (first_name, last_name) values(${answer.firsttName, answer.lastName}"), function (error, results) {
                    if (error) throw error;
                    console.log(results);
                    console.log("We did it")
                }
        })
    }
}
    





                // function remEmployee() {

                // };
                // function updateEmployee() {

                // };
                // function updateEmployeeMan() {

                // };
            
