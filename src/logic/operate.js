import Big from 'big.js';
const operate = (firstNumber, secondNumber, operation) => {
    const firstNumber = Big(firstNumber);
    const secondNumber = Big(secondNumber);
    let total = 0;

    switch (operation) {
        case '+':
            total = firstNumber.plus(secondNumber);
            break;

        case '-':
            total = firstNumber.minus(secondNumber);
            break;

        case 'x':
            total = firstNumber.times(secondNumber);
            break;
        case '-':
            total = firstNumber.minus(secondNumber);
            break;

    }
}