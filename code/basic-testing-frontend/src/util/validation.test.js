import { expect } from 'vitest'
import { it } from 'vitest'
import { describe } from 'vitest'
import { validateNumber, validateStringNotEmpty } from './validation'

describe('validateStringNotEmpty()', () => {
	it('should not throw error for non-empty string', () => {
		const input = 'valid'
		const result = () => validateStringNotEmpty(input)
		expect(result).not.toThrow()
	})

	it('should throw error for empty string', () => {
		const input = ''
		const result = () => validateStringNotEmpty(input)
		expect(result).toThrow(/must not be empty/)
	})

	it('should throw error for string with only whitespace', () => {
		const input = '   '
		const result = () => validateStringNotEmpty(input)
		expect(result).toThrow(/must not be empty/)
	})

	it.each([
		['number', 1],
		['object', {}],
		['array', []],
		['undefined', undefined],
		['null', null],
		['boolean true', true],
		['boolean false', false],
	])('should throw error for %s', (_, input) => {
		const result = () => validateStringNotEmpty(input)
		expect(result).toThrow()
		expect(result).not.toThrow(/must not be empty/)
	})
})

describe('validateNumber()', () => {
	it.each([
		['positive integer', 1],
		['negative integer', -1],
		['zero', 0],
		['decimal', 1.5],
	])('should not throw error for %s', (_, input) => {
		const result = () => validateNumber(input)
		expect(result).not.toThrow()
	})

	it.each([
		['positive', '1'],
		['negative', '-1'],
		['zero', '0'],
		['decimal', '1.5'],
	])('should throw error for %s numeric string', (_, input) => {
		const result = () => validateNumber(input)
		expect(result).toThrow()
	})

	it.each([
		['null', null],
		['empty array', []],
		['true', true],
		['false', false],
	])('should throw error for coercible value: %s', (_, input) => {
		const result = () => validateNumber(input)
		expect(result).toThrow()
	})

	it.each([
		['non-numeric string', 'abc'],
		['undefined', undefined],
		['NaN', NaN],
		['object', {}],
		['mixed string', '123abc'],
	])('should throw error for %s', (_, input) => {
		const result = () => validateNumber(input)
		expect(result).toThrow('Invalid number input')
	})
})
