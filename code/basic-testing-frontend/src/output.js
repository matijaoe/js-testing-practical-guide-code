export function generateResultText(result) {
  let resultText = ''
  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.'
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result
  }
  return resultText
}

export function outputResult(result) {
  const resultText = generateResultText(result)
  output.textContent = resultText
}

// Test cases for generateResultText
it.each([1, 'invalid', false])('should return a string for %p', (input) => {
  const result = generateResultText(input);
  expect(result).toBeTypeOf('string');
});

it('should return "Result: [value]" for any other non-handled input', () => {
  const result = 'hello';
  const resultText = generateResultText(result);
  expect(resultText).toBe('Result: hello');
});

it('should return "Result: undefined" when result is undefined', () => {
  const resultText = generateResultText(undefined);
  expect(resultText).toBe('Result: undefined');
});

it('should return "Result: null" when result is null', () => {
  const resultText = generateResultText(null);
  expect(resultText).toBe('Result: null');
});

it('should return a string that contains the calculation result if a number is provided as a result', () => {
  const result = 5;
  const resultText = generateResultText(result);
  expect(resultText).toBe(`Result: ${result}`);
});
