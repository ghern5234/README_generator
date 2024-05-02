// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "APACHE 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "GPL 3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case "BSD 3.0":
      return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
    default:
      return "";
  }
}


//A function to capitalize the userAnswer key
function capitalize(str){
  
  return str.charAt(0).toUpperCase() + str.slice(1)

}


//A function to generate section based on user input
function renderSection(data) {

  const dataArray = Object.entries(data);
  const dataArray2 = dataArray.slice(2)
  let sections = ""

  dataArray2.forEach(function(element) {
    if (element[0].includes("questions")) {
      return
    }

    if (element[0].includes("github")) {
      return
    }

    if (element[0].includes("email")) {
      return
    }

    if(element[0].includes("license")) {
element[1] = `${renderLicenseSection(data.license)}`
    }

    if(element[1]) {
      sections += `## ${capitalize(element[0])}
${element[1]} \n \n`
    }});


    
  return sections
  }

  


// A function that returns the license section of README
function renderLicenseSection(license) {
  
  let licenseLink = "";

  switch (license) {
    case "MIT":
      licenseLink += "(https://opensource.org/licenses/MIT)";
      break;
    case "APACHE 2.0":
      licenseLink += "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      licenseLink += "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3.0":
      licenseLink += "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    default:
      licenseLink = "";
  }
  if (license === "None") {
    return "";
  } else {
    return `For more information on the licensing, please visit: ${licenseLink}`;
  }
}

// A function to create Table of Contents 
function renderTableOfContents(data) {
  
  const dataArray = Object.entries(data);

  let filteredData = dataArray.filter(entry => entry[0] !== 'email' && entry[0] !== 'github');
  
  let tableOfContents = "## Table of Contents \n";

  filteredData.forEach(function(element) {
    if(!element[1] == '') {
      tableOfContents += `- [${capitalize(element[0])}](#${capitalize(element[0])}) \n`;
    }});


  return tableOfContents;
}

// A function to render project description of project
function renderDescription(data) {
  if (data.length > 0) {
    return `## Description
  ${data}`;
  } else {
    return
  }
}


// A function to add contact info to the question section
function renderQuestionsSection(data) {
  
  let questionsSection = ""

  if(data.questions) {
    questionsSection += `FAQ: ${data.questions} \n \n`
  } 
  
if(data.email) {
    questionsSection += `Email: ${data.email} \n \n`
  } 
  
if(data.github) {
    questionsSection += `GitHub: ${data.github} \n \n`
  }

if(questionsSection) {
questionsSection = `## Questions \n` + questionsSection
}
    return questionsSection


}



// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}


${renderDescription(data.description)}

  
${renderTableOfContents(data)}


${renderSection(data)}


${renderQuestionsSection(data)}


`;
}

module.exports = generateMarkdown;
