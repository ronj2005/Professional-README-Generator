// Included packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// Created an array of questions for user input
inquirer
    .prompt([
     {   
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Please give a brief decription of your project.',
        name: 'description',
    },

    {
        type: 'checkbox',
        message: 'Please select which language(s) you use.',
        choices: ["HTML", " CSS", " Javascript", " Python", " Java", "Node", "React"],
        name: 'languages',
    },

    {
        type: 'input',
        message: 'Please provide installation instructions.',
        name: 'installInstructions',
    },

    {
        type: 'input',
        message: 'Please provide usage information.',
        name: 'usageInformation',
    },

    {
        type: 'input',
        message: 'Please provide contribution guidelines.',
        name: 'contributionGuidelines',
    },

    {
        type: 'input',
        message: 'Please provide test instructions:',
        name: 'testInstructions',
    },

    {
        type: 'list',
        message: 'Please select provided license(s)',
        choices: ["Apache License 2.0", "MIT License","Boost Software License 1.0"],
        name: 'license',
    },

    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'githubUsername',

    },

    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'email',

    },

    ])

   generateMarkdown
// Created a function to write README file
   .then((data) => {
    fs.writeFile("README2.md", generateMarkdown(data), (err) => 
      err ? console.log(err) : console.log(data)
    );
  });
