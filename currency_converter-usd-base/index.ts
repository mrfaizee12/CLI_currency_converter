#! /usr/bin/env node


import inquirer from "inquirer";


const currency: any = {
    USD: 1,   // base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    SAR: 3.75,
    PKR: 277
}

let my_answer = await inquirer.prompt([
    {
        name: 'from',
        message:  "Enter from Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR','SAR', 'PKR']

    },
    {
        name: 'to',
        message:  "Enter to Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR','SAR', 'PKR']

    },
    {
        name: 'amount',
        message: 'Enter your amount',
        type: 'number'
    }
])

let userFromCurrency = my_answer.from
let userToCurrency = my_answer.to
let fromAmount = currency[userFromCurrency]  //EXCHANGE RATE
let toAmount = currency[userToCurrency]     // EXCHANGE RATE
let amount = my_answer.amount
let baseAmount = amount/fromAmount         // USD Base currency
let convertedAmount = baseAmount*toAmount

console.log(convertedAmount);