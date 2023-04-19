// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //get links to licenses and badges
  switch(license) {
  case 'MIT (very permissive)':
    let licenseBadge = renderLicenseBadge(license);
    let licenseInfo = `
# License
<a href ="https://choosealicense.com/licenses/mit/"> MIT </a>
${licenseBadge};
    `

    break;
  case 'GNU (less permissive)':
    // code block
    break;
  default:
    return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return`[License: ](${data.license.url})]`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;

  return `
# ${data.title}
# Description
${data.description}
# Table of Contents 

[Installation](#installation)

[Usage](#installation)

[Contributions](#installation)

[Tests](#installation)

[Questions](#installation)

# <a name="Installation"></a>Installation
${data.installation}
# <a name="Usage"></a>Usage
${data.usage}
# License
${data.license}
# <a name="Contributions"></a>Contributions
${data.contributing}
# <a name="Tests"></a>Tests
${data.tests}
# <a name="Questions"></a>Questions
${data.questions}
`;
}

module.exports = 
  generateMarkdown
;
