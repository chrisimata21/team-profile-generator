const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

function userInput() {
  const promptArr = [
    {
      name: "name",
      message: "What is your name?",
      type: "input",
    },
    {
      name: "id",
      message: "What is your ID?",
      type: "input",
    },
    {
      name: "email",
      message: "What is your email address?",
      type: "input",
    },
    {
      name: "title",
      message: "What is your title",
      type: "list",
      choices: ["Employee", "Intern", "Manager", "Engineer"],
    },
  ];
  return inquirer.prompt(promptArr);
}

function managerInput() {
  const promptArr = [
    {
      name: "officeNumber",
      message: "What is your office number?",
      type: "input",
    },
  ];
  return inquirer.prompt(promptArr);
}

function engineerInput() {
  const promptArr = [
    {
      name: "github",
      message: "What is your GitHub?",
      type: "input",
    },
  ];
  return inquirer.prompt(promptArr);
}

function internInput() {
  const promptArr = [
    {
      name: "school",
      message: "What school did you go to?",
      type: "input",
    },
  ];
  return inquirer.prompt(promptArr);
}

async function start() {
  let employeeArr = [];
  const maxTimes = 4;
  for (i = 0; i < maxTimes; i++) {
    const promise = new Promise((resolve, reject) => {
      userInput().then(function ({ name, id, email, title }) {
        if (title === "Manager") {
          managerInput().then(function ({ officeNumber }) {
            this.Employee = new Manager(name, id, email, officeNumber, title);
            employeeArr.push(Employee);
            resolve("done");
          });
        } else if (title === Engineer) {
          engineerInput().then(function ({ github }) {
            this.employee = new Engineer(name, id, email, github, title);
            employeeArr.push(employee);
            resolve("done");
          });
        }
      });
    });
  }
}
