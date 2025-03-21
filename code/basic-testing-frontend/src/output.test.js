import { describe, it, expect } from 'vitest';

import { generateResultText } from './output';

describe('generateResultText()', () => {
  it.each([1, 'invalid', false])('should return a string for %p', (input) => {
    const result = generateResultText(input);
    expect(result).toBeTypeOf('string');
  });

  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const result = 5;
    const resultText = generateResultText(result);
    expect(resultText).toBe(`Result: ${result}`);
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';

    const resultText = generateResultText(result);

    expect(resultText).toBe('');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';

    const resultText = generateResultText(result);

    expect(resultText).toContain('Invalid');
  });

  it('should return "Result: undefined" when result is undefined', () => {
    const resultText = generateResultText(undefined);
    expect(resultText).toBe('Result: undefined');
  });

  it('should return "Result: null" when result is null', () => {
    const resultText = generateResultText(null);
    expect(resultText).toBe('Result: null');
  });
});
