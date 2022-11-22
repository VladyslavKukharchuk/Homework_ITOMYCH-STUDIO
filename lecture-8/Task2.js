// Зробіть список користувачів веб магазину. І відтворіть основні етапи покупки товарів:
// 1. Інформацію про вибраного користувача
// 2. Додати в кошик товар
// 3. Вивести кошик товарів + ціна
// 4. Покупка товару
// Реалізуйте 2 способами через callback і через проміси.



// const users = [{
//         name: "Roman",
//         products: []
//     },
//     {
//         name: "Vlad",
//         products: []
//     },
//     {
//         name: "Nazar",
//         products: []
//     }
// ];

// let currentUser = {};

// function renderUsers() {
//     console.log(`Registered users: `);
//     users.map(user => console.log(`  ${user.name}`));
// }

// function renderUserInfo() {
//     console.log(`name: ${currentUser.name}.`);
//     getUserProducts();
// }

// function renderBusket() {
//     if (basket.length > 0) {
//         console.log(`Now in busket: `);
//         basket.map(product => console.log(`   ${product.title} `));
//         console.log(`Total: ${getTotal(basket)}.`);
//     } else {
//         console.log(`Busket is empty now.`);
//     }
// }

// function renderProducts() {
//     console.log(`Products that now in stock: `);
//     products.map(product => console.log(`  ${product.title}, ціна: ${product.price}`));
// }

// function getUserProducts() {
//     if (currentUser.products.length > 0) {
//         console.log(`You bought before: `);
//         currentUser.products.map(product => console.log(`   ${product.title}`));
//         console.log(`Total: ${getTotal(currentUser.products)}.`);
//     } else {
//         console.log("You haven`t bought any products yet.");
//     }
// }

// function autorization(name) {
//     users.forEach((user, i, arr) => {
//         if (user.name == name) {
//             currentUser = user;
//         }
//     });

//     if (!objectIsEmpty(currentUser)) {
//         return true;
//     } else {
//         return false;
//     }
// }


// let basket = [];



// function putInBasket(answer) {
//     let answerArr = answer.split(' '),
//         product = answerArr[1]

//     products.forEach((item, i, arr) => {
//         if (item.title === product) {
//             basket.push(item)
//         }
//     });
// }

// function cleanBucket() {
//     basket = [];
// }

// function buyProducts() {
//     basket.forEach((item, i, arr) => {
//         currentUser.products.push(item);
//     });
//     cleanBucket();
// };

// function getTotal(arr) {
//     let total = 0;
//     arr.forEach((product, i, arr) => {
//         total += product.price;
//     })
//     return total;
// }


// const products = [{
//         title: "Apples",
//         price: 75
//     },
//     {
//         title: "Beer",
//         price: 50
//     },
//     {
//         title: "Cookies",
//         price: 100
//     },
//     {
//         title: "Oranges",
//         price: 125
//     }
// ];


// function exit() {
//     cleanBucket();
//     currentUser = {};
//     readline.close();
// }


// function objectIsEmpty(object) {
//     return JSON.stringify(object) === '{}';
// }


// readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.on('SIGINT', () => {
//     console.log(`\n\n\n                Thank you for coming!          \n\n\n`);
//     readline.close();
// });













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

let currentUser = {};

function renderUsers() {
    console.log(`Registered users: `);
    users.map(user => console.log(`  ${user.name}`));
}

function renderUserInfo() {
    console.log(`name: ${currentUser.name}.`);
    getUserProducts();
}

function renderBusket() {
    if (basket.length > 0) {
        console.log(`Now in busket: `);
        basket.map(product => console.log(`   ${product.title} `));
        console.log(`Total: ${getTotal(basket)}.`);
    } else {
        console.log(`Busket is empty now.`);
    }
}

