// Requirements
var express = require("express");
var mysql = require("mysql");
var inquirer = require("inquirer");


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
        answers => {
            if(answer.action === "View Department"){
                viewDept();
            }
            console.log(answers )
        }
    )
}

prompt();

///functions
viewDept();

