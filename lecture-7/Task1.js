// Home task 1
// Показати на практиці, що javascript - OOP (Інкапсуляція, Поліморфізм, Наслідування):
// ● 5 різних класів (Геометричні фігури)
// ● 5 унікальних методів

class Quadrangle {
    constructor(x1, y1, x2, y2) {
        this.p1 = {
            x: x1,
            y: y1
        };
        this.p2 = {
            x: x2,
            y: y2
        };
    }

    getAreaOfIntersection(quadrangle) {
        let A = this;
        let B = quadrangle;

        let left = Math.max(A.p1.x, B.p1.x);
        let top = Math.min(A.p2.y, B.p2.y);
        let right = Math.min(A.p2.x, B.p2.x);
        let bottom = Math.max(A.p1.y, B.p1.y);
        let witdth = right - left;
        let height = top - bottom;
        if ((witdth <= 0) || (height <= 0)) {
            return false;
        } else {
            return witdth * height;
        }
    }
}


//example of inheritance
class Square extends Quadrangle {

    constructor(x1, y1, x2, y2) {
        super(x1, y1, x2, y2);
    }

    get diagonal() {
        return Math.sqrt(Math.pow((this.p1.x - this.p2.x), 2) + Math.pow((this.p1.y - this.p2.y), 2));
    }

    get sideLength() {
        return this.diagonal / Math.sqrt(2);
    }

    get area() {
        return Math.pow((this.diagonal), 2) / 2;
    }
}

//Додатні координати
const firstSquare = new Square(0, 0, 100, 100);
//Пересікаються 1 кутом
const secondSquare = new Square(50, 50, 150, 150);

console.log(secondSquare.getAreaOfIntersection(firstSquare) ? `Area of intersection of square: ${secondSquare.getAreaOfIntersection(firstSquare)}` : `The square do not intersect.`);
console.log(firstSquare.diagonal)
console.log(firstSquare.sideLength)
console.log(firstSquare.area)



class Rectangle extends Quadrangle {
    constructor(x1, y1, x2, y2) {
        super(x1, y1, x2, y2);
    }
}

//Додатні координати
const rectangle1 = new Rectangle(100, 0, 400, 200);
//Пересікаються 1 кутом
const rectangle2 = new Rectangle(200, 100, 500, 300);
//Пересікаються двома кутами
const rectangle3 = new Rectangle(0, 50, 200, 150);
//Проходить через середину
const rectangle4 = new Rectangle(0, 50, 500, 150);
//Пересікаються двома кутами інший бік
const rectangle5 = new Rectangle(300, 50, 500, 150);
//Повністю пересікаються
const rectangle6 = new Rectangle(150, 50, 350, 150);
//Не пересікаються
const rectangle7 = new Rectangle(100, 300, 400, 500);

//Відємні координатами
const rectangle8 = new Rectangle(-400, -200, -100, 0);
//Пересікаються 1 кутом
const rectangle9 = new Rectangle(-500, -300, -200, -100);
//Пересікаються двома кутами
const rectangle10 = new Rectangle(-200, -150, 0, -50);
//Проходить через середину
const rectangle11 = new Rectangle(-500, -150, 0, -50);
//Пересікаються двома кутами інший бік
const rectangle12 = new Rectangle(-500, -150, -300, -50);
//Повністю пересікаються
const rectangle13 = new Rectangle(-350, -150, -150, -50);
//Не пересікаються
const rectangle14 = new Rectangle(-400, -500, -100, -300);

