 // Assigns user inputs to the corresponding badge
  function generateMarkdown(data) {
   
    let licensetxt = "";

      if (data.license === "Apache 2.0") {
        data.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        licensetxt = "Apache 2.0 license"
      }
      else if (data.license === "MIT") {
          data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
          licensetxt = "MIT license"
      }
      else if (data.license === "GPL 3.0") {
        data.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        licensetxt = "GPL 3.0 license"
    }
      else if (data.license === "Unlicense") {
          data.license = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
          licensetxt = "Unlicensed"
      }
      else {
          data.license = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
          licensetxt = "Unlicensed"
      }
    
    // displays the data inside of the README.md file
    return `
  # ${data.title}
    
  ${data.license}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Questions](#Questions)
    
    
  ## Installation
    This application will require the the following command to install:

    ${data.installation}


  ## Usage
    ${data.usage}

  ## License
    This application is covered under the ${licensetxt}.

  ## Contributing
    ${data.contribution}

  ## Test
    Testing framework used: ${data.test}

  ## Questions
    If you have additional questions, you can reach me via my GitHub profile: [${data.username}](https://github.com/${data.username})
    or 
    send me an email at: ${data.email}
    `
    
    }
    // Export module
    module.exports = generateMarkdown;