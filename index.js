const inquirer = require('inquirer');
const fs = require('fs');


const generateREADME = ({ projectTitle, projectDescription, installationRequirements, usage, contributionReqs, license, licenseLink, tests, github, linkedin, email }) =>
  `# ${projectTitle}
  
  ## Project Description:

  
  This application is licensed with <a href="${licenseLink}">${license}</a>. 
  

  <h2 id="description">Description:</h2>
  <br>
    ${projectDescription}
  <br>

  - <a href="#description">Description</a><br>
  - <a href="#installation">Installation</a><br>
  - <a href="#usage">Usage Instructions</a><br>
  - <a href="#contribution">Constribution</a><br>
  - <a href="#tests">Tests</a><br>
  - <a href="#questions">Questions</a><br>
  - <a href="#license">License Info</a><br>

  <h2 id="installation">Installation:</h2>
  <br>
      ${installationRequirements}
  <br>

  <h2 id="usage">Usage:</h2>
  <br>
      ${usage}
  <br>
    
  ## Links

  My github link <a href="https://github.com/${github}">${github}</a>. \ 
  My LinkedIN is <a href="https://github.com/${linkedin}">${linkedin}</a>.

  <h2 id="contribute">Contributions:</h2>
  <br>
      ${contributionReqs}
  <br>

    
  <h2 id="tests">Tests:</h2>
  <br>
      ${tests}
  <br>
    
  ## Questions

  If you have any questions contact me via:

  Email: ${email}. <br>
  Github: <a href="https://github.com/${github}">${github}</a>.

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
    message: 'What is a short description of the Project? (Use (\) to create new lines)',
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
.then((answers) => {
  const readmeContent = generateREADME(answers);

  if (answers.license == `MIT`) {
    link = `https://a.shields.io/badge/License-MIT-yellow`;
    url = `https://opensource.org/licenses/MIT`;
    console.log(answers.license)
} else if (answers.license == `IBM`) {
    link = `https://a.shields.io/badge/License-IPL%201.0-blue`;
    url = `https://opensource.org/licenses/IPL-1.0`;
    console.log(answers.license)
} else if (answers.license == `Apache`) {
    link = `https://a.shields.io/badge/License-Apache%202.0-yellowgreen`;
    url = `https://www.apache.org/licenses/LICENSE-2.0`;
    console.log(answers.license)
} else if (answers.license == `BSD 3`) {
    link = `https://a.shields.io/badge/License-BSD%203--Clause-orange`;
    url = `https://opensource.org/licenses/BSD-3-Clause`;
    console.log(answers.license)
};

  fs.writeFile('savedREADME.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created the README File!')
  );
});
