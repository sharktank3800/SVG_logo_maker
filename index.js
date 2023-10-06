// importing file
const inquirer = require("inquirer");
const fs = require("fs");
const generateSvg = require("./utils/generateSvg.js");

// questions for the user 
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter the text for the logo:"
    },

    {
        type: "input",
        name: "backgroundColor",
        message: "Enter the background color(#RGB or color name):",
        default: "#ffffff"
        // if no selection default to white
    },

    {
        type: "input",
        name: "textColor",
        message: "Enter the text color(#RGB or color name):",
        // if no selection default to black
        default: "#000000"
    },

    {
        type: "list",
        name: "shapeType",
        message: "Choose a shape for the logo:",
        choices: ["circle", "triangle", "square"]
    }

];


// creates svg file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => {
        if(err){
            console.log(err);
        }
        // the output is printed in the command line when successful
        console.log("congratulations! file created");
    });
}

// function that Initializes app
function init(){
    inquirer
    .prompt(questions)
    .then((answers) => {
        const svgContent = generateSvg(answers);

        writeToFile("logo.svg", svgContent);
    })
    .catch((error) => {
        console.log(error);
    });
}

// call to initialize app
init();