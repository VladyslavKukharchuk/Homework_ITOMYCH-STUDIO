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

describe('Test for Square.', () => {
    test('Area of square.', () => {
        expect(square1.area).toBe(10000);
    });

    test('Side length.', () => {
        expect(square1.sideLength).toBe(100);
    });

    test('Diagonal of square.', () => {
        expect(square1.diagonal).toBe(141.4213562373095);
    });

    test('Area of intersection of square.', () => {
        expect(square2.getAreaOfIntersection(square1)).toBe(2500);
    });

    test('The square do not intersect.', () => {
        expect(square2.getAreaOfIntersection(square3)).toBe(false);
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

        test('Проходить через середину.', () => {
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

        test('Проходить через середину.', () => {
            expect(rectangle12.getAreaOfIntersection(rectangle8)).toBe(10000);
        });

        test('Повністю пересікаються.', () => {
            expect(rectangle13.getAreaOfIntersection(rectangle8)).toBe(20000);
        });

        test('Не пересікаються.', () => {
            expect(rectangle14.getAreaOfIntersection(rectangle8)).toBe(false);
        });
    });
});


//Diamond
const diamond1 = new Diamond(0, 0, 5, 10);

describe('Test for Diamond.', () => {
    test('Area of diamond.', () => {
        expect(diamond1.area).toBe(25);
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


//Circle
const firstСircle = new Circle(0, 0, 3);
const secondCircle = new Circle(5, 0, 4);

describe('Test for Ellipse.', () => {
    test('Area of Ellipse.', () => {
        expect(firstСircle.getAreaOfIntersection(secondCircle)).toBe(6.641674702707059);
    });
});