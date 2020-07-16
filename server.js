// Requirements
var express = require("express");
var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = require("./connect");

// * Add departments, roles, employees
const prompt = () => {
    inquirer.prompt([{
        name: "action",
        type: "list",
        choices: ["Add Department",
            "View Department",
            "Add role",
            "View role",
            "Add employee",
            "View employee",
            "Update employee"],
        message: "What action would you like to take?"
    }
    ]).then(
        answer => {
            if (answer.action === "Add Department") {
                addDept();
            } else if (answer.action === "View Department") {
                viewDept();
            } else if (answer.action === "Add role") {
                addRole();
            } else if (answer.action === "View role") {
                viewRole();
            } else if (answer.action === "Add employee") {
                addEmployee();
            } else if (answer.action === "View employee") {
                viewEmployee();
            } else if (answer.action === "Update employee") {
                updateEmployee();
            }
        }
    )
}

prompt();

///functions called
const addDept = () => {
    inquirer.prompt([{
        name: "departmentName",
        type: "input",
        message: "Which department would you like to add?"
    }]).then(
        answer => {
            connection.query(`INSERT INTO department_DB (name) values("${answer.departmentName}")`, function (error, results) {
                if (error) throw error;
                console.log(results);
                console.log("We did it");

              });
        }
    )
};


// viewDept();
// addRole();
// viewRole();
// addEmployee();
// viewEmployee();
// updateEmployee();
