// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return "- [License](#License) \n";
  }
}

//Function to generate section based on user input
// function renderSection(data) {
  // const keys = Object.keys(data);
  // const values = Object.values(data);

//   console.log(keys)
//   console.log(values)

//   console.log(dataArray)

//   let title = keys[0].toUpperCase() + keys.slice(1);

//   If key is empty, skip and do not create section\
// for
//   if(!values === ""){
//     return `## ${title} \n
//     ${values} \n`;
//   } else {
//    return ""
//   }
// }

// function renderSection(data){
//   for(key in data)
// }

//function
// function renderSection(data) {
  
  
  
//   for (let section in data) {
//     if(section > 0 ){
//       return
//     }
//   }

//   return response;
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink;
  switch (license) {
    case "MIT":
      licenseLink = "(https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3.0":
      licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)";
    default:
      licenseLink = "";
  }
  if (license === "None") {
    return "";
  } else {
    return `## License
  For more information on the licensing, please visit: ${licenseLink}`;
  }
}

//Function to capitalize the userAnswers 
function capitalize(str){
  
    return str.charAt(0).toUpperCase() + str.slice(1)

}

// //Function to create Table of Contents based on choices
function renderTableOfContents(data) {
  
  const dataArray = Object.entries(data);
  const values = dataArray[1];

  let tableOfContents = "## Table of Contents \n";

  dataArray.forEach(function(element) {
    if(!element[1] == '') {
      tableOfContents += `- [${capitalize(element[0])}](#${capitalize(element[0])}) \n`;
    }
    });

  tableOfContents += `- [License](#License) \n`;

  return tableOfContents;
}

//Function to render project description of project
function renderDescription(data) {
  if (data.length > 0) {
    return `## Description
  ${data}`;
  } else {
    return
  }
}


//
function renderQuestions(data) {
  
}





//Function to render contact info
function renderContactInfo(data) {
  if (!data.github && !data.email) {
    return "";
  } else if (!data.github) {
    return data.email;
  } else if (!data.email) {
    return `[${data.github}](https://github.com/${data.github}) \n`;
  } else {
    return `${data.email} \n
  [${data.github}](https://github.com/${data.github}) \n`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("This is description !! = ", data.description);
  return `# ${data.title}
${renderLicenseBadge(data.license)}


${renderDescription(data.description)}

  
${renderTableOfContents(data)}




${renderContactInfo(data)}


`;
}

module.exports = generateMarkdown;
