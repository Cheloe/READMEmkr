// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //get links to licenses and badges
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return`[License: ](${license.url})]`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}
    # ${data.description}
    # ${data.tableOfContents}
    # ${data.installation}
    # ${data.usage}
    # ${data.license}
    # ${data.contributing}
    # ${data.tests}
    # ${data.questions}
`;
}

module.exports = generateMarkdown;
