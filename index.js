const inquirer = require('inquirer');
const fs = require('fs');

// class requried are employee, manager, engineer, intern
const Engineer = require("./lib/Engineer");
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/generateHtml');

//where it will get stored
const newTeam = [];

// prompt user for manager info
function managerPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: 'managerName',
            message: "What is your Manager's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter a Manager name.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'managerId',
            message: "What is your Manager's Id?",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log('Please enter a Manager ID.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'managerEmail',
            message: "What is your Manager's email?",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter an email for the Manager.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'managerOffice',
            message: "What is your Manager's office number?",
            validate: managerOfficeInput => {
                if (managerOfficeInput) {
                    return true;
                } else {
                    return false;
                }
            }
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
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log('Please enter the Engineers name..');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'engineerId',
            message: "What is your Engineer's Id?",
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log('Please enter the Engineers ID.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'engineerEmail',
            message: "What is your Engineer's email?",
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the Engineers email.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'engineerGit',
            message: "What is your Engineer's GitHub Username?",
            validate: engineerGitInput => {
                if (engineerGitInput) {
                    return true;
                } else {
                    console.log('Please enter the Engineers GitHub Username.');
                    return false;
                }
            }
        },

    ]).then(response => {
        const engineerInstance = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGit);
        newTeam.push(engineerInstance);
        addMember();
    })
};

//Prompt for intern info
function internPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: 'internName',
            message: "What is your Interns's name?",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns name.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'internId',
            message: "What is your Interns's Id?",
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns ID.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'internEmail',
            message: "What is your Intern's email?",
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns email.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'internSchool',
            message: "What is the school the Intern is from?",
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns school.');
                    return false;
                }
            }
        },

    ]).then(response => {
        const internInstance = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
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
    fs.writeFileSync('./dist/index.html', generatePage(newTeam), function (err, file) {
        if (err) throw err;
        console.log('html done!');
    });
}

//init 
managerPrompt();

