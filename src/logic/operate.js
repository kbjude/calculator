import Big from 'big.js';

const operate = (firstNumber, secondNumber, operation) => {
  const startNumber = Big(firstNumber);
  const endNumber = Big(secondNumber);
  let total = 0;

  switch (operation) {
    case '+':
      total = startNumber.plus(endNumber);
      break;

    case '-':
      total = startNumber.minus(endNumber);
      break;

    case 'x':
      total = startNumber.times(endNumber);
      break;
    case '%':
      total = startNumber.div(100);
      break;

    case '÷':
      if (endNumber === 0) {
        total = 'You cant divide a number by 0';
      } else {
        total = startNumber.div(endNumber);
      }
      break;

    default:
      break;
  }

  return total;
};

export default operate;
