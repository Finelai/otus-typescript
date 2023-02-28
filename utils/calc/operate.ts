/**
 * @func operate - take string to calculate and return result
 */

export const operate = (calcValue: string): string => {
  const supportedOperations: Array<string> = ['*', '/', '+', '-'];
  let trimmedCalcVal: string = calcValue.trim();

  function doOperate(operator: string, n1: number, n2: number) {
    switch(operator) {
      case '*': return n1 * n2;
      case '/': return n1 / n2;
      case '-': return n1 - n2;
      case '+': return n1 + n2;
    }

    return 0;
  }

  if (trimmedCalcVal !== '') {
    for (let i = 0; i < supportedOperations.length; i++) {
      for (let v = 0; v < trimmedCalcVal.length; v++) {
        if (supportedOperations[i] === trimmedCalcVal[v]) {
          const operateToChange: string = trimmedCalcVal.slice(trimmedCalcVal[v - 1], trimmedCalcVal[v + 1]);
          const operateResult: number = doOperate(supportedOperations[i], parseInt(trimmedCalcVal[v - 1]), parseInt(trimmedCalcVal[v + 1]));
          trimmedCalcVal = trimmedCalcVal.replace(operateToChange, operateResult.toString());
        }
      }
    }

    return trimmedCalcVal;
  }

  return `Type something to calculate. Supported operations: ${supportedOperations.join(' ')}`;
};