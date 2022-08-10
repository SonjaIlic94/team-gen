const inquirer = require('inquirer');
const fs = require('fs');
// class requried are employee, manager, engineer, intern
const Engineer = require("./lib/Engineer");
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const renderPage = require('./src/generateHtml');

const newTeam = [];

function managerPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: 'managerName',
            message: "What is your Manager's name?",
        },
        {
            type: "input",
            name: 'managerId',
            message: "What is your Manager's Id?",
        },
        {
            type: "input",
            name: 'managerEmail',
            message: "What is your Manager's email?",
        },
        {
            type: "input",
            name: 'managerOffice',
            message: "What is your Manager's office number?",
        },
    ]).then(response => {
        const managerInstance = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
        newTeam.push(managerInstance);
        addMember();
    });
};

// Engineer Prompt
function engineerPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: 'engineerName',
            message: "What is your Engineer's name?",
        },
        {
            type: "input",
            name: 'engineerId',
            message: "What is your Engineer's Id?",
        },
        {
            type: "input",
            name: 'engineerEmail',
            message: "What is your Engineer's email?",
        },
        {
            type: "input",
            name: 'engineerGit',
            message: "What is your Engineer's GitHub Username?",
        },

    ]).then(response => {
        const engineerInstance = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGit);
        newTeam.push(engineerInstance);
        addMember();
    })
};

// Intern Prompt
// Engineer Prompt
function internPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: 'internName',
            message: "What is your Interns's name?",
        },
        {
            type: "input",
            name: 'internId',
            message: "What is your Interns's Id?",
        },
        {
            type: "input",
            name: 'internEmail',
            message: "What is your Intern's email?",
        },
        {
            type: "input",
            name: 'internSchool',
            message: "What is the school the Intern is from?",
        },

    ]).then(response => {
        const internInstance = new Engineer(response.internName, response.internId, response.internEmail, response.internSchool);
        newTeam.push(internInstance);
        addMember();
    });
};

// Add more team members function
function addMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "addMember",
            message: "do you want to add a new member?",
            choices: ['Engineer', 'Intern', 'Finish Building My Team']

        }
    ]).then(response => {
        if (response.addMember === 'Engineer') {
            engineerPrompt();
        } else if (response.addMember === 'Intern') {
            internPrompt();
        } else {
            writeToFile()
        }
    })
};

// TODO: Create a function to write html file
function writeToFile() {
    fs.writeFileSync('./disc/index.html', renderPage(newTeam), function (err, file) {
        if (err) throw err;
        console.log('html done!');
    });
}



