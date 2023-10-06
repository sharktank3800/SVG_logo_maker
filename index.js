const inquirer = require("inquirer");
const fs = require("fs");
const generateSvg = require("./utils/generateSvg.js");


const questions = [];


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