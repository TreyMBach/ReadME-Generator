const inquirer = require('inquirer');
const fs = require('fs');


const generateREADME = ({ projectTitle, projectDescription, installationRequirements, usage, license, github, linkedin }) =>
  `# ${projectTitle}
  
  ## Project Description:

    ${projectDescription}

    - [Installation](##installation)
    - [Usage](##usage)
    - [Credits](##credits)
    - [License](##license)

    ## Installation

    ${installationRequirements}

    ## Usage

    ${usage}

    ##License

    The license we used is ${license}.
    
    ## Links

    My github link github.com/${github}.
    My LinkedIN is ${linkedin}

  `;

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
    message: 'What is a short description of the Project?',
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
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    name: 'license',
    type: 'list',
    choices: ['Apache', 'BSD 3', 'IBM', 'MIT']
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
])
.then((answers) => {
  const readmeContent = generateREADME(answers);

  fs.writeFile('savedREADME.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created the README File!')
  );
});
