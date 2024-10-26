import { it } from 'vitest'
import { describe } from 'vitest'
import { transformToNumber } from './numbers'
import { expect } from 'vitest'

describe('transformToNumber()', () => {
	it('should return value of type number', () => {
		const input = '1'
		const res = transformToNumber(input)
		expect(res).toBeTypeOf('number')
	})

	it('should transform numeric string to number', () => {
		const input = '1'
		const res = transformToNumber(input)
		expect(res).toBe(1)
	})

	it('should preserve number input', () => {
		const input = 1
		const res = transformToNumber(input)
		expect(res).toBe(1)
	})

	it('should transform negative numeric string to number', () => {
		const input = '-1'
		const res = transformToNumber(input)
		expect(res).toBe(-1)
	})

	it('should handle decimal numbers', () => {
		const input = '1.123'
		const res = transformToNumber(input)
		expect(res).toBe(1.123)
	})

	it('should handle zero', () => {
		const inputs = ['0', 0]
		inputs.forEach((input) => {
			const res = transformToNumber(input)
			expect(res).toBe(0)
		})
	})

	it('should yield NaN for non-transformable values', () => {
		const inputs = ['invalid', {}]
		inputs.forEach((input) => {
			const res = transformToNumber(input)
			expect(res).toBeNaN()
		})
	})

	it('should yield NaN if a partly numeric string is provided', () => {
		const input = '123abc'
		const res = transformToNumber(input)
		expect(res).toBeNaN()
	})

	it('should yield NaN if nothing is provided', () => {
		const res = transformToNumber()
		expect(res).toBeNaN()
	})

	it('should yield NaN if NaN is provided', () => {
		const input = NaN
		const res = transformToNumber(input)
		expect(res).toBeNaN()
	})
})
