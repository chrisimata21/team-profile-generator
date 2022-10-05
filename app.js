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
      userInput()
        .then(function ({ name, id, email, title }) {
          if (title === "Manager") {
            managerInput().then(function ({ officeNumber }) {
              this.employee = new Manager(name, id, email, officeNumber, title);
              employeeArr.push(Employee);
              resolve("done");
            });
          } else if (title === "Engineer") {
            engineerInput().then(function ({ github }) {
              this.employee = new Engineer(name, id, email, github, title);
              employeeArr.push(Employee);
              resolve("done");
            });
          } else if (title === "Intern") {
            internInput().then(function ({ school }) {
              this.employee = new Intern(name, id, email, school, title);
              employeeArr.push(Employee);
              resolve("done");
            });
          }
        })
        .catch(function (err) {
          console.log("There was an error.");
          console.log(err);
        });
    });
    const result = await promise;
    console.log(result);
  }

  function displayTitle(employee) {
    if (employee.title === "Manager") {
      console.log(employee.officeNumber);
      return `Office number: ${employee.officeNumber}`;
    }
    if (employee.title === "Engineer") {
      return `School: ${employee.school}`;
    }
    if (employee.title === "Intern") {
      return `GitHub: ${employee.github}`;
    }
  }
  function getCardHtml() {
    let html = "";
    for (i = 0; i < maxTimes; i++) {
      console.log(employeeArr[i]);
      html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
        <div class="col card-header">
            <h4>${employeeArr[i].name}</h4>
        </div>
        <div class="col card-header">
            <h4>${employeeArray[j].title}</h4 >
        </div >
        <ul class="list-group list-group-flush text">
            <li class="list-group-item">ID: ${employeeArray[j].id}</li>
            <li class="list-group-item">Email: ${employeeArray[j].email}</li>
            <li class="list-group-item"> ${displayTitle(employeeArray[j])}</li>
        </ul>
    </div>`;
    }
    return html;
  }

  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Document</title>
    <style>
        .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
        }
        .card {
            padding: 15px;
            border-radius: 6px;
            background-color: white;
            color: lightskyblue;
            margin: 15px;
        }
        .text {
            padding: 15px;
            border-radius: 6px;
            background-color: lightskyblue;
            color: black;
            margin: 15px;
        }
        .col {
            flex: 1;
            text-align: center;
        }
    </style>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
            <span class="navbar-brand mb-0 h1">
            <h1>My Team</h1>
            </span>
        </nav>
        <div class="row">
            ${getCardHtml()}
        </div>
    </body>
</html>`;
  console.log(html);
  const fs = require("fs");
  fs.writeFile("newFile.html", html, function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
}
start();
