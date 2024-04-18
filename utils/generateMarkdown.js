// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return ("![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)")
      break;
    case 'APACHE 2.0':
      return (["![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"])
      break;
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return ("(https://opensource.org/licenses/MIT)")
      break;
    case 'APACHE 2.0':
      return ("(https://opensource.org/licenses/Apache-2.0)")
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


  ## Description
  ${data.description}
  
  ## Table of Contents

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
