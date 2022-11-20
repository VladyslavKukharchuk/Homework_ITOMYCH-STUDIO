// Створити систему для динамічного повернення розкладу для різних навчальних днів
// Приклад:
// Понеділок =>
// ● Прикладний мат. аналіз
// ● C++


// 5 модулів на кожний день тижня 

// з консолі зчитувати який день ми хочемо вивести

// динамічно підвантаувати модуль і повертати значення - список предмітів на цей день


import * as readline from 'node:readline'

let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function renderSchedule(day) {
    console.log(`\n         Розклад на ${day.schedule.day}\n`);
    console.log(`   Початок      Кінець      Предмет\n`);

    day.schedule.lessons.forEach(element => {
        console.log(`    ${element.startTime}       ${element.endTime}      ${element.subject}`)
    });

    console.log(`\n`);
}


async function load(text) {
    return await import(`./${text}.js`);
}

function loop() {
    read.question("На який день хочете подивитися розклад?   ", (answer) => {

        load(answer).then((day) => {
            renderSchedule(day)
            loop();
        }).catch(() => {
            console.log(`\n     Помилка в написанні. Спробуйте ще раз!\n`)
            loop();
        })
    });
};

read.on('SIGINT', () => {
    console.log(`\n     Не запізнюйся на пари!\n`);
    read.close();
});

loop();