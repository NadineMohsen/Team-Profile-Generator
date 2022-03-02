// creating variable and using function to bring in Iquirer, manager, engineer,intern, fs and generate team
const inquirer = require("inquirer")

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const fs = require('fs');
const generateTeam = require('./src/generateHTML');

// link to page creation
const generateHTML = require('./src/generateHTML');

//team array
const teamArray = [];

//Prompts for manager
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: idInput => {
                if  (isNaN(idInput)) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: officeNb => {
                if  (isNaN(officeNb)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ]) 
    .then(managerInput => {
        const {name,id,email,officeNumber} = managerInput;
        const manager = new Manager (name,id,email.officeNumber)

        teamArray.push(manager)
        console.log(manager)

    })
}