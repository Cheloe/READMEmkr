// function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  //get links to licenses and badges
  switch(license) {
  case 'MIT (very permissive)':
return `
## License
<a href ="https://choosealicense.com/licenses/mit/"> MIT License</a>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`
;
  case 'GNU (less permissive)':
    return `
## License
<a href ="https://choosealicense.com/licenses/gnu/"> GNU License </a>

[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
`
      break;
    default:
      return '';
  }
}

// function that returns the license link 
function renderLicenseLink(license) {
    return`[License: ](${data.license.url})]`
}

//function that returns the license section of README 
function renderLicenseSection(license) {
  
}

//function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  let username = data.username;

  return `
# ${data.title}
${data.description}
## Table of Contents 

- [Installation](#installation) 

- [Usage](#usage)

- [Contributions](#contributing)
- [Tests](#tests)

- [Questions](#questions)

## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
Contact [Cheloe](https://github.com/${username}) at [${data.questions}](mailto:${data.questions})
${renderLicenseBadge(license)}
`;
}

module.exports = 
  generateMarkdown
;
