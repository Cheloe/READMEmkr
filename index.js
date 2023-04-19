const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
    {
        type: 'input',
        message: 'Describe your project: ',
        name: 'description',
      },
    {
        type: 'input',
        message: 'Add installation instructions',
        name: 'installation',
      },
    {
        type: 'input',
        message: 'Add usage instructions/examples',
        name: 'usage',
      },
    {
        type: 'list',
        message: 'What kind of license would you like?',
        choices: ['MIT (very permissive)', 'GNU (less permissive)', 'none'],
        //https://choosealicense.com/licenses/mit/
        //https://choosealicense.com/licenses/gpl-3.0/
        name: 'license',
      },
    {
      type: 'input',
      message: 'Any contributing guidelines you want to include?',
      name: 'contributing',
    },
    {
        type: 'input',
        message: 'Add examples of how to run any tests ',
        name: 'tests',
      },
    {
        type: 'input',
        message: 'What is your GitHub username',
        name: 'username',
      },
    {
        type: 'input',
        message: 'What is your email address',
        name: 'email',
      },
];


// TODO: Create a function to write README file
function writeToFile(filename, info) {
  // fs.writeFile('README2.md', info, (err) =>
  //     err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  //.then(response)
  .then((response) => {
      data = generateMarkdown(response);
      fs.writeFile('README2.md', data, (err) =>
      err ? console.error(err) : console.log('Success!'))
  })}
  
// Function call to initialize app
init();
