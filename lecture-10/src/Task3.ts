// Чи належить точка О трикутнику ABC? 
//Точка належить трикутнику, якщо вона лежить всередині або на його границі.

// Вхідні дані
// Містить координати точок O, A, B, C. Числові значення за модулем не перевищують 100.

// Вихідні дані
// Вивести 1, якщо точка O належить трикутнику ABC і 0 у протилежному випадку.

interface coordinates {
    x: number,
    y: number
}

function isPointBelongsTriangle(O: coordinates, A: coordinates, B: coordinates, C : coordinates) {
    let a = (O.x - A.x) * (O.y - B.y) - (O.x - B.x) * (O.y - A.y),
        b = (O.x - B.x) * (O.y - C.y) - (O.x - C.x) * (O.y - B.y),
        c = (O.x - C.x) * (O.y - A.y) - (O.x - A.x) * (O.y - C.y);
    return ((a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0)) ? 1 : 0;
}

console.log(isPointBelongsTriangle({x: 3, y: 5},{x: 2, y: 5},{x: 5, y: 10},{x: 10, y: 5}))
console.log(isPointBelongsTriangle({x: 4, y: 10},{x: 2, y: 5},{x: 5, y: 10},{x: 10, y: 5}))
console.log(isPointBelongsTriangle({x: 6, y: 10},{x: 2, y: 5},{x: 5, y: 10},{x: 10, y: 5}))
console.log(isPointBelongsTriangle({x: 10, y: 5},{x: 2, y: 5},{x: 5, y: 10},{x: 10, y: 5}))