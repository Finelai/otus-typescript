/**
 * @func operate - take string to calculate and return result
 */

export const operate = (calcValue: string): string => {
  const supportedOperations = ['+', '-', '*', '/'];
  const trimmedCalcVal = calcValue.replace(/ /g, '');

  if (trimmedCalcVal !== '') {
    return trimmedCalcVal;
  }

  return `Type something to calculate. Supported operations: ${supportedOperations.join(' ')}`;
};