/**
 * @func operate - take string to calculate and return result
 */

export const operate = (calcValue: string): string => {
  const supportedOperations: Array<string> = ['*', '/', '+', '-'];
  let trimmedCalcVal: string = calcValue.trim();

  const isNumeric = (val: string): boolean => {
    return !isNaN(Number(val));
  }

  const doOperate = (operator: string, n1: number, n2: number): number => {
    switch(operator) {
      case '*': return n1 * n2;
      case '/': return n1 / n2;
      case '-': return n1 - n2;
      case '+': return n1 + n2;
    }

    return 0;
  }

  const returnNumbersBefore = (bodyPart: string, reversed = false): string => {
    let splittedBodyPart = bodyPart.split('');
    let result = '';
    let i = 0;

    if (reversed) {
      splittedBodyPart = splittedBodyPart.reverse();
    }

    while (isNumeric(splittedBodyPart[i])) {
      if (reversed) {
        result = splittedBodyPart[i] + result;
      } else {
        result += splittedBodyPart[i];
      }

      i++;
    }

    return result;
  }

  if (trimmedCalcVal !== '') {
    for (let i = 0; i < supportedOperations.length; i++) {
      for (let v = 0; v < trimmedCalcVal.length; v++) {
        if (supportedOperations[i] === trimmedCalcVal[v]) {
          const calcValSplitByOperations: Array<string> = trimmedCalcVal.split(supportedOperations[i]);
          const firstCalcVal = returnNumbersBefore(calcValSplitByOperations[0], true);
          const secondCalcVal = returnNumbersBefore(calcValSplitByOperations[1]);
          const operateToChange: string = firstCalcVal + supportedOperations[i] + secondCalcVal;
          const operateResult: number = doOperate(supportedOperations[i], parseInt(firstCalcVal), parseInt(secondCalcVal));
          trimmedCalcVal = trimmedCalcVal.replace(operateToChange, operateResult.toString());
        }
      }
    }

    return trimmedCalcVal;
  }

  return `Type something to calculate. Supported operations: ${supportedOperations.join(' ')}`;
};