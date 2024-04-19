// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return ("![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)")
    case 'APACHE 2.0':
      return (["![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"])
    case 'GPL 3.0':
      return ("![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)")
    case 'BSD 3.0':
      return ("![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)")
    default:
      return ("")
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return ("(https://opensource.org/licenses/MIT)")
    case 'APACHE 2.0':
      return ("(https://opensource.org/licenses/Apache-2.0)")
    case 'GPL 3.0':
      return ("(https://www.gnu.org/licenses/gpl-3.0)")
    case 'BSD 3.0':
      return ("(https://opensource.org/licenses/BSD-3-Clause)")
    default:
      return ("")

  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}



//Function to iterate through table of contents array



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}



  ## Description
  ${data.description}



  ## Table of Contents
  - [Installation](#Installation) \n
  - [Usage](#Usage) \n
  - [License](#License) \n
  - [Contributing](#Contributing) \n
  - [Test](#Test) \n
  - [Questions](#Questions) \n



  ## Installation
  ${data.install}


  ## Usage
  ${data.usage}

  
  ## License
  For more information on the licensing, please visit: ${renderLicenseLink(data.license)}

  
  
  ## Contributing
  ${data.contribution}

  
  ## Test
  ${data.testing}
  
 
  ## Questions

  ${data.questions}

  GitHub: ${data.github}
  
  Email: ${data.email}
  
  

`;
}

module.exports = generateMarkdown;
