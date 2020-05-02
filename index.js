const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

function promptQuestions(){


const questions = [
    
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
        name: 'GitHubreponame',
        message:' What is the Git hub repo name: '
    },
    {
        type: 'input',
        name: 'githubemail',
        message:' What is the github email: '
    },

]
    

return inquirer.prompt(questions)

}

promptQuestions()

