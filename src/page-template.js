// const generatePage = () => 'Name: Jane, Github: janehub';
const fs = require('fs');
const generatePage = (userName, githubName) => `Name: ${userName}, Guthub: ${githubName}`;

module.exports = generatePage;

// create the about section
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${aboutText}</p>
    </section>
  `;
};

const generateProjects = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectsArr
        .filter(({ feature }) => feature)
        .map(({ name, description, languages, link }) => {
          return ` <
    div class = "col-12 mb-2 bg-dark text-light p-3" >
    <
    h3 class = "portfolio-item-title text-light" > $ {
      name
    } < /h3> <
    h5 class = "portfolio-languages" >
    Built With:
    $ {
      languages.join(', ')
    } <
    /h5> <
    p > $ {
      description
    } < /p> <
    a href = "${link}"
  class = "btn" > < i class = "fab fa-github mr-2" > < /i>View Project on GitHub</a >
    <
    /div>
  `;
        })
        .join('')}

      ${projectsArr
        .filter(({ feature }) => !feature)
        .map(({ name, description, languages, link }) => {
          return ` <
  div class = "col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column" >
    <
    h3 class = "portfolio-item-title text-light" > $ {
      name
    } < /h3> <
    h5 class = "portfolio-languages" >
    Built With:
    $ {
      languages.join(', ')
    } <
    /h5> <
    p > $ {
      description
    } < /p> <
    a href = "${link}"
  class = "btn mt-auto" > < i class = "fab fa-github mr-2" > < /i>View Project on GitHub</a >
    <
    /div>
  `;
        })
        .join('')}
      </div>
    </section>
  `;
};
module.exports = templateData => {
  console.log(templateData);

  // const generatePage = (thisguy, github) => {

  // this will create three variables based on data in templateData
  const {
    projects,
    about,
    ...header
  } = templateData;

  console.log(projects, about, header);

  return `
  <!DOCTYPE html> 
  <html lang="en"> 

  <head>
    <meta charset="UTF-8">
    <meta thisguy="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>

  <header>
  <div class="container flex-row justify-space-between align-center py-3">
    <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
    <nav class="flex-row">
      <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
        header.github
      }">GitHub</a>
    </nav>
  </div>
</header>
<main class="container my-5">
  ${generateAbout(about)}
  ${generateProjects(projects)}
</main>
<footer class="container text-center py-3">
  <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
</footer>
  </body>
  </html>
  `;
};





// In order to use functions from one module inside another, we use the related statements ##module.exports## and ##require##. In the source file that has the functions we want to make available to other files, we use module.exports at its bottom. In the destination file(s) that we want to receive those exported functions, we put require at the top.

// So, because we added the module.exports statement at the end of the page-template.js file (with module.exports set to our generatePage() function), we can now use the require statement to include generatePage() at the top of the app.js file.

// Go to the app.js file to add the following statement just below the const fs = require('fs'); statement: