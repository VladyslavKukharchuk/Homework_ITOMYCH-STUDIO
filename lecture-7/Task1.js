// Home task 1
// Показати на практиці, що javascript - OOP (Інкапсуляція, Поліморфізм, Наслідування):
// ● 5 різних класів (Геометричні фігури)
// ● 5 унікальних методів

// Home task 2
// Для заданих фігур написати метод який обраховує площу перетину заданих фігур.
// Приклад: Площа перетину 2 квадратів і так далі.

class Quadrangle {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
        this.p1 = {
            x: x1,
            y: y1
        };
        this.p2 = {
            x: x2,
            y: y2
        };
        this.p3 = {
            x: x3,
            y: y3
        };
        this.p4 = {
            x: x4,
            y: y4
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
        };
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


class Rectangle extends Quadrangle {
    constructor(x1, y1, x2, y2) {
        super(x1, y1, x2, y2);
    }
}


//example of encapsulation
class Ellipse {
    #x;
    #y;
    constructor(x, y, a, b) {
        this.#x = x;
        this.#y = y;
        this.a = a;
        this.b = b;
    };

    get area() {
        return Math.PI * this.a * this.b;
    };

    get center() {
        return {
            x: this.#x,
            y: this.#y
        };
    };
}


class Diamond {
    constructor(x, y, d1, d2) {
        this.x = x;
        this.y = y;
        this.d1 = d1;
        this.d2 = d2;
    };

    get area() {
        return 1 / 2 * (this.d1 * this.d2);
    }
}


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


//example of encapsulation
// console.log(ellipse1.#x , ellipse1.#y); //Private field must be declared in an enclosing class


module.exports = {Square, Rectangle, Ellipse, Diamond, Circle};