function renderProducts() {
    console.log(`Products that now in stock: `);
    products.map(product => console.log(`  ${product.title}, ціна: ${product.price}`));
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

function autorization(name) {
    users.forEach((user, i, arr) => {
        if (user.name == name) {
            currentUser = user;
        }
    });

    if (!objectIsEmpty(currentUser)) {
        return true;
    } else {
        return false;
    }
}


let basket = [];


function putInBasket(answer) {
    let answerArr = answer.split(' '),
        product = answerArr[1]

    products.forEach((item, i, arr) => {
        if (item.title === product) {
            basket.push(item)
        }
    });
}

function cleanBucket() {
    basket = [];
}

function buyProducts() {
    basket.forEach((item, i, arr) => {
        currentUser.products.push(item);
    });
    cleanBucket();
};

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


function exit() {
    cleanBucket();
    currentUser = {};
    readline.close();
}


function objectIsEmpty(object) {
    return JSON.stringify(object) === '{}';
}


readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('SIGINT', () => {
    console.log(`\n\n\n                Thank you for coming!          \n\n\n`);
    readline.close();
});



// //callback
// function login(callback) {

//     renderUsers();

//     readline.question("\nTo log in, write your name: ", (answer) => {

//         if (autorization(answer) === true) {
//             console.log(`\n\n                         Hi ${answer}!\n\n`);
//             callback();
//         } else {
//             console.log(`\n\n               User with name "${answer}" does not exist!\n`);
//             login();
//         }
//     });
// };


// function getComand() {

//     console.log("\n---------------------------INFO---------------------------\n");

//     renderBusket();

//     console.log("\n----------------------------------------------------------\n");

//     renderProducts();

//     console.log("\n----------------------------------------------------------\n");

//     readline.question("\nComands: \n     to buy product: add <name>\n     to show your data: show\n     to finish shopping: by\n     to exit from shop: exit\n\nEnter comand in CLI:  ", (answer) => {

//         if (answer.indexOf('add') !== -1) {


//             putInBasket(answer);
//             getComand();

//         } else if (answer.indexOf('show') !== -1) {

//             console.log("\n------------------------USER--INFO------------------------\n");
//             renderUserInfo();
//             getComand();

//         } else if (answer.indexOf('by') !== -1) {


//             buyProducts();
//             getComand();

//         } else if (answer.indexOf('exit') !== -1) {

//             console.log(`\n\n\n                Thank you for coming!          \n\n\n`);
//             exit();

//         } else {
//             console.log("Enter the command correctly!!");
//             getComand();
//         }
//     });
// };



// console.log("\n\n\n----------------------Welcome to our store!!----------------------\n\n                     Sign in to your account.\n\n\n");

// login(getComand);



//Promise
function getComand() {
    return new Promise((resolve, reject) => {

        console.log("\n---------------------------INFO---------------------------\n");

        renderBusket();

        console.log("\n----------------------------------------------------------\n");

        renderProducts();

        console.log("\n----------------------------------------------------------\n");

        readline.question("\nComands: \n     to buy product: add <name>\n     to show your data: show\n     to finish shopping: by\n     to exit from shop: exit\n\nEnter comand in CLI:  ", (answer) => {
            if ((answer.indexOf('add') !== -1) || (answer.indexOf('show') !== -1) || (answer.indexOf('by') !== -1) || (answer.indexOf('exit') !== -1)) {
                resolve(answer);
            } else {
                reject()
            }
        })
    }).then((answer) => {
        if (answer.indexOf('add') !== -1) {

            putInBasket(answer);
            getComand()

        } else if (answer.indexOf('show') !== -1) {
            console.log("\n------------------------USER--INFO------------------------\n");
            renderUserInfo();
            getComand()

        } else if (answer.indexOf('by') !== -1) {

            buyProducts();
            getComand()

        } else if (answer.indexOf('exit') !== -1) {
            console.log(`\n\n\n                Thank you for coming!          \n\n\n`);
            exit();
        }

    }).catch(() => {
        console.log("Enter the command correctly!!");
        getComand()
    })
}

function login() {
    return new Promise((resolve, reject) => {

        renderUsers();

        readline.question("\nTo log in, write your name: ", (answer) => {

            if (autorization(answer) === true) {
                resolve(answer);
            } else {
                reject(answer);
            }
        })
    }).then((answer) => {

        console.log(`\n\n                         Hi ${answer}!\n\n`);

        getComand()

    }).catch((answer) => {
        console.log(`\n\n               User with name "${answer}" does not exist!\n`);

        login()
    })
}


console.log("\n\n\n----------------------Welcome to our store!!----------------------\n\n                     Sign in to your account.\n");

login()