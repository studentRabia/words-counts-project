#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright.bold(`\n\t\t" Word counter Applicition "`));
console.log(chalk.cyanBright('='.repeat(60)));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter  A Sentence."
    }
]);
//triming the sentence & spit ting inito words based on "spaces"
let words = answers.sentence.trim().split(" ");
//analysis of user input setence
console.log(chalk.cyanBright("=".repeat(60)));
console.log(chalk.bold("\n- Sentence Word: "));
console.log(words);
console.log(chalk.bold(`\n - Word Counts: '${chalk.bold.redBright(words.length)}'`));
console.log(chalk.cyanBright("=".repeat(60)));
