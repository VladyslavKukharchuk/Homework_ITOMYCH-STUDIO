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

const firstСircle = new Circle(0, 0, 3);
const secondCircle = new Circle(5, 0, 4);

function getAreaOfIntersectionOfCircles(firstСircle, secondCircle) {
    let distance = Math.sqrt(Math.pow((firstСircle.x - secondCircle.x), 2) + Math.pow((firstСircle.y - secondCircle.y), 2));

    if (distance >= firstСircle.r + secondCircle.r) {
        return 0;
    } else if ((distance + secondCircle.r) <= firstСircle.r) {
        return secondCircle.getAreaOfCircle()
    } else if ((distance + firstСircle.r) <= secondCircle.r) {
        return firstСircle.getAreaOfCircle()
    } else {
        const F1 = 2 * Math.acos(((firstСircle.r * firstСircle.r) - (secondCircle.r * secondCircle.r) + (distance * distance)) / (2 * firstСircle.r * distance));
        const F2 = 2 * Math.acos(((secondCircle.r * secondCircle.r) - (firstСircle.r * firstСircle.r) + (distance * distance)) / (2 * secondCircle.r * distance));

        const S1 = ((firstСircle.r * firstСircle.r) * (F1 - Math.sin(F1))) / 2;
        const S2 = ((secondCircle.r * secondCircle.r) * (F2 - Math.sin(F2))) / 2;

        return S1 + S2;
    }
}

console.log(`The area of the circle is: ${firstСircle.getAreaOfCircle().toFixed(2)}.`);
console.log(`The perimeter of the circle is: ${firstСircle.getPerimeterOfCircle().toFixed(2)}.`);

console.log(`The area of the circle is: ${secondCircle.getAreaOfCircle().toFixed(2)}.`);
console.log(`The perimeter of the circle is: ${secondCircle.getPerimeterOfCircle().toFixed(2)}.`);

console.log(`Area of intersection of circles: ${getAreaOfIntersectionOfCircles(firstСircle, secondCircle).toFixed(2)}`);