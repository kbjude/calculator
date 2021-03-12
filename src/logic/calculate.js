// import { string, number } from 'prop-types';
import operate from './operate';

const Calculate = (buttonName, data) => {
  let { total, next, operation } = data;
  const symbolOperations = ['x', '+', '-', '÷', '%', '='];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '%':
      if (next == null) {
        next = String(total / 100);
      } else {
        next = String(next / 100);
      }
      break;

    case 'x':
      total *= next;
      break;
    case '.':
      if (!next.includes('.')) {
        next += '.';
      }
      break;
    default:
      break;
  }
  if (symbolOperations.includes(buttonName)) {
    if (operation !== null) {
      total = String(operate(total, next, operation));
      next = null;
    } else if (next != null) {
      total = next;
      next = null;
    }

    if (buttonName !== '=') {
      operation = buttonName;
    } else {
      operation = null;
    }
  }

  if (numbers.includes(buttonName)) {
    if (next != null) {
      next += buttonName;
    } else {
      next = buttonName;
    }
  }

  const Calculator = {
    total,
    next,
    operation,
  };
  return Calculator;
};

export default Calculate;
