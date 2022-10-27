// Програма зчитує двоцифрове число і виводить через пропуск кожну цифру окремо.

// Вхідні дані
// Натуральне число на проміжку від 10 до 99 включно.

// Вихідні дані
// Спочатку першу цифру числа і через пропуск другу.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// readline.question("Enter a two-digit number between 10 and 99: ", function (answer) {

//     answer = answer.toUpperCase();
//     console.log(`You entered: ${answer}`)

//     // console.log(`Result: ${answer[0]} ${answer[1]}`);

//     console.log(`Result: ${answer}`);
//     readline.close();
// });

let input;

readline.question("Enter a two-digit number between 10 and 99: ", function (answer) {

    console.log(answer);
    console.log(typeof(answer));
    console.log(`You entered: "${answer}"`);

    let number = answer.replaceAll(` `,``)
    if(number === ""){
        console.log(`Ви ввели пусту строку, спробуйте ще раз.`);
    }else if (isNaN(Number(number)) === true){
        console.log(`Ви ввели не число, спробуйте ще раз.`);
    }else if (Number(number) < 10){
        console.log(`Введене число менше 10, спробуйте ще раз.`);
    }else if (Number(number) > 99){
        console.log(`Введене число більше 99, спробуйте ще раз.`);
    }else {
        console.log(`Дані отримано, триває обробка...`);

        console.log(parseFloat(number));
        console.log(Number(number));
        console.log(+number);
    
        let numberArr = String(number);
    
        console.log(`Result: ${numberArr[0]} ${numberArr[1]}`);
    }


    // console.log(answer === "");
    // input = parseFloat(answer);
    // console.log(input);
    // console.log(typeof(input));
    // console.log(input > 99);
    // console.log(input < 10);
    // console.log(typeof(input) !== "number");

    readline.close();
});

// do {
//     readline.question("Enter a two-digit number between 10 and 99: ", function (answer) {

//         console.log(answer);
//         console.log(typeof(answer));
//         console.log(`You entered: "${numbers}"`);

//         input = parseFloat(answer);
//         console.log(input);
//         console.log(typeof(input));
//         console.log(input === false);
//         console.log(input > 99);
//         console.log(input < 10);
//         console.log(typeof(input) !== "number");
    
//         readline.close();
//     });
// } while (input === false || input > 99 || input < 10 || typeof(input) !== "number" );