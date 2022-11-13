const {
    Square,
    Rectangle,
    Ellipse,
    Diamond,
    Circle
} = require('./Task1');


//Square
const square1 = new Square(0, 0, 100, 100);
const square2 = new Square(50, 50, 150, 150);
const square3 = new Square(-50, -50, 50, 50);
const square4 = new Square(-100, -100, 0, 0);

describe('Test for Square.', () => {
    test('Area of square.', () => {
        expect(square1.area).toBe(10000);
        expect(square2.area).toBe(10000);
        expect(square3.area).toBe(10000);
        expect(square4.area).toBe(10000);
    });

    test('Side length.', () => {
        expect(square1.sideLength).toBe(100);
        expect(square2.sideLength).toBe(100);
        expect(square3.sideLength).toBe(100);
        expect(square4.sideLength).toBe(100);
    });

    test('Diagonal of square.', () => {
        expect(square1.diagonal).toBe(141.4213562373095);
        expect(square2.diagonal).toBe(141.4213562373095);
        expect(square3.diagonal).toBe(141.4213562373095);
        expect(square4.diagonal).toBe(141.4213562373095);
    });

    test('Area of intersection of squares.', () => {
        expect(square2.getAreaOfIntersection(square1)).toBe(2500);
        expect(square3.getAreaOfIntersection(square4)).toBe(2500);
    });

    test('The square do not intersect.', () => {
        expect(square2.getAreaOfIntersection(square3)).toBe(false);
        expect(square2.getAreaOfIntersection(square4)).toBe(false);
    });
});


//Rectangle
const rectangle1 = new Rectangle(100, 0, 400, 200);
const rectangle2 = new Rectangle(200, 100, 500, 300);
const rectangle3 = new Rectangle(0, 50, 200, 150);
const rectangle4 = new Rectangle(0, 50, 500, 150);
const rectangle5 = new Rectangle(300, 50, 500, 150);
const rectangle6 = new Rectangle(150, 50, 350, 150);
const rectangle7 = new Rectangle(100, 300, 400, 500);

const rectangle8 = new Rectangle(-400, -200, -100, 0);
const rectangle9 = new Rectangle(-500, -300, -200, -100);
const rectangle10 = new Rectangle(-200, -150, 0, -50);
const rectangle11 = new Rectangle(-500, -150, 0, -50);
const rectangle12 = new Rectangle(-500, -150, -300, -50);
const rectangle13 = new Rectangle(-350, -150, -150, -50);
const rectangle14 = new Rectangle(-400, -500, -100, -300);

const rectangle15 = new Rectangle(-200, -200, 200, 100);
const rectangle16 = new Rectangle(-200, -200, 500, 100);
const rectangle17 = new Rectangle(200, -200, 300, 300);
const rectangle18 = new Rectangle(-500, -300, 300, 200);
const rectangle19 = new Rectangle(-200, -200, 200, 400);
const rectangle20 = new Rectangle(-400, -600, 400, -200);

describe('Test for Rectangle.', () => {
    describe('Додатні координати:', () => {
        test('Пересікаються 1 кутом.', () => {
            expect(rectangle2.getAreaOfIntersection(rectangle1)).toBe(20000);
        });

        test('Пересікаються двома кутами.', () => {
            expect(rectangle3.getAreaOfIntersection(rectangle1)).toBe(10000);
        });

        test('Проходить через середину.', () => {
            expect(rectangle4.getAreaOfIntersection(rectangle1)).toBe(30000);
        });

        test('Пересікаються двома кутами з іншого боку.', () => {
            expect(rectangle5.getAreaOfIntersection(rectangle1)).toBe(10000);
        });

        test('Повністю пересікаються.', () => {
            expect(rectangle6.getAreaOfIntersection(rectangle1)).toBe(20000);
        });

        test('Не пересікаються.', () => {
            expect(rectangle7.getAreaOfIntersection(rectangle1)).toBe(false);
        });
    });

    describe('Відємні координати:', () => {
        test('Пересікаються 1 кутом.', () => {
            expect(rectangle9.getAreaOfIntersection(rectangle8)).toBe(20000);
        });

        test('Пересікаються двома кутами.', () => {
            expect(rectangle10.getAreaOfIntersection(rectangle8)).toBe(10000);
        });

        test('Проходить через середину.', () => {
            expect(rectangle11.getAreaOfIntersection(rectangle8)).toBe(30000);
        });

        test('Пересікаються двома кутами з іншого боку.', () => {
            expect(rectangle12.getAreaOfIntersection(rectangle8)).toBe(10000);
        });

        test('Повністю пересікаються.', () => {
            expect(rectangle13.getAreaOfIntersection(rectangle8)).toBe(20000);
        });

        test('Не пересікаються.', () => {
            expect(rectangle14.getAreaOfIntersection(rectangle8)).toBe(false);
        });
    });

    describe('Відємні і додатні координати:', () => {
        test('Пересікаються 1 кутом.', () => {
            expect(rectangle15.getAreaOfIntersection(rectangle1)).toBe(10000);
        });

        test('Пересікаються двома кутами.', () => {
            expect(rectangle16.getAreaOfIntersection(rectangle1)).toBe(30000);
        });

        test('Проходить через середину.', () => {
            expect(rectangle17.getAreaOfIntersection(rectangle1)).toBe(20000);
        });

        test('Повністю пересікаються.', () => {
            expect(rectangle18.getAreaOfIntersection(rectangle15)).toBe(120000);
        });

        test('Не пересікаються.', () => {
            expect(rectangle19.getAreaOfIntersection(rectangle20)).toBe(false);
        });
    });
});


//Ellipse
const ellipse1 = new Ellipse(0, 0, 5, 10);

describe('Test for Ellipse.', () => {
    test('Area of Ellipse.', () => {
        expect(ellipse1.area).toBe(157.07963267948966);
    });
    test('Center of Ellipse.', () => {
        expect(ellipse1.center).toEqual({x: 0, y: 0});
    });
});


//Diamond
const diamond1 = new Diamond(0, 0, 5, 10);

describe('Test for Diamond.', () => {
    test('Area of diamond.', () => {
        expect(diamond1.area).toBe(25);
    });

    test('Center of diamond.', () => {
        expect(diamond1.center).toEqual({x: 0, y: 0});
    });
});


//Circle
const circle1 = new Circle(0, 0, 3);
const circle2 = new Circle(5, 0, 4);
const circle3 = new Circle(7, 0, 4);
const circle4 = new Circle(-10, 5, 5);
const circle5 = new Circle(5, -10, 20);

describe('Test for Circle.', () => {
    test('Area of intersection of Circles.', () => {
        expect(circle1.getAreaOfIntersection(circle2)).toBe(6.641674702707059);
        expect(circle4.getAreaOfIntersection(circle5)).toBe(25.43577300273953);
    });

    test('The square do not intersect.', () => {
        expect(circle1.getAreaOfIntersection(circle3)).toBe(false);
    });

    test('Center of Circle.', () => {
        expect(circle1.center).toEqual({x: 0, y: 0});
        expect(circle2.center).toEqual({x: 5, y: 0});
    });
});