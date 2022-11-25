// Вводиться у символьній формі два многочлени від x з цілими коефіцієнтами. Вивести їх добуток у порядку зменшення степенів - також у символьній формі.
// Степінь заданих многочленів не більше 10, коефіцієнти заданих многочленів по модулю не білльші 104.

// Вхідні дані
// Два стрінга - многочлени: x+1 і x-1

// Вихідні дані
// Многочлен: x^2-1

// function multiplyPolynomials(p1: string, p2: string): string {

//     function divide(string : string){
//         if(string.includes("-")){
//             let p1Arr = string.split("-", 2);
//             return 
//         }
//     }




//     let p1Arr = p1.split(/[+,-]/, 2);
//     let p2Arr = p2.split(/[+,-]/, 2);

//     // console.log(p1Arr);
//     // console.log(p2Arr);

//     // console.log(+p1Arr[0]);
//     // console.log(+p1Arr[1]);

//     function parse(x: string) : number | [number, string , number] {
//         if (isNaN(+x)) {
//             if (x.includes("^")) {
//                 let x1 = x.split("^", 2);
//                 return [1, x1[0], parseInt(x1[1])];
//             }
//             return [1, x[0], 1];
//         } else {
//             return +x;
//         }
//     }

//     // console.log(`p1Arr[0]`)
//     // console.log(parse(p1Arr[0]))
//     // console.log(`p1Arr[1]`)
//     // console.log(parse(p1Arr[1]))

//     // let x1Arr = [1, p1Arr[0], 1];
//     // let x2Arr = [1, p2Arr[0], 1];

//     let a = parse(p1Arr[0]),
//         b = parse(p1Arr[1]),
//         c = parse(p2Arr[0]),
//         d = parse(p2Arr[1]);

//     function multiply(x: number | [number, string, number], y:  number | [number, string, number]) {
//         if (Array.isArray(x) && (typeof (y) === 'number')) {
//             return [x[0] * y, x[1], x[2]];
//         } else if ((typeof (x) === 'number') && Array.isArray(y)) {
//             return [y[0] * x, y[1], y[2]];
//         } else if ((typeof (x) === 'number') && (typeof (y) === 'number')) {
//             return x * y;
//         } else if (Array.isArray(x) && Array.isArray(y)) {
//             return [x[0] * y[0], x[1], x[2] + y[2]];
//         }
//     }

//     // console.log(multiply(a, c));
//     // console.log(multiply(a, d));
//     // console.log(multiply(b, c));
//     // console.log(multiply(b, d));

//     function format(x: any): string{
//         if(isNaN(+x)){
//             if((x[0] !== 1) &&  (x[2] !== 1)){
//                 return `${x[0]}${x[1]}^${x[2]}`
//             }else if((x[0] === 1) &&  (x[2] !== 1)){
//                 return `${x[1]}^${x[2]}`
//             }else if((x[0] !== 1) &&  (x[2] === 1)){
//                 return `${x[0]}${x[1]}`
//             }else if((x[0] === 1) &&  (x[2] === 1)){
//                 return `${x[1]}`
//             }
//         }
//         return x.toString();
//     }

//     // console.log(format(multiply(a, c)));
//     // console.log(format(multiply(a, d)));
//     // console.log(format(multiply(b, c)));
//     // console.log(format(multiply(b, d)));
//     // let result = a * c + a * d + b * c + b * d;

//     return `${format(multiply(a, c))}+${format(multiply(a, d))}+${format(multiply(b, c))}+${format(multiply(b, d))}`;
// }


// console.log(multiplyPolynomials("x^3+1", "x^2+1"));
// console.log(multiplyPolynomials("x+1", "x-1"));



// function parse(x: string) : number | [number, string , number] {
//     if (isNaN(+x)) {
//         if (x.includes("^")) {
//             let x1 = x.split("^", 2);
//             return [1, x1[0], parseInt(x1[1])];
//         }
//         return [1, x[0], 1];
//     } else {
//         return +x;
//     }
// }


function divide(string: string) {

    let result: any = [];

    if (string[0] === "-") {
        let newString = string.slice(1, string.length + 1);

        console.log(`-`);
        console.log(newString);

        if (newString.includes("-")) {
            let arr = newString.split("-", 2);

            let x = arr[0];
            let y = arr[1];

            console.log(`--`);
            console.log(arr);
            console.log(x);
            console.log(y);

            if (isNaN(+x)) {
                if (x.includes("^")) {
                    let x1 = x.split("^", 2);
                    return ["-", 1, x1[0], parseInt(x1[1])];
                }
                result.push(["-", 1, x[0], 1]);
            } else {
                result.push(-x);
            }

            if (isNaN(+y)) {
                if (y.includes("^")) {
                    let y1 = y.split("^", 2);
                    return ["-", 1, y1[0], parseInt(y1[1])];
                }
                result.push(["-", 1, y[0], 1]);
            } else {
                result.push(-y);
            }

            return result;

        } else {
            let arr = newString.split("+", 2);

            let x = arr[0];
            let y = arr[1];

            console.log(`-+`);
            console.log(arr);
            console.log(x);
            console.log(y);

            if (isNaN(+x)) {
                if (x.includes("^")) {
                    let x1 = x.split("^", 2);
                    return ["-", 1, x1[0], parseInt(x1[1])];
                }
                result.push(["-", 1, x[0], 1]);
            } else {
                result.push(-x);
            }

            if (isNaN(+y)) {
                if (y.includes("^")) {
                    let y1 = y.split("^", 2);
                    return ["+", 1, y1[0], parseInt(y1[1])];
                }
                result.push(["+", 1, y[0], 1]);
            } else {
                result.push(+y);
            }

            return result;
        };
    } else {
        console.log(`+`);
        if (string.includes("-")) {
            let arr = string.split("-", 2);

            let x = arr[0];
            let y = arr[1];
            
            console.log(`+-`);
            console.log(arr);
            console.log(x);
            console.log(y);

            if (isNaN(+x)) {
                if (x.includes("^")) {
                    let x1 = x.split("^", 2);
                    return ["+", 1, x1[0], parseInt(x1[1])];
                }
                result.push(["+", 1, x[0], 1]);
            } else {
                result.push(+x);
            }

            if (isNaN(+y)) {
                if (y.includes("^")) {
                    let y1 = y.split("^", 2);
                    return ["-", 1, y1[0], parseInt(y1[1])];
                }
                result.push(["-", 1, y[0], 1]);
            } else {
                result.push(-y);
            }

            return result;
        } else {
            let arr = string.split("+", 2);

            let x = arr[0];
            let y = arr[1];
            
            console.log(`++`);
            console.log(arr);
            console.log(x);
            console.log(y);

            if (isNaN(+x)) {
                if (x.includes("^")) {
                    let x1 = x.split("^", 2);
                    return ["+", 1, x1[0], parseInt(x1[1])];
                }
                result.push(["+", 1, x[0], 1]);
            } else {
                result.push(+x);
            }

            if (isNaN(+y)) {
                if (y.includes("^")) {
                    let y1 = y.split("^", 2);
                    return ["+", 1, y1[0], parseInt(y1[1])];
                }
                result.push(["+", 1, y[0], 1]);
            } else {
                result.push(+y);
            }

            return result;
        }
    }
}

let string1 = 'x+1';
let string2 = 'x-1';
let string3 = '-x+1';
let string4 = '-x-1';


console.log(divide(string1));
console.log(divide(string2));
console.log(divide(string3));
console.log(divide(string4));