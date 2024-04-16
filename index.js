// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkDown = require('./utils/generateMarkdown');
;
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like to title your project?',
        name: 'title',
    },
    {
        type: 'lists',
        message: 'What license would you like to sue for your project?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFileSync();
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        writeToFile('README.md', generateMarkDown({...userAnswers}))
    });
}

// Function call to initialize app
init();