//Пересікаються 1 кутом
console.log(rectangle2.getAreaOfIntersection(rectangle1) ? `Area of intersection of rectangles: ${rectangle2.getAreaOfIntersection(rectangle1)}` : `The rectangles do not intersect.`);
//Пересікаються двома кутами
console.log(rectangle3.getAreaOfIntersection(rectangle1) ? `Area of intersection of rectangles: ${rectangle3.getAreaOfIntersection(rectangle1)}` : `The rectangles do not intersect.`);
//Проходить через середину
console.log(rectangle4.getAreaOfIntersection(rectangle1) ? `Area of intersection of rectangles: ${rectangle4.getAreaOfIntersection(rectangle1)}` : `The rectangles do not intersect.`);
//Пересікаються двома кутами інший бік
console.log(rectangle5.getAreaOfIntersection(rectangle1) ? `Area of intersection of rectangles: ${rectangle5.getAreaOfIntersection(rectangle1)}` : `The rectangles do not intersect.`);
//Повністю пересікаються
console.log(rectangle6.getAreaOfIntersection(rectangle1) ? `Area of intersection of rectangles: ${rectangle6.getAreaOfIntersection(rectangle1)}` : `The rectangles do not intersect.`);
//Не пересікаються
console.log(rectangle7.getAreaOfIntersection(rectangle1) ? `Area of intersection of rectangles: ${rectangle7.getAreaOfIntersection(rectangle1)}` : `The rectangles do not intersect.`);

//Пересікаються 1 кутом
console.log(rectangle9.getAreaOfIntersection(rectangle8) ? `Area of intersection of rectangles: ${rectangle9.getAreaOfIntersection(rectangle8)}` : `The rectangles do not intersect.`);
//Пересікаються двома кутами
console.log(rectangle10.getAreaOfIntersection(rectangle8) ? `Area of intersection of rectangles: ${rectangle10.getAreaOfIntersection(rectangle8)}` : `The rectangles do not intersect.`);
//Проходить через середину
console.log(rectangle11.getAreaOfIntersection(rectangle8) ? `Area of intersection of rectangles: ${rectangle11.getAreaOfIntersection(rectangle8)}` : `The rectangles do not intersect.`);
//Пересікаються двома кутами інший бік
console.log(rectangle12.getAreaOfIntersection(rectangle8) ? `Area of intersection of rectangles: ${rectangle12.getAreaOfIntersection(rectangle8)}` : `The rectangles do not intersect.`);
//Повністю пересікаються
console.log(rectangle13.getAreaOfIntersection(rectangle8) ? `Area of intersection of rectangles: ${rectangle13.getAreaOfIntersection(rectangle8)}` : `The rectangles do not intersect.`);
//Не пересікаються
console.log(rectangle14.getAreaOfIntersection(rectangle8) ? `Area of intersection of rectangles: ${rectangle14.getAreaOfIntersection(rectangle8)}` : `The rectangles do not intersect.`);


class Ellipse {
    #x
    #y
    constructor(x, y, a, b) {
        this.#x = x;
        this.#y = y;
        this.a = a;
        this.b = b;
    };

    get area() {
        return Math.PI * this.a * this.b;
    }

    get center() {
        return {
            x: this.#x,
            y: this.#y
        };
    }
}

const ellipse1 = new Ellipse(0, 0, 5, 10);

console.log(ellipse1.area);

console.log(ellipse1.center);


//example of encapsulation
// console.log(ellipse1.#x , ellipse1.#y); //Private field must be declared in an enclosing class

class Diamond {
    constructor(x, y, d1, d2) {
        this.x = x,
            this.y = y,
            this.d1 = d1,
            this.d2 = d2
    };

    get area() {
        return 1 / 2 * (this.d1 * this.d2);
    }
}

const diamond1 = new Diamond(0, 0, 5, 10);

console.log(diamond1.area);

class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    get Area() {
        return Math.PI * Math.pow(this.r, 2);
    };

    getAreaOfIntersection(circle) {
        let firstСircle = this;
        let secondCircle = circle;

        let distance = Math.sqrt(Math.pow((firstСircle.x - secondCircle.x), 2) + Math.pow((firstСircle.y - secondCircle.y), 2));

        if (distance >= firstСircle.r + secondCircle.r) {
            return 0;
        } else if ((distance + secondCircle.r) <= firstСircle.r) {
            return secondCircle.Area
        } else if ((distance + firstСircle.r) <= secondCircle.r) {
            return firstСircle.Area
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

console.log(`Area of intersection of circles: ${firstСircle.getAreaOfIntersection(secondCircle).toFixed(2)}`);

// Home task 2
// Для заданих фігур написати метод який обраховує площу перетину заданих фігур.
// Приклад: Площа перетину 2 квадратів і так далі.