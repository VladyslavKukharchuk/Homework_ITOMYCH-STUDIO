// Home task 1
// Показати на практиці, що javascript - OOP (Інкапсуляція, Поліморфізм, Наслідування):
// ● 5 різних класів (Геометричні фігури)
// ● 5 унікальних методів

// class Square {
//     constructor(x1, y1, x2, y2) {
//         this.p1.x = x1;
//         this.p1.y = y1;
//         this.p2.x = x2;
//         this.p2.y = y2;
//     }
// }

// const firstSquare = new Square('Jhon', 'See');

class Rectangle {
    constructor(x1, y1, x2, y2) {
        // this.p1.x = x1;
        // this.p1.y = y1;
        // this.p2.x = x2;
        // this.p2.y = y2;
        this.p1 = {
            x: x1,
            y: y1
        };
        this.p2 = {
            x: x2,
            y: y2
        };
    }

    getAreaOfIntersectionOfRectangles(rectangle) {
        let firstRectangle = this;
        let secondRectangle = rectangle;

        // console.log(firstRectangle);
        // console.log(secondRectangle);
        // console.log(firstRectangle.p1.x);
        // console.log(firstRectangle.p1.y);
        // console.log(firstRectangle.p2.x);
        // console.log(firstRectangle.p2.y);

        let left = Math.max(firstRectangle.p1.x, secondRectangle.p1.x);
        console.log(`left: ${left}`);
        let top = Math.min(firstRectangle.p2.y, secondRectangle.p2.y);
        console.log(`top: ${top}`);
        let right = Math.min(firstRectangle.p2.x, secondRectangle.p2.x);
        console.log(`right: ${right}`);
        let bottom = Math.max(firstRectangle.p1.y, secondRectangle.p1.y);
        console.log(`bottom: ${bottom}`);
        let witdth = right - left;
        console.log(`witdth: ${witdth}`);
        let height = top - bottom;
        console.log(`height: ${height}`);
        if ((witdth <= 0) || (height <= 0)) {
            return false;
        } else {
            console.log(`return: ${witdth * height}`);
            return witdth * height;
        }
    }
}

// const firstRectangle = new Rectangle(0, 0, 2, 3);
// const secondRectangle = new Rectangle(1, 1, 3, 4);

const firstRectangle = new Rectangle(100, 0, 400, 200);
const secondRectangle = new Rectangle(200, 100, 500, 300);

const thirdRectangle = new Rectangle(0, 50, 200, 150);

const fourthRectangle = new Rectangle(0, 50, 500, 150);

const fifthRectangle = new Rectangle(300, 50, 500, 150);

const sixthRectangle = new Rectangle(150, 50, 350, 150);

const seventhRectangle = new Rectangle(100, 300, 400, 500);

// const eightRectangle = new Rectangle(, , , );

// const ninthRectangle = new Rectangle(, , , );
// const tenthRectangle = new Rectangle(, , , );

//Пересікаються 1 кутом
console.log(secondRectangle.getAreaOfIntersectionOfRectangles(firstRectangle) ? `Area of intersection of rectangles: ${secondRectangle.getAreaOfIntersectionOfRectangles(firstRectangle).toFixed(2)}` : `The rectangles do not intersect.`);

//Пересікаються двома кутами
console.log(thirdRectangle.getAreaOfIntersectionOfRectangles(firstRectangle) ? `Area of intersection of rectangles: ${thirdRectangle.getAreaOfIntersectionOfRectangles(firstRectangle).toFixed(2)}` : `The rectangles do not intersect.`);

//Проходить через середину
console.log(fourthRectangle.getAreaOfIntersectionOfRectangles(firstRectangle) ? `Area of intersection of rectangles: ${fourthRectangle.getAreaOfIntersectionOfRectangles(firstRectangle).toFixed(2)}` : `The rectangles do not intersect.`);

//Пересікаються двома кутами інший бік
console.log(fifthRectangle.getAreaOfIntersectionOfRectangles(firstRectangle) ? `Area of intersection of rectangles: ${fifthRectangle.getAreaOfIntersectionOfRectangles(firstRectangle).toFixed(2)}` : `The rectangles do not intersect.`);

//Повністю пересікаються
console.log(sixthRectangle.getAreaOfIntersectionOfRectangles(firstRectangle) ? `Area of intersection of rectangles: ${sixthRectangle.getAreaOfIntersectionOfRectangles(firstRectangle).toFixed(2)}` : `The rectangles do not intersect.`);

//Не пересікаються
console.log(seventhRectangle.getAreaOfIntersectionOfRectangles(firstRectangle) ? `Area of intersection of rectangles: ${seventhRectangle.getAreaOfIntersectionOfRectangles(firstRectangle).toFixed(2)}` : `The rectangles do not intersect.`);




// class User {
//     constructor(firstName, secondName) {
//         this.firstName = firstName,
//         this.secondName = secondName
//     }

//     get fullName() {
//         return `${this.firstName}, ${this.secondName}`
//     }
// }

// const user1 = new User('Jhon', 'See');

class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    getArea() {
        let areaOfCircle = Math.PI * Math.pow(this.r, 2);
        return areaOfCircle;
    };

    getAreaOfIntersectionOfCircles(circle) {
        let firstСircle = this;
        let secondCircle = circle;

        let distance = Math.sqrt(Math.pow((firstСircle.x - secondCircle.x), 2) + Math.pow((firstСircle.y - secondCircle.y), 2));

        if (distance >= firstСircle.r + secondCircle.r) {
            return 0;
        } else if ((distance + secondCircle.r) <= firstСircle.r) {
            return secondCircle.getArea()
        } else if ((distance + firstСircle.r) <= secondCircle.r) {
            return firstСircle.getArea()
        } else {
            const F1 = 2 * Math.acos(((firstСircle.r * firstСircle.r) - (secondCircle.r * secondCircle.r) + (distance * distance)) / (2 * firstСircle.r * distance));
            const F2 = 2 * Math.acos(((secondCircle.r * secondCircle.r) - (firstСircle.r * firstСircle.r) + (distance * distance)) / (2 * secondCircle.r * distance));

            const S1 = ((firstСircle.r * firstСircle.r) * (F1 - Math.sin(F1))) / 2;
            const S2 = ((secondCircle.r * secondCircle.r) * (F2 - Math.sin(F2))) / 2;

            return S1 + S2;
        }
    }
}

const firstСircle = new Circle(0, 0, 3);
const secondCircle = new Circle(5, 0, 4);

console.log(`Area of intersection of circles: ${firstСircle.getAreaOfIntersectionOfCircles(secondCircle).toFixed(2)}`);

// Home task 2
// Для заданих фігур написати метод який обраховує площу перетину заданих фігур.
// Приклад: Площа перетину 2 квадратів і так далі.