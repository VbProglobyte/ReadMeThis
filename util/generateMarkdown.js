
//LICENSES :  BSD, MIT, Apache - for now combine into an array
function renderLicenseBadge(license) {
      const response = '';
      switch (license) { //////////////////////////////// - 
        case 'BSD':
          response = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
          break;
      
        case 'APACHE':
          response =  `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
          break;  
         
        case 'MIT':
          response = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
          break;  
        
        case 'NONE':
          response = '';
          break;
      };
      return response;
    };
   

function generateMarkdown(answers) { // answers.license and answers -- create title (of ReadMe) and sections 
    // /////////////////////////////////////////////////////////////////////////
  return `# ${answers.title} 
  ${renderLicenseBadge(answers.license)}
  ## Description
     ${answers.description}

  ## Table of Contents
   * [Installation](#Installation)
   * [Usage](#Usage)
   * [License](#License)
   * [Contributing](#Contributing)
   * [Tests](#Tests)
   * [Contact](#Contact)

  ## Installation
    ${answers.installation}

  ## Usage 
    ${answers.usage}

  ### License
    ${answers.license}

  ### Contributing
    ${answers.contributing}

  ### Tests
    ${answers.tests}

  ### Contact
    GitHub : ${answers.github}
    Email : ${answers.email}
  `;
};
// /////////////////////////////////////////////
module.exports = generateMarkdown;
