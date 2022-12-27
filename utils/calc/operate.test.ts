import {describe, expect, test} from '@jest/globals';
import { operate } from './operate';

describe('test calculator main operations', () => {
  test('sum of two', () => {
    expect(operate('2+3')).toBe('5');
  });
});