// Створити об’єкт Circle - x, y - координати центру кола, r - радіус.

// Написати методи для пошуку площі і периметр круга.

// Також фукцію пошуку площі перетину двох кіл.

function Circle(x, y , r) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.getAreaOfCircle = function() {
        let areaOfCircle = Math.PI * Math.pow(this.r, 2);
        return areaOfCircle;
    }

    this.getPerimeterOfCircle = function() {
        let perimeterOfCircle = 2 * Math.PI * this.r;
        return perimeterOfCircle;
    }
}

const firstСircle = new Circle(0, 0, 2);
const secondCircle = new Circle(3, 0, 4);

// const firstСircle = {
//     x: 0,
//     y: 0,
//     r: 4,

//     getAreaOfCircle() {
//         let areaOfCircle = Math.PI * Math.pow(this.r, 2);
//         return areaOfCircle;
//     }

//     getPerimeterOfCircle() {
//         let perimeterOfCircle = 2 * Math.PI * this.r;
//         return perimeterOfCircle;
//     }
// }

// const secondCircle = {
//     x: 0,
//     y: 0,
//     r: 2,
// }

function getAreaOfIntersectionOfCircles(firstСircle, secondCircle) {
    let distance = Math.sqrt(Math.pow((firstСircle.x - secondCircle.x), 2) + Math.pow((firstСircle.y - secondCircle.y), 2));
    console.log(distance)

    if (distance >= firstСircle.r + secondCircle.r) {
        return 0;
    } else if ((distance + secondCircle.r) <= firstСircle.r) {
        return secondCircle.getAreaOfCircle()
    } else if ((distance + firstСircle.r) <= secondCircle.r) {
        return firstСircle.getAreaOfCircle()
    } else {
        const F1 = 2 * Math.acos(((Math.pow(firstСircle.r), 2) - (Math.pow(secondCircle.r), 2) + (Math.pow(distance), 2)) / (2 * firstСircle.r * distance));
        const F2 = 2 * Math.acos(((Math.pow(secondCircle.r), 2) - (Math.pow(firstСircle.r), 2) + (Math.pow(distance), 2)) / (2 * secondCircle.r * distance));

        const S1 = ((Math.pow(firstСircle.r), 2) * (F1 - Math.sin(F1))) / 2;
        const S2 = ((Math.pow(secondCircle.r), 2) * (F2 - Math.sin(F2))) / 2;

        const S = S1 + S2;

        return S;
    }
}

console.log(`The area of the circle is: ${firstСircle.getAreaOfCircle().toFixed(1)}.`);
console.log(`The perimeter of the circle is: ${firstСircle.getPerimeterOfCircle().toFixed(1)}.`);

console.log(`The area of the circle is: ${secondCircle.getAreaOfCircle().toFixed(1)}.`);
console.log(`The perimeter of the circle is: ${secondCircle.getPerimeterOfCircle().toFixed(1)}.`);

console.log(getAreaOfIntersectionOfCircles(firstСircle, secondCircle).toFixed(1));