const generateMarkdown = require("./Develop/utils/generatemarkdown.js")
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Uses 
function init() {
inquirer
.prompt([
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the Project Title',
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'What is a short description of the Project? (Use (\) to create new lines)'
  },
  {
    type: 'input',
    name: 'installationRequirements',
    message: 'What are the installation requirements for this Project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How would you use this application?',
  },
  {
    type: 'input',
    name: 'contributionReqs',
    message: 'What are some of the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    name: 'license',
    type: 'list',
    choices: ['Apache 2.0', 'BSD 3', 'IBM', 'MIT', 'None']
  },
  {
    name: 'tests',
    type: 'input',
    message: 'What are some ways to test?'
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter best email for contact.',
  },
])

.then((data) => {
    writeToFile("sampleREADME.md", generateMarkdown(data))
});

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Success!'))
}

init()