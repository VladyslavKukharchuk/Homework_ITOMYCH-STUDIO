// Нехай задано дві прямокутні матриці A та B розмірності m × n та n × q відповідно:
// Знайти матрицю C.

let matrixA = [
    [1, 2],
    [3, 4]
];

let matrixB = [
    [1, 2],
    [4, 5]
];

let matrixC = [
    [1, 2],
    [4, 5],
    [1, 2]
];

let matrixD = [
    [1, 2, 5],
    [4, 5, 2]
];

function multiply(A, B) {
    let rowsA = A.length;
    let colsA = A[0].length;
    let rowsB = B.length;
    let colsB = B[0].length;
    if (colsA !== rowsB) {
        return false
    } else {
        let C = [];
        for (let q = 0; q < rowsA; q++) {
            C[q] = []
        };
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
    };
}

console.log(multiply(matrixA, matrixB));
console.log(multiply(matrixA, matrixB) ? `The result of matrix multiplication: ${multiply(matrixA, matrixB)}` : "The number of columns of the first matrix must be equal to the number of rows of the second.");

console.log(multiply(matrixC, matrixB));
console.log(multiply(matrixC, matrixB) ? `The result of matrix multiplication: ${multiply(matrixC, matrixB)}` : "The number of columns of the first matrix must be equal to the number of rows of the second.");

console.log(multiply(matrixB, matrixC));
console.log(multiply(matrixB, matrixC) ? `The result of matrix multiplication: ${multiply(matrixB, matrixC)}` : "The number of columns of the first matrix must be equal to the number of rows of the second.");

console.log(multiply(matrixA, matrixD));
console.log(multiply(matrixA, matrixD) ? `The result of matrix multiplication: ${multiply(matrixA, matrixD)}` : "The number of columns of the first matrix must be equal to the number of rows of the second.");

console.log(multiply(matrixD, matrixA));
console.log(multiply(matrixD, matrixA) ? `The result of matrix multiplication: ${multiply(matrixD, matrixA)}` : "The number of columns of the first matrix must be equal to the number of rows of the second.");