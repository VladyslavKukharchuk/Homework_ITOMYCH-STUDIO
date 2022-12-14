// Побудуйте гру-вгадування
// Вимоги:
// ● Користувач може ввести число
// ● Система вибирає випадкове число від 1 до 6
// ● Якщо число користувача дорівнює випадковому числу, дайте користувачеві 2 бали
// ● Якщо число користувача відрізняється від випадкового числа на 1, дайте
// користувачеві 1 бал. В іншому випадку дайте користувачеві 0 балів
// ● Користувач може грати доки сам не захоче


readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let userPoints = 0;

console.log(`\n  Welcome to game "Guess the number"!!!\n\n\n     Enter numbers and get points.\n\n      press <Ctrl + C> to exit.\n`);


function loop() {
    readline.question("Enter a number between 1 and 6: ", (answer) => {

        let userNumber = parseInt(answer);

        if (userNumber >= 1 && userNumber <= 6) {
            let systemNumber = getRandomNumber(1, 6);
            let prize = 0;

            console.log(`  You entered ${userNumber}, the system selected a ${systemNumber}.`);

            if (userNumber === systemNumber) {
                prize = 2;
                console.log(`  Congratulations!!!! , you guessed the number. Keep prize: +2 points.`);
            } else if ((userNumber === systemNumber) || (userNumber === systemNumber - 1) || (userNumber === systemNumber + 1)) {
                prize = 1;
                console.log(`  You were close, keep the motivating prize: +1 point.`)
            } else {
                prize = 0;
                console.log(`  This time you didn't guess, try again.`);
            }
            userPoints += prize;

            console.log(`You have ${userPoints} points.`);
        } else {
            console.log("Please enter a number between 1 and 6!");
        }

        loop();
    });
};

readline.on('SIGINT', () => {
    console.log(`\nYou finished the game with a score of: ${userPoints} points.`);
    readline.close();
});

loop();