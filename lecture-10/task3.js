// Чи належить точка О трикутнику ABC? 
//Точка належить трикутнику, якщо вона лежить всередині або на його границі.
function isPointBelongsTriangle(O, A, B, C) {
    var a = (O.x - A.x) * (O.y - B.y) - (O.x - B.x) * (O.y - A.y), b = (O.x - B.x) * (O.y - C.y) - (O.x - C.x) * (O.y - B.y), c = (O.x - C.x) * (O.y - A.y) - (O.x - A.x) * (O.y - C.y);
    return ((a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0)) ? 1 : 0;
}
console.log(isPointBelongsTriangle({ x: 3, y: 5 }, { x: 2, y: 5 }, { x: 5, y: 10 }, { x: 10, y: 5 }));
// function isPointBelongsTriangle(triangle: object, point: object) {
//     let a = (point.x - triangle.A.x) * (point.y - triangle.B.y) - (point.x - triangle.B.x) * (point.y - triangle.A.y),
//         b = (point.x - triangle.B.x) * (point.y - triangle.C.y) - (point.x - xtriangle.C.x) * (point.y - triangle.B.y),
//         c = (point.x - triangle.C.x) * (point.y - triangle.A.y) - (point.x - triangle.A.x) * (point.y - triangle.C.y);
//     return ((a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0));
// }
// console.log(triangle1.A);
// console.log(triangle1.B);
// console.log(triangle1.C);
// console.log(point1);
