// Створити модуль calculator. В головному файлі програма повинна зчитувати з
// консолі стрінг і повертати результат.
// Приклад ‘2*2+2’ => 6

import {
    calculator
} from './calculator.js';
import * as readline from 'node:readline'

let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('\n       Welcome to the "Calculator"\n ')

function loop() {
    read.question("Enter the expression you want to calculate(for example '3 + 2'):  ", (answer) => {

        console.log(`${answer} = ${calculator(answer)}`)
        loop();
    });
};

read.on('SIGINT', () => {
    console.log(`\n\n       Bye!\n`);
    read.close();
});

loop();