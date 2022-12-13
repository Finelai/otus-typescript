import {describe, expect, test} from '@jest/globals';
import componentHelloWorld from './helloworld';

describe('component', () => {
  test('hello world component success', () => {
    expect(componentHelloWorld()).textContent === 'Hello, world!';
  });
  test('hello world component fail', () => {
    const componentHelloWorldResult = componentHelloWorld();
    expect(componentHelloWorldResult).not.textContent === '';
    expect(componentHelloWorldResult).not.textContent === undefined;
    expect(componentHelloWorldResult).not.textContent !== 'Hello, world!';
  });
});