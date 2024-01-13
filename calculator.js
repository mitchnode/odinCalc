const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const mulitply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let firstNumber = '';
let secondNumber = '';
let operator = '';

// For testing only
const first = document.querySelector('#first');
const op = document.querySelector('#op');
const second = document.querySelector('#second');

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

const generateEventListeners = () => {
    const numbers = document.querySelector('.numbers');
    const numButtons = numbers.querySelectorAll('button');
    numButtons.forEach(button => {
        button.addEventListener('click',(event) => {
            if (event.currentTarget.textContent === '.'){
                if ((!firstNumber.includes('.') && operator === '') || (operator !== '' && !secondNumber.includes('.'))){
                    writeNumInDisplay(event.currentTarget.textContent);
                }
            } else {
                writeNumInDisplay(event.currentTarget.textContent);
            }
        }, false);
    });
    
    const clear = document.querySelector('#C');
    clear.addEventListener('click', () => {
        const display = document.querySelector('#display');
        display.value = 0;
        firstNumber = '';
        secondNumber = '';
        operator = '';
        updateTestValues();
    })

    const backspace = document.querySelector('#backspace');
    backspace.addEventListener('click', () => {
        const display = document.querySelector('#display');
        let value = display.value
        display.value = value.substring(0, value.length - 1);
        updateTestValues();
    })

    const operatorsContainer = document.querySelector('.operators');
    const operatorButtons = operatorsContainer.querySelectorAll('button');
    operatorButtons.forEach(button => {
        button.addEventListener('click', (event) =>{
            if (event.currentTarget.textContent == '='){
                equals();
            } else {
                writeOperatorInDisplay(event.currentTarget.textContent);
            }
        }, false);
    })

}

const writeOperatorInDisplay = (input) => {
    const display = document.querySelector('#display');
    if (operator === '' && firstNumber !== 0) {
        firstNumber = String(display.value).trimEnd();
    } else {
        equals();
    }
    operator = input;
    display.value = firstNumber + ' ' + operator;
    updateTestValues();
}

const writeNumInDisplay = (input) => {
    const display = document.querySelector('#display');
    if(operator === ''){
        if (firstNumber == 0) {
            firstNumber = input;
        } else {
            firstNumber = firstNumber + input;
        }
    } else {
        if (secondNumber == '') {
            secondNumber = input;
        } else {
            secondNumber = secondNumber + input;
        }
    }
    display.value = firstNumber + ' ' + operator + ' ' + secondNumber;
    updateTestValues();
}

const updateTestValues = () => {
    first.textContent = firstNumber;
    second.textContent = secondNumber;
    op.textContent = operator;
}

const equals = () => {
    if (firstNumber !== '' && operator !== '' && secondNumber !== ''){
        const display = document.querySelector('#display');
        if (operator === '/' && secondNumber === '0'){
            display.value = 'What? Are you trying to kill me?';
            firstNumber = 0;
        } else {
            display.value = +(operate(operator,Number(firstNumber),Number(secondNumber)).toFixed(20));
            firstNumber = display.value;  
        }
        secondNumber = '';
        operator = '';
        updateTestValues();
        
    }
    
}

generateEventListeners();