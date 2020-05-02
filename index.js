const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);

    function promptUser() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'projectTitle',
                message:' What is the project Title: '
            },
            {
                type: 'input',
                name: 'projectDescription',
                message:' What is the project Desscription : '
            },
            {
                type: 'input',
                name: 'Installation ',
                message:' Installation : '
            },
            {
                type: 'input',
                name: 'Usage',
                message:' What is the Usage: '
            },
            {
                type: 'input',
                name: 'Contributing',
                message:' Contribution: '
            },
            
            {
                type: 'input',
                name: 'tests',
                message:' tests: '
            },
            {
                type: 'input',
                name: 'GitHubreponame',
                message:' What is the Git hub repo name: '
            },
            {
                type: 'input',
                name: 'githubemail',
                message:' What is the github email: '
            },
        ]);
      }

      function generatereadme(answers) {
        return `
      Contents of this file 
      ----------------------
      -Project 
      -Description
      -Installation 
      -usage 
      -contribution
      -tests
      -github
      
      Project 
      ------
      ${answers.projectTitle}
      
      Discription 
      -----------
      ${answers.projectDescription}

      installation 
      -------------
      ${answers.Installation }
      
      usage 
      ----
      ${answers.Usage}

      Contribution
      ------------
      ${answers.Contributing}

      tests
      -----
      ${answers.tests}

      github 
      ------
      repo name: ${answers.GitHubreponame}
      email: ${answers.githubemail}
      `
      ;
      }



      promptUser()
      .then(function(answers){
          const md = generatereadme(answers);
          return writeFileAsync("README.md",md);
      })
