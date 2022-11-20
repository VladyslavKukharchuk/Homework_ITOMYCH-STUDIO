export function calculator(expression) {
    let expressionArr = expression.split(" "),
        num1 = parseFloat(expressionArr[0]),
        num2 = parseFloat(expressionArr[2]),
        operator = expressionArr[1]

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '**':
            return num1 ** num2;
        case '/':
            return num1 / num2;
        default:
            return `Sorry, failed to recognize a mathematical operator: "${operator}".`;
    }
}