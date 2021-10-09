// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// generate readMe markdown ================================================ NEW
const generateMD = require('./generateMarkdown.js');

// generated html  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx - to check entries, class ref.
const html = (title, description, tOc, install, usage, license, contra, tests, questions1, questions2) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Title: ${title} </h1>
    <ul>
        <li> Description: ${description} </li>
        <li src= href = "" class= "tOc"> Table of Contents: ${tOc} </li>
        <li> Installation: ${install} </li>
        <li> Usage: ${usage} </li>
        <li> License: ${license} </li>
        <li> Contributing: ${contra} </li>
        <li> Tests: ${tests} </li>
        <li> Questions - gitHub: ${github} </li>
        <li> Questions - email: ${email} </li>
    </ul>
</body>
</html>`  


// // An array of questions for user input
// const questions = []; ---------------------------------------------------------------
const readMeThis = () => {
return inquirer.prompt([
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
// table of contents
        name: "tOc",
        type: "input",
        message: "how can we content this for easy viewing?",
    },
     {
// installation
        name: "install",
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
        type: "input",
        message: "do you have any licenses you want to add? - LICENSES / N/A",
    },
// contributions
    {
        name: "contra",
        type: "input",
        message: "do you have any contributions you want to add?  CONTRIBUTIONS / N/A",
    },
// tests
    {
        name: "tests",
        type: "input",
        message: "any testing? - TEST FIGURES / N/A",
    },
// questions -- email
    {
        name: "github",
        type: "input",
        message: "want to add your gitHub?",
    },
// questions -- gitHub
    {
        name: "email",
        type: "input",
        message: "want to add your email?",
    },

])
// .then((answers) => {
//    const generatedHTML = html(answers.title, answers.description, answers.tOc, answers.install, answers.usage, answers.license, answers.contra, answers.tests, answers.questions1, answers.questions2);
//    fs.writeFile("index.html", generatedHTML, (err) => console.log(err)) ;
    
// });
};

// // A function to write README file
// function writeToFile(fileName, data) {}




// // Function call to initialize the app
// init() {} -- create an init variable to exicute --------------------------------------------------
const init = () => {
    readMeThis() // questions variable 
        .then((answers) => writeFileAsync('./output/README.md', generateMD(answers))) // to output the readMe
        .then(() => console.log('READMD.md added to output folder')) //confirmation 
        .catch((err) => console.error(err)); // to catch any errors
};

// Init function call  ---// init()
init();