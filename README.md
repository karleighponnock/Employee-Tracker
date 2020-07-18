# Employee-Tracker
**view and manage the departments, roles, and employees for a company

  ## Table of Contents:
  - [Title](#Title)
  - [Description](#Description)
  - [Installation](#Installation)
  - [Questions](#Questions)

  ## Title
  Employee_Tracker
  ## Description
  View and manage the departments, roles, and employees for a company
  ## Installation
  inquirer, mysql, cTable
  ## Questions
For qurestions contact at:
karleighponnock@gmail.com,
 or visit my GitHub page at https://github.com/karleighponnock

# CODE OVERVIEW

This code refrences a database with three tables. The schema and seeds live inside a folder titled "db"

The index.js file uses inquirer to prompt the user for an action.
These actions each have a corresponding function that make queries to acess/ and alter the information in each database
The function are currently:

viewEmployees();
viewDept();
addDept();
addRole();
addEmployee();
updateEmployeeRole();
exit();

:however; the code is dynamic and many more functions can be added in the same inquirer prompt.

