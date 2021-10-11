
//LICENSES :  BSD, MIT, Apache - for now combine into an array
function renderLicenseBadge(license) {
    const licenses = [
        { // [0]
            licenseBadge: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
            link: 'https://opensource.org/licenses/BSD-2-Clause',
            section: `
            Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
            1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
            
            2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
            
            THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
        },
        { // [1]
            licenseBadge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            link: 'https://opensource.org/licenses/Apache-2.0',
            section: `
            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at

                http://www.apache.org/licenses/LICENSE-2.0

            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.`
        },
        { // [2]
            licenseBadge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            link: 'https://opensource.org/licenses/MIT',
            section: `
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
        },
        { // [3] 
            licenseBadge: '',
            link: '',
            section: ``,
        }
      ];
        
    //   switch (license) { //////////////////////////////// - only used switch once. look up for more detail - did not work. leave for now
    //     case 'BSD':
    //       response = `[![${licenses[0].licenseBadge}]${licenses[0].link}]${licenses[0].section}`;
    //       break;
      
    //     case 'APACHE':
    //       response = `[![${licenses[1].licenseBadge}]${licenses[1].link}]${licenses[1].section}`;
    //       break;  
         
    //     case 'MIT':
    //       response = `[![${licenses[2].licenseBadge}]${licenses[2].link}]${licenses[2].section}`;
    //       break;  
        
    //     case 'N/A':
    //       response = `[![${licenses[3].licenseBadge}]${licenses[3].link}]${licenses[3].section}`;
    //       break;
    //   };
    //   return response;
    // };
    
    }
   

function generateMarkdown(answers) { // answers.license and answers -- create title (of ReadMe) and sections 
    // /////////////////////////////////////////////////////////////////////////
  return `# ${answers.title} 
  ${renderLicenseBadge(answers.license,answers)}
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
