// dependency variables
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const path = require("path");
// generate markdown varables
const generateMarkdown = require("./utils/generateMarkdown");
const writeAsync = util.promisify(fs.writeFile);

// README file path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "README.md");

// array of prompts to generate readme file
const prompts = [
    {
        message: "Please enter the title of your project.",
        name: "title",
        type: "input"
    },
    {
        message: "Please enter project description:",
        name: "description",
        type: "input"
    },
    {
        message: "Please provide installation instructions:",
        name: "installation",
        type: "input",
        default: "node index.js"
    },
    {
        message: "Please provide usage information:",
        name: "usage",
        type: "input"
    },
    {
        message: "What are your contributors and contribution guidelines?",
        name: "contribution",
        type: "input",
        default: "Contributor Covenant"
    },
    {
        message: "What command should be entered to run tests?",
        name: "test",
        type: "input",
        default: "npm run test"
    },
    {
        message: "Choose a license:",
        choices: ["Apache 2.0", "MIT", "GPL 3.0", "Unlicense"],
        name: "license",
        type: "list"
    },
    {
        message: "GitHub username:",
        name: "username",
        type: "input"
    },
    {
        message: "Email address:",
        name: "email",
        type: "input"
    }
];


//function to run this app
async function init() {
    //get responses
    const responses = await inquirer.prompt(prompts);

    if (fs.existsSync(OUTPUT_DIR)) {
        console.log("Output Path Exists.");
      } else {
        fs.mkdir(OUTPUT_DIR, function (err) {
          if (err) {
            return console.error(err);
          }
          console.log("Directory created successfully");
        });
      }
    // generates the README.md
    const htmlString = generateMarkdown(responses);
    // save to file to outputs folder
    await writeAsync(outputPath, htmlString);
}

// call the function to run this app
init();


