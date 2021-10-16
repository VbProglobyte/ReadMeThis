// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// generate readMe markdown ================================================ NEW
const generateMarkdown = require('./util/generateMarkdown.js');


// // An array of questions for user input
// const questions = []; ---------------------------------------------------------------

const questions = [
    {
// title
        name: "title",
        type: "input",
        message: "what's your program/app title?",
    },
    {
// description
        name: "description",
        type: "input",
        message: "what's the description of your title?",
    },
    {
// installation
        name: "installation",
        type: "input",
        message: "how to install?",
    },
    {
// usage
        name: "usage",
        type: "input",
        message: "how do we use this program/app?",
    },
// license 
    {
        name: "license",
        type: "checkbox",
        message: "do you have any licenses you want to add?",
        choices: ['BSD', 'APACHE', 'MIT', 'NONE'],
    },
// contributions
    {
        name: "contributing",
        type: "input",
        message: "do you have any contributions you want to add?",
    },
// tests
    {
        name: "tests",
        type: "input",
        message: "any testing?",
    },
// questions contact-- email
    {
        name: "github",
        type: "input",
        message: "want to add your gitHub?",
    },
// questions contact-- gitHub
    {
        name: "email",
        type: "input",
        message: "want to add your email?",
    },

];

inquirer.prompt(questions)
    .then(answers => {
        fs.writeFile('generated-READMEthis.md', generateMarkdown(answers), (err)=>{
        err ? console.log(err) : console.log('Successfully created!')
    });
});


