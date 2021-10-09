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
function generateMarkdown(data) { // data.license and answers -- create title and sections 
  return `# ${data.title}
  ${renderLicenseBadge(data.license, answers)}

  ## Description
     ${data.description}
  ## Table of Contents
     
  ## Installation
    ${data.description}
  ## Usage 
    ${data.description}
  ## Contributing
    ${data.description}
  ## Tests
    ${data.description}
  ## License
    ${data.description}
  ## Questions
    GitHub : [${answers.github}]
    Email : [${answers.email}]



  `;
}

module.exports = generateMarkdown;
