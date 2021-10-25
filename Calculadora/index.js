const enterButton = document.querySelector('button#enter');
const equalsButton = document.querySelector('button#equals');
const resetAccButton = document.querySelector('button#resetAcc');
const resetHistoryButton = document.querySelector('button#resetHistory');

const accumulator = document.querySelector('span#acc');
const operationResult = document.querySelector('span#result');
const historyList = document.querySelector('ul#historyList');

enterButton.onclick = function () {
    const entry = document.querySelector('input#entry');

    accumulator.innerText = entry.value === '' ? 'Invalid entry!' : calculator.enter(+entry.value);
    entry.value = '';
};

equalsButton.onclick = function () {
    const operator = document.querySelector('input[type=radio]:checked');

    if (operator === null) {
        operationResult.innerText = 'Please choose an operation';
    } else {
        const currentOperation = calculator.equals(operator.value);

        if (currentOperation) {
            operationResult.innerText = currentOperation;
            updateHistory(currentOperation);
        } else {
            operationResult.innerText = 'Please insert at least 2 numbers in accumulator';
        }
        operator.checked = false;
    }
};

resetAccButton.onclick = function () {
    calculator.resetAcc();
    accumulator.innerText = '';
    operationResult.innerText = '';
};

resetHistoryButton.onclick = function () {
    historyList.innerText = '';
    accumulator.innerText = '';
    operationResult.innerText = '';
};

function updateHistory(currentOperation) {
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(`${currentOperation}`));
    historyList.appendChild(li);
}
