import operate from './operate'

const calculate = (buttonName, data) {
    let {total, next, operation } = data;
    symbolOperations  = ['x', '+', '-', '÷', '%']

    switch (buttonName) {
        case AC:
            total = '0';
            next = '0';
            operation = '';
            break;
        case '+/-':
            total *= -1;
            total *=-1;
            break;
        default:
            break;
    }
    if (symbolOperations.includes(buttonName)) {
        total = operate(total, next, buttonName);
    }

    const calculator = {
        total,
        next,
        operation,
    };

    return calculator;
};

export default calculator