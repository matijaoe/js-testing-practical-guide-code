import { it, expect } from 'vitest'
import { add } from './math'

it('should sum all numbers in an array', () => {
	// Arrange
	const numbers = [1, 2, 3]

	// Act
	const result = add(numbers)

	// Assert
	const expectedResult = numbers.reduce((sum, num) => sum + num, 0)
	expect(result).toBe(expectedResult)
})
