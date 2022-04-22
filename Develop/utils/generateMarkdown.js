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
function generateMarkdown(data) {



  return `
  #${data.title}
  ## Name
  ${data.name}
  ## About me
  ${data.about}
  

  ## Description
${data.description}

Installation
${data.confirmPackage}

Languages
${data.languages} has been used for the project

What makes my project stand out?
${data.outstanding}

Github Link
My Github link: ${data.link}

Contact information
Please contact me via gmail: ${data.linkGmail} if you have any questions

License

`
}

module.exports = generateMarkdown;
