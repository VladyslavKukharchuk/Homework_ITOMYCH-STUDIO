// Вводиться у символьній формі два многочлени від x з цілими коефіцієнтами. Вивести їх добуток у порядку зменшення степенів - також у символьній формі.
// Степінь заданих многочленів не більше 10, коефіцієнти заданих многочленів по модулю не білльші 104.

// Вхідні дані
// Два стрінга - многочлени: x+1 і x-1

// Вихідні дані
// Многочлен: x^2-1

function multiplyPolynomials(p1: string, p2: string): string {
    let p1Arr = p1.split(/[+,-]/, 2);
    let p2Arr = p2.split(/[+,-]/, 2);
    console.log(p1Arr);
    console.log(p2Arr);

    console.log(+p1Arr[0]);
    console.log(+p1Arr[1]);

    function parse(x: string) {
        if (isNaN(+x)) {
            if (x.includes("^")) {
                let x1 = x.split("^", 2);
                return [1, x1[0], parseInt(x1[1])];
            }
            return [1, x[0], 1];
        } else {
            return +x;
        }
    }

    console.log(`p1Arr[0]`)
    console.log(parse(p1Arr[0]))
    console.log(`p1Arr[1]`)
    console.log(parse(p1Arr[1]))

    let x1Arr = [1, p1Arr[0], 1];
    let x2Arr = [1, p2Arr[0], 1];

    if (p1Arr[0].includes("^")) {
        let x1 = p1Arr[0].split("^", 2);
        x1Arr = [1, x1[0], parseInt(x1[1])];
    }

    if (p2Arr[0].includes("^")) {
        let x2 = p2Arr[0].split("^", 2);
        x2Arr = [1, x2[0], parseInt(x2[1])];
    }

    let a = x1Arr,
        b = parseInt(p1Arr[1]),
        c = x2Arr,
        d = parseInt(p2Arr[1]);

    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`c: ${c}`);
    console.log(`d: ${d}`);

    function multiply(x: any, y: any) {
        if (Array.isArray(x) && (typeof (y) === 'number')) {
            console.log("Arr * number")
            return [x[0] * y, x[1], x[2]];
        } else if ((typeof (x) === 'number') && Array.isArray(y)) {
            console.log("number * Arr")
            return [y[0] * x, y[1], y[2]];
        } else if ((typeof (x) === 'number') && (typeof (y) === 'number')) {
            console.log("number * number")
            return x * y;
        } else if (Array.isArray(x) && Array.isArray(y)) {
            console.log("Arr * Arr")
            return [x[0] * y[0], x[1], x[2] + y[2]];
        }
    }

    console.log(multiply(a, c));
    console.log(multiply(a, d));
    console.log(multiply(b, c));
    console.log(multiply(b, d));

    // let result = a * c + a * d + b * c + b * d;

    return "1+x^2+x^3+x^5";
}


multiplyPolynomials("x^3+1", "x^2+1");