import {describe, expect, test} from '@jest/globals';
import { operate } from './operate';

describe('test calculator main operations', () => {
  test('sum of two', () => {
    expect(operate('2+3')).toBe('5');
  });
  test('calc big numbers', () => {
    expect(operate('272+2*4')).toBe('280');
  });
  test('minus operations', () => {
    expect(operate('4*3-112')).toBe('-100');
  });
});