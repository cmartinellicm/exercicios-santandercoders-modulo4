let calculator = (() => {
    const sum = (entries) => entries.reduce((acc, curr) => acc + curr);
    const subtract = (entries) => entries.reduce((acc, curr) => acc - curr);
    const multiply = (entries) => entries.reduce((acc, curr) => acc * curr);
    const divide = (entries) => entries.reduce((acc, curr) => acc / curr).toFixed(4);

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
        if (entries.length > 1) {
            const operationLog = entries.join(` ${operator} `);
            const result = operation[operator](entries);

            return result === Infinity ? `${operationLog} = Cannot divide by zero` : `${operationLog} = ${result}`;
        }
    };

    const resetAcc = () => {
        entries = [];
    };

    return { enter, equals, resetAcc };
})();
