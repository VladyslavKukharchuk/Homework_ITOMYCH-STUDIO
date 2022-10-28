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

function calcAreaAndPerimeter(sideLength, numberOfSides = 4) {
    let perimeter = sideLength * numberOfSides;
    let area ;
    if (numberOfSides === 4) { //Calculation for a square
        area  = sideLength * sideLength;
    }
    return `perimeter: ${perimeter} and area: ${area}`
}

readline.question("Enter the length of the side of your square, allowed range from 1 to 1000: ", function (answer) {

    let number = answer.replaceAll(` `, ``);
    if (number === "") {
        console.log(`You have entered an empty string, please try again.`);
    } else if (isNaN(Number(number)) === true) {
        console.log(`You entered a number in the wrong format, please try again.`);
    } else if ((Number(number) < 1) || (Number(number) > 1000)) {
        console.log(`The allowed value range is from 1 to 1000.`);
    } else {
        console.log(`The side of your square is: ${number}, so ${calcAreaAndPerimeter(Number(number))}.`);
    }
    readline.close();
});