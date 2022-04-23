// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter your name!');
              return false;
            }
          }
    },

    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => confirmAbout
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
    
    {
        type: 'input',
        name: 'description',
        message: 'What is the project about? Give a detailed description of your project.',
    },
    
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What language did you use for the project? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'outstanding',
        message: 'What makes your project stand out?',
    },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'linkGmail',
        message: 'Enter your Gmail. (Required)',
        validate: linkGmailInput => {
          if (linkGmailInput) {
            return true;
          } else {
            console.log('You need to enter your Gmail address!');
            return false;
          }
        }
      },
      {
        type: "input",
        message: "What liscence is being used? (ie...MIT)",
        name: "license"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile( fileName, data, (err)=>{

        if (err){
            console.log("Error")
        } else{
            console.log("File written successfully\n");
        };
    })};
    



// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions).then((answers) => {
    // Use user feedback for... whatever!!
    
    writeToFile("readme.md",generateMarkdown(answers));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error)
    } else {
      // Something else went wrong
    }
  });

}

// Function call to initialize app
init();
