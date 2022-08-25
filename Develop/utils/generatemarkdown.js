// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.projectTitle}

## Description

${data.projectDescription}

${data.licenseLink}


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installationRequirements}

## Usage

${data.usage}

## Credits

${data.contributionReqs}

## License

Here is the link to the license for <a href="${data.licenseLink}">${data.license}</a>.

---

## Tests

${data.tests}

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

If you would like to contact me for any questions or possible freelance work reach out to me to my links:
- <a href="${data.github}">Github</a>
- <a href="${data.linkedin}">LinkedIn</a>
- <a href="${data.email}">Email.</a>`


}

module.exports = generateMarkdown;