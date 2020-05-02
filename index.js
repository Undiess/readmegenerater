const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

function promptQuestions(){


const questions = [{
    type: 'input',
    name: 'projectTitle',
    message:' What is the project Title: '
    }]
    

return inquirer.prompt(questions)
}

promptQuestions()


