#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 6766;

console.log("Your pin is 6766");
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!");
  let actionAns = await inquirer.prompt([
    {
      name: "action",
      message: "Please select one option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash", "credit amount"],
    },
  ]);
  if (actionAns.action === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter amount",
        type: "number",
      },
    ]);
    myBalance -= amountAns.amount;
    console.log("Your remaining balance is: " + myBalance);
    if (amountAns.amount > myBalance) {
      console.log("You do not have enough balance!");
    }
  }
  if (actionAns.action === "check balance") {
    console.log("Your balance is " + myBalance);
  }
  if (actionAns.action === "fast cash") {
    let fastCash = await inquirer.prompt([
      {
        name: "fast",
        message: "Choose your amount you want to withdraw",
        type: "list",
        choices: [1000, 2000, 3000, 4000, 5000],
      },
    ]);

    if (myBalance >= fastCash.fast) {
      myBalance -= fastCash.fast;
    }
    console.log("Your remaining balance is: " + myBalance);
  } if (actionAns.action === "credit amount") {
    let creditAmount = await inquirer.prompt([
      {
        name: "credit",
        message: "Enter the amount you want to credit:",
        type: "number",
      },
    ]);
    myBalance += creditAmount.credit;
    console.log("Your balance is: " + myBalance);
  }
} else {
  console.log("Invalid pin!");
}
