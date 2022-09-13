
// Uses a switch function to have the input of 'license' to return the readme with the the badge and link for the license.
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "BSD 3":
      return "[![License: BSD 3](https://img.shields.io/badge/License-BSD3-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "IBM":
      return "[![License: IBM](https://img.shields.io/badge/License-IBM-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    case "Apache 2.0":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    default:
      return "";
  }
}


// A function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.projectTitle}

## Description

${data.projectDescription}

${renderLicenseSection(data.license)}


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#Questions)

## Installation

${data.installationRequirements}

## Usage

${data.usage}

## Credits

${data.contributionReqs}

## License

This is under the ${renderLicenseSection(data.license)} license.

---

## Tests

${data.tests}


## Questions

If you would like to contact me for any questions or possible freelance work reach out to me to my links:
- https://github.com/${data.github}
- ${data.linkedin}
- ${data.email}

`
}

module.exports = generateMarkdown;