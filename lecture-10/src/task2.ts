// Вводиться у символьній формі два многочлени від x з цілими коефіцієнтами. Вивести їх добуток у порядку зменшення степенів - також у символьній формі.
// Степінь заданих многочленів не більше 10, коефіцієнти заданих многочленів по модулю не білльші 104.

// Вхідні дані
// Два стрінга - многочлени: x+1 і x-1

// Вихідні дані
// Многочлен: x^2-1


function distributor(x : string, operator : string){
    if (isNaN(+x)) {
        if (x.includes("^")) {
            let x1 = x.split("^", 2);
            return [operator, 1, x1[0], parseInt(x1[1])];
        } else {
            return [operator, 1, x[0], 1];
        }
    } else {
        if(operator === "-"){
            return -x;
        } else {
            return +x;
        } 
    }
}

function parse(string : string, operator : string, operatorForX : string, operatorForY : string) {

    let result: any = [];

    let arr = string.split(operator, 2);

    // console.log(operator);
    // console.log(operatorForX+operatorForY);
    // console.log(string);
    // console.log(arr[0]);
    // console.log(arr[1]);

    result.push(distributor(arr[0], operatorForX));

    result.push(distributor(arr[1], operatorForY));

    return result;
}

function divide(string: string) {

    if (string[0] === "-") {

        let newString = string.slice(1, string.length + 1);

        if (newString.includes("-")) {

            return parse(newString, "-", "-", "-");

        } else {

            return parse(newString, "+", "-", "+");

        };

    } else {

        if (string.includes("-")) {

            return parse(string, "-", "+", "-");

        } else {

            return parse(string, "+", "+", "+");

        }
    }
}


function multiplyPolynomials(polynomial1: string, polynomial2: string): string {

    // console.log(polynomial1);
    let polynomialArr1 = divide(polynomial1);
    // console.log(polynomialArr1);

    // console.log(polynomial2);
    let polynomialArr2 = divide(polynomial2);
    // console.log(polynomialArr2);

    let a = polynomialArr1[0],
        b = polynomialArr1[1],
        c = polynomialArr2[0],
        d = polynomialArr2[1];

    // console.log(`a:`);
    // console.log(a);
    // console.log(`b:`);
    // console.log(b);
    // console.log(`c:`);
    // console.log(c);
    // console.log(`d:`);
    // console.log(d);

    function multiply(x: number | [string, number, string, number], y: number | [string, number, string, number]) {
        if (Array.isArray(x) && (typeof (y) === 'number')) {
            if ((x[0] === "-") && (y < 0)) {
                return ["+", x[1] * Math.abs(y), x[2], x[3]];
            } else if ((x[0] === "+") && (y < 0)) {
                return ["-", x[1] * Math.abs(y), x[2], x[3]];
            } else if ((x[0] === "-") && (y > 0)) {
                return ["-", x[1] * y, x[2], x[3]];
            } else if ((x[0] === "+") && (y > 0)) {
                return ["+", x[1] * y, x[2], x[3]];
            }
        } else if ((typeof (x) === 'number') && Array.isArray(y)) {
            if ((x < 0) && (y[0] === "-")) {
                return ["+", y[1] * Math.abs(x), y[2], y[3]];
            } else if ((x > 0) && (y[0] === "-")) {
                return ["-", y[1] * x, y[2], y[3]];
            } else if ((x < 0) && (y[0] === "+")) {
                return ["-", y[1] * Math.abs(x), y[2], y[3]];
            } else if ((x > 0) && (y[0] === "+")) {
                return ["+", y[1] * x, y[2], y[3]];
            }
        } else if ((typeof (x) === 'number') && (typeof (y) === 'number')) {
            return x * y;
        } else if (Array.isArray(x) && Array.isArray(y)) {
            if ((x[0] === "-") && (y[0] === "-")) {
                return ["+", x[1] * y[1], x[2], x[3] + y[3]];
            } else if ((x[0] === "-") && (y[0] === "+")) {
                return ["-", x[1] * y[1], x[2], x[3] + y[3]];
            } else if ((x[0] === "+") && (y[0] === "-")) {
                return ["-", x[1] * y[1], x[2], x[3] + y[3]];
            } else if ((x[0] === "+") && (y[0] === "+")) {
                return ["+", x[1] * y[1], x[2], x[3] + y[3]];
            }
        }
    }

    // console.log(multiply(a, c));
    // console.log(multiply(a, d));
    // console.log(multiply(b, c));
    // console.log(multiply(b, d));

    function format(x: any): string {
        if (isNaN(+x)) {
            if ((x[1] !== 1) && (x[3] !== 1)) {
                return `${x[0]}${x[1]}${x[2]}^${x[3]}`
            } else if ((x[1] === 1) && (x[3] !== 1)) {
                return `${x[0]}${x[2]}^${x[3]}`
            } else if ((x[1] !== 1) && (x[3] === 1)) {
                return `${x[0]}${x[1]}${x[2]}`
            } else if ((x[1] === 1) && (x[3] === 1)) {
                return `${x[0]}${x[2]}`
            }
        }
        return x.toString();
    }

    // console.log(format(multiply(a, c)));
    // console.log(format(multiply(a, d)));
    // console.log(format(multiply(b, c)));
    // console.log(format(multiply(b, d)));

    // return `готово`

    // let calculation = [multiply(a, c), multiply(a, d), multiply(b, c), multiply(b, d)];
    // console.log(calculation)

    // function sunOfNumbers(){
    //     let sum : number;
    //     calculation.forEach((index) => {
    //         if
    //     })
    // }
    //метод буде перебирати знаачення і якщо це число то сумувати в суму і вирізати з масива а якщо щось інше то повертати в масив. В кінці суму додати як елемент в масив.

    //перебрати масив і перевіряти чи є елементи з однаковми x[3] якщо так то вирізати їх і повернути новий елемент. Але перед цим провести поревірку знаків і додати або відняти запотреби. Повернути: [знак який буде в результата дії (x[1] + або - x[1])] [x[1] + або - x[1]] x[2] x[3]



    let result = `${format(multiply(a, c))}${format(multiply(a, d))}${format(multiply(b, c))}${format(multiply(b, d))}`;

    if (result[0] === '+') {
        result = result.slice(1, result.length + 1);
    }

    return result;
}

console.log(multiplyPolynomials("x^3+1", "x^2-2"));
console.log(multiplyPolynomials("x+1", "x-1"));