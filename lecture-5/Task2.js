// Створити об’єкт Circle - x, y - координати центру кола, r - радіус.

// Написати методи для пошуку площі і периметр круга.

// Також фукцію пошуку площі перетину двох кіл.

const Circle = {
    x: 1,
    y: 2,
    r: 201,

    getAreaOfCircle(){
        let areaOfCircle = Math.PI * Math.pow(this.r, 2);
        return areaOfCircle;
    },

    getPerimeterOfCircle(){
        let perimeterOfCircle = 2 * Math.PI * this.r;
        return perimeterOfCircle;
    }
}

function getAreaOfIntersectionOfCircles(firstСircle, secondCircle){
    // intersectionChecking 

    
}

console.log(`The area of the circle is: ${Circle.getAreaOfCircle().toFixed(1)}.`);
console.log(`The perimeter of the circle is: ${Circle.getPerimeterOfCircle().toFixed(1)}.`);