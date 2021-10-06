// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const html = (title, description, tOc, install, usage, license, contra, tests, questions) => 
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
        <li> Questions: ${questions} </li>
    </ul>
</body>
</html>`  



inquirer.prompt([
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
        message: "do you have any contributions you want to add? - CONTRIBUTIONS / N/A",
    },
// tests
    {
        name: "tests",
        type: "input",
        message: "any testing? - TEST FIGURES / N/A",
    },
// questions
    {
        name: "questions",
        type: "input",
        message: "whant to add your email and/or GitHub?",
    },

]).then((answers) => {
   const generatedHTML = html(answers.title, answers.description, answers.tOc, answers.install, answers.usage, answers.license, answers.contra, answers.tests, answers.questions);
   fs.writeFile("index.html", generatedHTML, (err) => console.log(err)) ;
    
});


// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
