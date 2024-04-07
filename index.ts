#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
const currency: any = {
    USD: 1, //base currency
    EUR: 0.91,
    RIYAL: 0.27,
    INR: 74.58,
    CNY: 7.23,
    PKR: 280
};
let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            message: chalk.red("From Currency"),
            type: "list",
            choices: ["USD", "EUR", "RIYAL", "INR","CNY", "PKR"]
        },
        {
            name: "to",
            message: chalk.greenBright("To Currency"),
            type: "list",
            choices: ["USD", "EUR", "RIYAL", "INR","CNY", "PKR"]
        },
        {
            name: "amount",
            message:chalk.yellowBright ("Enter your amount"),
            type: "number"
        }
    ]
);
let userFromcurrency = userAnswer.from;
let userTocurrency = userAnswer.to;

let fromAmount = currency[userFromcurrency]; //exchange rate
let toAmount = currency[userTocurrency]; // exchnge rate
let amount = userAnswer.amount; 
let baseAmount = amount / fromAmount; // USD base currency
let convertedAmount = Math.ceil(baseAmount * toAmount);
console.log(chalk.red("Converted Amount:"),convertedAmount);
