const generateHTML = require('./src/generateHTML')

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require('fs');



// Prompts the user for Manager Info
function askForManagerInfo () {
        inquirer
            .prompt([{
                    type: "input",
                    message: "What is your manager's name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is your manager's id?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is your manager's email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is your manager's office number?",
                    name: "officeNumber"
                }
            ]).then(function(response) {
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
                teamArr.push(manager)
                console.log(teamArr)
                askForRole()
            })

    }
    // Prompts the user if they would like to add another team member.......
function askForRole() {
    inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: 'What type of employee would you like to add?',
        choices: [
            'Engineer?',
            'Manager?',
            'Intern?',
            'I dont need to add anymore Team Members at this time.',
        ]
    }]).then(function(response) {
        if (response.role === 'Engineer?') {
            askForEngineerInfo()
        }
        if (response.role === 'Manager?') {
            askForManagerInfo()
        } else if (response.role === 'Intern?') {
            askForInternInfo()
        } else if (response.role === 'I dont need to add anymore Team Members at this time.') {
            renderApp(teamArr)
        }
    })

}

// Prompts the user for Engineer Info.....
function askForEngineerInfo() {
    inquirer
        .prompt([{
                type: "input",
                message: "What is your Engineers Name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your Engineers id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your Engineers email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your Engineers GitHub username?",
                name: "username"
            }
        ]).then(function(response) {
            const engineer = new Engineer(response.name, response.id, response.email, response.username)
            teamArr.push(engineer)
            console.log(teamArr)
            askForRole()
        })

}

// Prompts the user for Intern Info.......
function askForInternInfo() {
    inquirer
        .prompt([{
                type: "input",
                message: "What is your Inturns Name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your Inturns id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your Inturns email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your Inturns School?",
                name: "school"
            }
        ]).then(function(response) {
            const intern = new Intern(response.name, response.id, response.email, response.officeNumber)
            teamArr.push(intern)
            console.log(teamArr)
            askForRole()
        })

}