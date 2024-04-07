#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    PKR: 1, // base currency
    USD: 0.0036,
    EUR: 0.0033,
    GBP: 0.0028,
    INR: 0.30,
    SAR: 0.14
};
let currencyChoices = Object.keys(currency);
let my_answer = await inquirer.prompt([
    {
        name: 'from',
        message: chalk.yellow("Select the source currency"),
        type: 'list',
        choices: currencyChoices.map(currency => chalk.cyan(currency))
    },
    {
        name: 'to',
        message: chalk.yellow("Select the target currency"),
        type: 'list',
        choices: currencyChoices.map(currency => chalk.cyan(currency))
    },
    {
        name: 'amount',
        message: chalk.yellow('Enter the amount to convert'),
        type: 'number'
    }
]);
let userFromCurrency = my_answer.from;
let userToCurrency = my_answer.to;
let fromAmount = currency[userFromCurrency.replace(/\u001b\[\d+m/g, '')]; //remove chalk styling  // Exchange rate
let toAmount = currency[userToCurrency.replace(/\u001b\[\d+m/g, '')]; //remove chalk styling   // Exchange rate
let amount = my_answer.amount;
let baseAmount = amount / fromAmount; // PKR Base currency
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bgRedBright.bold(`Converted Amount: ${convertedAmount}`));
