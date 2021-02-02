<<<<<<< HEAD
const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
=======
const fs = require('fs');

// With this statement, the object in the module.exports assignment will be reassigned to the generatePage variable in the app.js file. Note here that the variable name is arbitrary; however, the relative path to include the file must be exact.

const generatePage = require('./src/page-template.js');

// profileDataArgs array starting at the third iteration

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [thisguy, github] = profileDataArgs




// According to the documentation and the examples, this function can create multiple file types, including TXT, PDF, HTML, JSON, and more. The fs.writeFile() function definition has three arguments. The first argument is the name of the file that's being created. The next argument is the data that will write onto the file, in this case the HTML template literal. The last parameter is a callback function that will be used for error handling.//

fs.writeFile('index.html', generatePage(thisguy, github), err => {
  // When an arrow function has one argument, parentheses are optional. However, when there are no arguments—or more than one—parentheses are necessary.//
  if (err) throw new Error(err);
  // In the callback function block, a conditional statement checks for the err being returned by the callback function. If err exists, an error message is displayed, using the following statement://

  console.log('Portfolio complete! Check out index.html to see the output!');
});

// Review the three arguments in the fs.writeFile() function. The first argument is the file name that will be created, or the output file. The second argument is the data that's being written: the HTML string template. The third argument is the callback function that will handle any errors as well as the success message.//










// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
>>>>>>> feature/generate-webpage
