const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const fs = require('fs');

const promptUser = () => {
  return inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true
        } else {
          console.log('Please enter your name!');
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',

      validate: githubInput => {
        if (githubInput) {
          return true
        } else {
          console.log('Please enter your GitHub Usernsme!');
          return false
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
      when: ({
        confirmAbout
      }) => {
        if (confirmAbout) {
          return true
        } else {
          return false
        }
      }
    },
    // {
    //   type: 'input',
    //   name: 'about',
    //   message: 'Provide some information about yourself:',
    //   validate: nameInput => {
    //     if (nameInput) {
    //       return true;
    //     } else {
    //       console.log('Please tell us about your self!');
    //       return false;
    //     }
    //   }
    // }
  ]);
};
// Notice that the function returns a running of inquire.prompt(), thus returning what it returns, which is a Promise. Just like fetch(), which we covered previously, the Promise will resolve with a .then() method.

// So, here we're calling a function that returns the result of inquire.prompt, which is a Promise. We therefore append the .then() method to the function call, since it returns a Promise, and we put into .then() whatever we wish to take place after the Promise is resolved.

// promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

  return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },

      // The confirm type question is a Boolean that can receive a yes or no (true or false) answer. We can also set the default answer in the default property in case this question gets skipped. Inquirer will prompt the user "y/N", where the capital "N" represents the default answer.//

      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }

    ])

    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });

};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });








// by chaining the function call to the then() method, we can control the sequence of the application's control flow. We only want to prompt users with the project questions after the profile questions.//


// promptProject.then(answers => console.log(answers));



// With this statement, the object in the module.exports assignment will be reassigned to the generatePage variable in the app.js file. Note here that the variable name is arbitrary; however, the relative path to include the file must be exact.



// profileDataArgs array starting at the third iteration

// const pageHTML = generatePage(thisguy, github);




// According to the documentation and the examples, this function can create multiple file types, including TXT, PDF, HTML, JSON, and more. The fs.writeFile() function definition has three arguments. The first argument is the name of the file that's being created. The next argument is the data that will write onto the file, in this case the HTML template literal. The last parameter is a callback function that will be used for error handling.//

// fs.writeFile('index.html', generatePage(thisguy, github), err => {
// When an arrow function has one argument, parentheses are optional. However, when there are no arguments—or more than one—parentheses are necessary.//
// if (err) throw new Error(err);
// In the callback function block, a conditional statement checks for the err being returned by the callback function. If err exists, an error message is displayed, using the following statement://

// console.log('Portfolio complete! Check out index.html to see the output!');
// });

// Review the three arguments in the fs.writeFile() function. The first argument is the file name that will be created, or the output file. The second argument is the data that's being written: the HTML string template. The third argument is the callback function that will handle any errors as well as the success message.//

// validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.