// Чи належить точка кругу? Вважається, що точка належить кругу, якщо вона знаходиться у крузі, або на його границі (на колі).

// Вихідні дані
// true/false

// (зображення до цього завдання ти можешь побачиити в презентації до Лекції№5 на останній сторінці)

//приймає обект що описує куруг і точку належність якої має перевірити

const circle = {
    x: -5,
    y: -5,
    r: 5,
}

const point = {
    x: -5,
    y: -11
}

//function for a circle centered at (0,0)
// function isPointBelongsCircle(circle, point){
//     let height = Math.sqrt(point.x * point.x + point.y * point.y);
//     return height <= circle.r;
// }

function isPointBelongsCircle(circle, point) {
    return Math.pow((point.x - circle.x), 2) + Math.pow((point.y - circle.y), 2) <= Math.pow(circle.r, 2);
}

console.log(isPointBelongsCircle(circle, point))