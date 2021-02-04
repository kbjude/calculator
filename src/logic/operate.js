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
        case '%':
            total = firstNumber.div(100);
            break;
        
        case '÷':
            if (secondNumber === 0){
                total = "You divide a number by 0"
            } else {
                total = firstNumber.div(secondNumber);
            break;        
            }
        
        default:
            break;
    }

    return total;
};

export default operate