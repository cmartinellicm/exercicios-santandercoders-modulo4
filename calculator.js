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
    let history = new Map();

    const enter = (data) => {
        entries = [...entries, data];
        return `${entries.join(', ')}`;
    };

    const equals = (operator) => {
        return operation[operator](entries);
    };

    // const list = () => {
    //     return history;
    // };

    const reset = () => {
        entries = [];
        // return 'Calculator history erased!';
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
    operationResult.innerText = calculator.equals(operator.value);
};

resetButton.onclick = function () {
    calculator.reset();
    accumulator.innerText = '';
    operationResult.innerText = '';
};
