// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const marker = require("./utils/generateMarkdown");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: colors.magenta('What is your Title:'),
    },
    {
        type: 'input',
        name: 'description',
        message: colors.magenta('write a short description of your project'),
    },
    {
        type: 'input',
        name: 'installation',
        message: colors.magenta('What are your installation instructions:'),
    },
    {
        type: 'input',
        name: 'usage',
        message: colors.magenta('What are your usage information:'),
    },
    {
        type: 'input',
        name: 'contributing',
        message: colors.magenta('What are your Contributing:'),
    },
    {
        type: 'input',
        name: 'test',
        message: colors.magenta('What are your tests:'),
    },
    {
        type: 'input',
        name: 'username',
        message: colors.magenta('What is your Github username:'),
    },
    {
        type: 'input',
        name: 'email',
        message: colors.magenta('What is your email address:'),
    },
    {
        type: 'input',
        name: 'nameProject',
        message: colors.magenta('What is your project name:'),
    },
    {
        type: "list",
        message: colors.magenta("What kind of license do you want to use ?"),
        name: "license",
        choices: ["none", "MIT LICENSE", "Apache 2.0 License", "GPLv3", "LGPLv2.1", "BSD 3-Clause “New” or “Revised” License"],
    },
    {
        type: 'input',
        name: 'command',
        message: colors.magenta('what command should be run to run test?'),
    },
    {
        type: 'input',
        name: 'repo',
        message: colors.magenta('what does the user neeed to know about the repo'),
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

     const content=generateMarkdown(data);
    
    // fs.writeToFile(fileName,content,(err)=>err?console.log(err):console.log("success"))
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) =>
            // console.log("data",data)
            
             writeToFile(data.title,data)
        );
}

// Function call to initialize app
init();
