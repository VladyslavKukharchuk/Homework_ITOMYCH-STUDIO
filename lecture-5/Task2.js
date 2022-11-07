// Створити об’єкт Circle - x, y - координати центру кола, r - радіус.

// Написати методи для пошуку площі і периметр круга.

// Також фукцію пошуку площі перетину двох кіл.

const circle = {
    x: 1,
    y: 2,
    r: 201,

    getAreaOfCircle() {
        let areaOfCircle = Math.PI * Math.pow(this.r, 2);
        return areaOfCircle;
    },

    getPerimeterOfCircle() {
        let perimeterOfCircle = 2 * Math.PI * this.r;
        return perimeterOfCircle;
    }
}

function getAreaOfIntersectionOfCircles(firstСircle, secondCircle) {
    // intersectionChecking 


}

function NewCircle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    // this.getName = function() {
    //     return this.name;
    // }
}

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question("Enter parameters of your circle, in format x, y, r (x and y - center coordinates, r - radius): ", function (answer) {

//     let answerArr = answer.split(', ');
//     console.log(answerArr);
//     const firstСircle = new NewCircle(answerArr[0], answerArr[1], answerArr[2]);
// });
// readline.close();

const firstСircle = new NewCircle(0, 1, 2);
const secondCircle = new NewCircle(0, 1, 2);
// console.log(circle1.getName());

console.log(firstСircle);



// console.log(`The area of the circle is: ${Circle.getAreaOfCircle().toFixed(1)}.`);
// console.log(`The perimeter of the circle is: ${Circle.getPerimeterOfCircle().toFixed(1)}.`);