// Нехай задано дві прямокутні матриці A та B розмірності m × n та n × q відповідно:
// Знайти матрицю C.

let A = [
    [1, 2],
    [3, 4]
];

let B = [
    [1, 2],
    [4, 5]
];

let C = [
    [1, 2],
    [4, 5],
    [1, 2]
];

let D = [
    [1, 2, 5],
    [4, 5, 2]
];

function multiplyMatrices(A, B) {
    let rowsA = A.length;
    let colsA = A[0].length;
    let rowsB = B.length;
    let colsB = B[0].length;
    let C = [];
    if (colsA != rowsB) return false;
    for (let q = 0; q < rowsA; q++) C[q] = [];
    for (let m = 0; m < colsB; m++) {
        for (let i = 0; i < rowsA; i++) {
            let c = 0;
            for (let n = 0; n < rowsB; n++) {
                c += A[i][n] * B[n][m]
            };
            C[i][m] = c;
        }
    }
    return C;
}

console.log(multiplyMatrices(A, B));
console.log(multiplyMatrices(A, B) ? `The result of matrix multiplication: ${multiplyMatrices(A, B)}` : "The number of columns of the first matrix must be equal to the number of rows of the second.");

console.log(multiplyMatrices(C, B));
console.log(multiplyMatrices(C, B) ? `The result of matrix multiplication: ${multiplyMatrices(C, B)}` : "The number of columns of the first matrix must be equal to the number of rows of the second.");

console.log(multiplyMatrices(B, C));
console.log(multiplyMatrices(B, C) ? `The result of matrix multiplication: ${multiplyMatrices(B, C)}` : "The number of columns of the first matrix must be equal to the number of rows of the second.");

console.log(multiplyMatrices(A, D));
console.log(multiplyMatrices(A, D) ? `The result of matrix multiplication: ${multiplyMatrices(A, D)}` : "The number of columns of the first matrix must be equal to the number of rows of the second.");

console.log(multiplyMatrices(D, A));
console.log(multiplyMatrices(D, A) ? `The result of matrix multiplication: ${multiplyMatrices(D, A)}` : "The number of columns of the first matrix must be equal to the number of rows of the second.");