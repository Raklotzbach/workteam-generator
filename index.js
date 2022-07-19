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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.1/css/bootstrap.min.css"/>  <!-- Import bootstrap stylesheet -->
    <title>Document</title>
</head>
<body>`,

    // <!-- Team Cards Will Populate Here -->
        
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
        <h1 class="m-5" >${managerEl.title}</h1>
        <h1>${managerEl.name}</h1>
        <p>${managerEl.email}</p>
        <p>${managerEl.id}</p>
        <p>${managerEl.officeNumber}</p>
        `
        managerCard.push(managerElhtml)
    }
  }

  function engineerHtml() {
    for (let i = 0; i < engineerEmpty.length; i++) {
        const engineerEl = engineerEmpty[i];
        const engineerElhtml = `
        <h1>${engineerEl.title}</h1>
        <h1>${engineerEl.name}</h1>
        <p>${engineerEl.email}</p>
        <p>Employee ID: ${engineerEl.id}</p>
        <p>GitHub: ${engineerEl.gitHub}</p>
        `
        engineerCard.push(engineerElhtml)
    }
  }

  function internHtml() {
    for (let i = 0; i < internEmpty.length; i++) {
        const internEl = internEmpty[i];
        const internElhtml = `
        <h1>${internEl.title}</h1>
        <h1>${internEl.name}</h1>
        <p>${internEl.email}</p>
        <p>Intern ID: ${internEl.id}</p>
        <p>Intern's School: ${internEl.school}</p>
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
    fs.writeFile("write.html", finalEL, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log("Success!");
        }
    })
}


