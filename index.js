#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 1000);
    });
};
async function welcome() {
    let title = chalkAnimation.rainbow("Lets Start The Code");
    await sleep();
    title.stop();
    //Asci Art
    console.log(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);
}
await welcome();
async function askInput() {
    const answer = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "What do you want to do?",
            choices: ["Addition", "Subtract", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number01",
            // validate:function(number){
            //     if(isNaN(number)){
            //         return console.log("Enter Number!!!");
            //     }
            // }
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number02",
            // validate:function(number){
            //     if(isNaN(number)){
            //         return console.log("Enter Number!!!");
            //     }
            // }s
        },
    ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        // console.log(answers);
        if (answers.operator === "Addition") {
            console.log(chalk.red(`${answers.num1} + ${answers.num2}=${answers.num1 + answers.num2}`));
        }
        else if (answers.operator === "Subtract") {
            console.log(`${answers.num1} - ${answers.num2}=${answers.num1 - answers.num2}`);
        }
        else if (answers.operator === "Multiplication") {
            console.log(`${answers.num1} * ${answers.num2}= ${answers.num1 * answers.num2}`);
        }
        else if (answers.operator === "division") {
            console.log(`${answers.num1} / ${answers.num2}= ${answers.num1 / answers.num2}`);
        }
    });
}
;
async function startOver() {
    do {
        await askInput();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to start over?",
        });
    } while (again.restart == "y" || again.restart == "yes" || again.restart == "Y");
}
;
startOver();
