// Зробіть список користувачів веб магазину. І відтворіть основні етапи покупки товарів:
// 1. Інформацію про вибраного користувача
// 2. Додати в кошик товар
// 3. Вивести кошик товарів + ціна
// 4. Покупка товару
// Реалізуйте 2 способами через callback і через проміси.


// const user = {

// };

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     };

//     products = [];

//     get information() {
//         return {
//             name: this.name,
//             age: this.age
//         };
//     };

//     buyProduct(product) {
//         basket.forEach((item, i, arr) => {
//             if (item === product) {
//                 this.products.push(product)
//             }
//         });
//     };
// }

// let currentUser = new User("Роман", 21);



const users = [{
        name: "Roman",
        products: []
    },
    {
        name: "Vlad",
        products: []
    },
    {
        name: "Nazar",
        products: []
    }
];

function renderUsers() {
    console.log(`Registered users: `);
    users.map(user => console.log(`  ${user.name}`));
}

let currentUser = {};

function renderUserInfo() {
    console.log(`name: ${currentUser.name}.`);
    getUserProducts();
}

function getUserProducts() {
    if (currentUser.products.length > 0) {
        console.log(`You bought before: `);
        currentUser.products.map(product => console.log(`   ${product.title}`));
        console.log(`Total: ${getTotal(currentUser.products)}.`);
    } else {
        console.log("You haven`t bought any products yet.");
    }
}


function buyProducts() {
    basket.forEach((item, i, arr) => {
        currentUser.products.push(item);
    });
};

function autorization(name) {
    users.forEach((user, i, arr) => {
        if (user.name === name) {
            currentUser = user;
        }
    });
}

let basket = [];

function renderBusket() {
    if (basket.length > 0) {
        console.log(`Now in busket: `);
        basket.map(product => console.log(`   ${product.title} `));
        console.log(`Total: ${getTotal(basket)}.`);
    } else {
        console.log(`Busket is empty now.`);
    }
}

function putInBasket(product) {
    products.forEach((item, i, arr) => {
        if (item.title === product) {
            basket.push(item)
        }
    });
}

function cleanBucket() {
    basket = [];
}

function logout() {
    currentUser = {};
}

function exit() {
    cleanBucket();
    logout();
}

function getTotal(arr) {
    let total = 0;
    arr.forEach((product, i, arr) => {
        total += product.price;
    })
    return total;
}

const products = [{
        title: "Apples",
        price: 75
    },
    {
        title: "Beer",
        price: 50
    },
    {
        title: "Cookies",
        price: 100
    },
    {
        title: "Oranges",
        price: 125
    }
];

function renderProducts() {
    console.log(`Products that now in stock: `);
    products.map(product => console.log(`  ${product.title}, ціна: ${product.price}`));
}

// renderUsers();

// console.log(currentUser);

// autorization("Nazar");

// console.log(currentUser);

// renderProducts();

// renderBusket();

// putInBasket("Oranges");

// renderBusket();

// buyProducts();

// console.log(currentUser);

// cleanBucket();

// renderBusket();

// renderUserInfo();



// console.log("Welcome to our store!!\nSign in to your account.\n");
// renderUsers();
// console.log("\nTo log in, write your name:\n");
// let answer = "Nazar";

// autorization(answer);

// renderUserInfo();
// renderBusket();
// renderProducts();

// console.log("\nEnter comands in CLI: \n     to buy product: add <name>\n     to show your data: show\n     to finish shopping: by\n     to exit from shop: exit");


// if (answer.indexOf('add') !== -1) {
//     let answerArr = answer.split('-');
//     console.log(answerArr[1]);
//     putInBasket(answerArr[1]);
// } else if (answer.indexOf('show') !== -1) {
//     renderUserInfo();
// } else if (answer.indexOf('by') !== -1) {
//     buyProducts();
//     cleanBucket();
// } else if (answer.indexOf('exit') !== -1) {
//     exit();
// } else {
//     console.log("Enter the command correctly!!");
// }




readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome to our store!!\nSign in to your account.\n");
renderUsers();
console.log("\nTo log in, write your name:\n");
let answer = "Nazar";

autorization(answer);

console.log(`\nHi ${answer}!\n`);
renderBusket();
renderProducts();

function shopApp() {
    readline.question("\nComands: \n     to buy product: add <name>\n     to show your data: show\n     to finish shopping: by\n     to exit from shop: exit\nEnter comand in CLI: \n", (answer) => {
        console.log("--------------------------RESULT--------------------------");

        if (answer.indexOf('add') !== -1) {
            let answerArr = answer.split(' ');
            putInBasket(answerArr[1]);

            renderBusket();

            console.log("---------------------------INFO---------------------------");

            renderProducts();

            console.log("----------------------------------------------------------");
            shopApp();
        } else if (answer.indexOf('show') !== -1) {

            renderUserInfo();

            console.log("---------------------------INFO---------------------------");

            renderBusket();
            renderProducts();

            console.log("----------------------------------------------------------");
            shopApp();
        } else if (answer.indexOf('by') !== -1) {
            buyProducts();
            cleanBucket();

            console.log(`\n\n\n                Thank you for shopping!\n\n\n `);

            console.log("------------------------UPDATE-INFO------------------------");

            renderUserInfo();
            renderBusket();
            
            console.log("---------------------------INFO---------------------------");

            renderProducts();

            console.log("----------------------------------------------------------");
            shopApp();
        } else if (answer.indexOf('exit') !== -1) {
            // console.log(`\n\n\n`);
            // console.log(`\n                 Thank you for coming!`);
            // console.log(`\n\n\n`);
            console.log(`\n\n\n                Thank you for coming!          \n\n\n`);
            exit();
            console.log("----------------------------------------------------------");
            readline.close();
        } else {
            console.log("Enter the command correctly!!");
            shopApp();
        }
        // console.log("------------------------UPDATE-INFO------------------------");

        // renderBusket();
        // renderProducts();

        // console.log("-----------------------------------------------------------");

        // shopApp();
    });
};

readline.on('SIGINT', () => {
    console.log(`\nThank you for coming!`);
    readline.close();
});

shopApp();




// if(ask){

// }else(){

// }



// readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let getInput = readline.question("Enter a number between 1 and 6: ");

// console.log(getInput)