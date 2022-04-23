
function generateMarkdown(data) {



  return `
  #${data.title}
  ${data.description}
  # Table of Contents 
  * [About Me](#about)
  * [Project Name](#title)
  * [Description](#description)
  * [Language](#languages)
  * [Outstanding features](#outstanding)
  * [GitHub Link](#link)
  * [Contact Information](#linkGmail)
  * [License](#license)
  ## Name
  I am ${data.name}, owner of this project.

  ## About me
  ${data.about}

  ## Description
  ${data.description}

  ## Languages
  ${data.languages} has been used for the project

  ## What makes my project stand out?
  ${data.outstanding}

  ## My Github link: 
   Github: ${data.link}  

  ## Contact information
  Please contact me via gmail: ${data.linkGmail} if you have any questions

  ## License and Copyright
  Copyright (c) 2022 ${data.name}
  This project is licensed under the ${data.license} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

  ## Video Walkthrough for this Project
  Click [here](https://drive.google.com/file/d/1VvO5ReZ4mjDqZCWoSeW6h0BQJ9d3jKOs/view) to watch my walkthrough video.

`
}

module.exports = generateMarkdown;
