#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
const answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name: ",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select the courses to enroll",
        choices: ["java", "python", "javascript", "typescript", "Html"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to pay: "
    }
]);
const tuitionFee = {
    java: 5000,
    python: 4000,
    javascript: 3000,
    typescript: 1000,
    Html: 500
};
console.log(`\nYou selected payment method.\n`);
console.log(`Balance: ${myBalance}\n`);
const paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select the payment method",
        choices: ["Bank transfer", "easypaisa", "jazz cash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money: ",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        }
    }
]);
console.log(`\nYou selected payment method ${paymentType.payment}\n`);
const selectedCourseFee = tuitionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (selectedCourseFee === paymentAmount) {
    console.log(`Congratulations, you have successfully enrolled in ${answer.courses}`);
    const ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["view status", "exit"]
        }
    ]);
    if (ans.select === "view status") {
        console.log(`\nStudent Name: ${answer.students}`);
        console.log(`Course Name: ${answer.courses}`);
        console.log(`Amount Paid: ${paymentType.amount}`);
        console.log(`Balance: ${myBalance}\n`);
    }
    else {
        console.log("\nExiting student Management System\n");
    }
}
else {
    console.log("Invalid amount due to course\n");
}
