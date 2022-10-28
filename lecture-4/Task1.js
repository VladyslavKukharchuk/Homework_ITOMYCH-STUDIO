// Квадрат

// Знайдіть периметр та площу квадрата.

// Вхідні дані
// Довжина сторони квадрата n (1 ≤ n ≤ 1000).

// Вихідні дані
// Для кожного теста виведіть в одному рядку периметр та площу квадрата.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calc(num1, num2 = 4) {
    let per = num1 * num2;
    let plo;
    if (num2 === 4) {
        plo = num1 * num1;
    }
    return `периметр: ${per}, площа: ${plo}`
}

readline.question("Введіть довжину сторони вашого квадрата, дозволений діапазон від 1 до 1000: ", function (answer) {

    let number = answer.replaceAll(` `, ``);
    if (number === "") {
        console.log(`You have entered an empty string, please try again.`);
    } else if (isNaN(Number(number)) === true) {
        console.log(`You entered a number in the wrong format, please try again.`);
    } else if ((Number(number) < 1) || (Number(number) > 1000)) {
        console.log(`Дозволений діапазон значень від 1 до 1000.`);
    } else {
        console.log(`Сторона вашого вкадрата: ${number}, відповідно його ${ calc(Number(number))}`);
    }
    readline.close();
});