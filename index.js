const inquirer = require('inquirer')
const fs = require("fs");
const Manager = require("./assets/lib/manager")
const Engineer = require("./assets/lib/engineer")
const Intern = require("./assets/lib/intern")


mgrEmpty = [];
engineerEmpty = [];
internEmpty = [];

managerCard = [];
engineerCard = [];
internCard = [];

const finalHTML = [
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>`,
   
    
        
`</body>
</html>`
]

askAgain();

function askAgain() {
inquirer.prompt({
    name: "FirstQuestion", 
    type: "list",
    message: "What type of employee would you like to choose?",
    choices: ["Manager", "Engineer", "Intern", "Build Team"],
})
    .then ((answer) => {
        if (answer.FirstQuestion === "Manager") {
        managerQuestions();
     } else if (answer.FirstQuestion === "Engineer") {
        engineerQuestions();
     } else if (answer.FirstQuestion === "Intern") {
        internQuestions();
     } else if (answer.FirstQuestion === "Build Team") {
         buildTeam();
     }
     }
    )}

    const mgrQarray = [
        {
            message: "What is the manager's name?",
            name: "name",
        },
        {
            message: "What is the manager's email?",
            name: "email",
        },
    ];

    function managerQuestions () {
        inquirer.prompt(mgrQarray)
        .then((managerData) => {
            // console.log(managerData)
            // console.log(managerData.name, managerData.email)
            mgrEmpty.push(new Manager(managerData.name, managerData.email));
            // console.log(mgrEmpty)
            askAgain();
        })
    }

    const engineerQarray = [
        {
            message: "What is the engineer's name?",
            name: "name",
        },
        {
            message: "What is the engineer's email?",
            name: "email",
        },
        {
            message: "What is the engineer's Github?",
            name: "gitHub"
        }
    ];

    function engineerQuestions () {
        inquirer.prompt(engineerQarray)
        .then((engineerData) => {
            engineerEmpty.push(new Engineer(engineerData.name, engineerData.email, engineerData.gitHub));
            askAgain();
        })
    }

    const internQarray = [
        {
            message: "What is the intern's name?",
            name: "name",
        },
        {
            message: "What is the intern's email?",
            name: "email",
        },
        {
            message: "What is the intern's school?",
            name: "school"
        }
    ];

    function internQuestions () {
        inquirer.prompt(internQarray)
        .then((internData) => {
            internEmpty.push(new Intern(internData.name, internData.email, internData.school));
            askAgain();
        })
    }

  function buildTeam() {
    // creating the html for each employee type
    managersHtml();
    engineerHtml();
    internHtml();
    // Adding employees to array for team members
    const employeeCard = [];
    employeeCard.push(managerCard);
    employeeCard.push(engineerCard);
    employeeCard.push(internCard);
    // inserting the HTML of cards into the array of the HTML
    finalHTML.splice(1, 0, employeeCard)

    // write outputs to file
    writeToFile();
  }

  function managersHtml() {
    for (let i = 0; i < mgrEmpty.length; i++) {
        const managerEl = mgrEmpty[i];
        const managerElhtml = `
        <div class="card m-3 text-bg-primary" style="width: 18rem;">
             <div class="card-header text-bg-primary">
                ${managerEl.title}
            </div>
            <div class="card-header text-bg-info">
                ${managerEl.name}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Email: ${managerEl.email}</li>
                <li class="list-group-item">Employee ID: ${managerEl.id}</li>
                <li class="list-group-item">Office Number: ${managerEl.officeNumber}</li>
            </ul>
        </div>
        `
        managerCard.push(managerElhtml)
    }
  }

  function engineerHtml() {
    for (let i = 0; i < engineerEmpty.length; i++) {
        const engineerEl = engineerEmpty[i];
        const engineerElhtml = `
        <div class="card m-3 text-bg-primary" style="width: 18rem;">
            <div class="card-header text-bg-primary">
                ${engineerEl.title}
            </div>
            <div class="card-header text-bg-info">
                ${engineerEl.name}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Email: ${engineerEl.email}</li>
                <li class="list-group-item">Employee ID: ${engineerEl.id}</li>
                <li class="list-group-item">GitHub: ${engineerEl.gitHub}</li>
            </ul>
        </div>
        `
        engineerCard.push(engineerElhtml)
    }
  }

  function internHtml() {
    for (let i = 0; i < internEmpty.length; i++) {
        const internEl = internEmpty[i];
        const internElhtml = `
        <div class="card m-3 text-bg-primary" style="width: 18rem;">
            <div class="card-header text-bg-primary">
                ${internEl.title}
            </div>
            <div class="card-header text-bg-info">
                ${internEl.name}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Email: ${internEl.email}</li>
                <li class="list-group-item">Employee ID: ${internEl.id}</li>
                <li class="list-group-item">Intern's School: ${internEl.school}</li>
            </ul>
        </div>
        `
        internCard.push(internElhtml)
    }
  }

//   const testHTML = "<h1>Hellow WOrld</h1>"

function writeToFile() {
     // join together all elements of finalHTML
    let finalEL = finalHTML.join()
    // replace erroneous commas with nothing
    finalEL = finalEL.replace(/,/g,'')
    fs.writeFile("index.html", finalEL, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log("Success!");
        }
    })
}


