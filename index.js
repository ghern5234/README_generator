// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What would you like to title your project?",
    name: "title",
  },
  {
    type: "input",
    message:
      "What is your project about? Include key information such as purpose, main features, and any relevant background or context.",
    name: "description",
  },
  {
    type: "input",
    message:
      "How is your project installed? Provide clear and detailed instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "What is a brief overview of how to use your project?",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Does your project have any documentation? Please include any links.",
    name: "documentation",
  },
  {
    type: "list",
    message: "What license would you like to use for your project?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message:
      "How can others contribute to your project? Provide clear guidelines and instructions.",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "Please enter clear guidance on testing. ie. details about testing frameworks, instructions on how to test locally or how to contribute to testing efforts.",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username? Leave empty if you do not wish to include.",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address? If you do not wish to include, leave blank",
    name: "email",
  },
  {
    type: "input",
    message:
      "What are some questions that may come up when working with your project? Please also provide answers to those questions.",
    name: "questions",
  },

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}



// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
 
  .then((userAnswers) => {
    console.log(userAnswers);
    

    writeToFile("EXAMPLE-README.md", generateMarkDown({ ...userAnswers }))
    
})
};

// Function call to initialize app
init();

