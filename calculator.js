let calculator = (() => {
    const sum = (entries) => entries.reduce((acc, curr) => acc + curr);
    const subtract = (entries) => entries.reduce((acc, curr) => acc - curr);
    const multiply = (entries) => entries.reduce((acc, curr) => acc * curr);
    const divide = (entries) =>
        entries.reduce((acc, curr) => (curr !== 0 ? acc / curr : console.log('Cannot divide by zero!')));
    const operation = {
        '+': sum,
        '-': subtract,
        '*': multiply,
        '/': divide,
    };
    let entries = [];

    const enter = (data) => {
        entries = [...entries, data];
        return `${entries.join(', ')}`;
    };

    const equals = (operator) => {
        return entries.length === 0 ? 'There are no numbers in accumulator' : operation[operator](entries);
    };

    const reset = () => {
        entries = [];
    };

    return { enter, equals, reset };
})();

const entry = document.querySelector('input#entry');
const accumulator = document.querySelector('span#acc');
const operationResult = document.querySelector('span#result');

const enterButton = document.querySelector('button#enter');
const equalsButton = document.querySelector('button#equals');
const resetButton = document.querySelector('button#reset');

enterButton.onclick = function () {
    accumulator.innerText = entry.value === '' ? 'Invalid entry!' : calculator.enter(+entry.value);
    entry.value = '';
};

equalsButton.onclick = function () {
    const operator = document.querySelector('input[type=radio]:checked');
    operationResult.innerText = operator === null ? 'Please choose an operation' : calculator.equals(operator.value);
};

resetButton.onclick = function () {
    calculator.reset();
    accumulator.innerText = '';
    operationResult.innerText = '';
};
