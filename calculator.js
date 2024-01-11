const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const mulitply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let firstNumber = '';
let secondNumber = '';
let operator = '';

const operate = (operator,firstNumber,secondNumber) => {
    switch(operator){
        case '+':
            return add(firstNumber,secondNumber);
            break;
        case '-':
            return subtract(firstNumber,secondNumber);
            break;
        case 'x':
            return mulitply(firstNumber,secondNumber);
            break;
        case '/':
            return divide(firstNumber,secondNumber);
            break;
        default:
            return 'error: invalid operator';
    }
}