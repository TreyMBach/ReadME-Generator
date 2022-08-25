const generateMarkdown = require("./Develop/utils/generatemarkdown.js")
const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = ({ projectTitle, projectDescription, installationRequirements, usage, contributionReqs, license, licenseLink, tests, github, linkedin, email }) =>
  `
  # ${projectTitle}

## Description



${projectDescription}

${licenseLink}


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installationRequirements}

## Usage

${usage}

## Credits

${contributionReqs}

## License

Here is the link to the license for <a href="${licenseLink}">${license}</a>.

---

## Tests

${tests}

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

If you would like to contact me for any questions or possible freelance work reach out to me to my links:
- <a href="${github}">Github</a>
- <a href="${linkedin}">LinkedIn</a>
- <a href="${email}">Email.</a>

  `;

// TODO: Create a function to initialize app
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
    choices: ['Apache', 'BSD 3', 'IBM', 'MIT']
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
    writeToFile("savedREADME.md", generateMarkdown(data))
});

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Success!'))
}
