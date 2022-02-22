const { it, expect } = require('@jest/globals');
const calculator = require('./task3.js');


describe('add method test', () => {

    it('adding 2+2', () => {
        expect(calculator.add(2, 2)).toBe(4)
    })
    
    it('works with negative', () => {
        expect(calculator.add(-5, 2)).toBe(-3)
    })
    
    it('is not undefined', () => {
        expect(calculator.add(-5, 2)).not.toBe(undefined)
    })

})

describe('subtract method test', () => {

    it('subtracting 2-2', () => {
        expect(calculator.subtract(2, 2)).toBe(0)
    })
    
    it('works with negative', () => {
        expect(calculator.subtract(-5, 2)).toBe(-7)
    })
    
    it('is not undefined', () => {
        expect(calculator.subtract(-5, 2)).not.toBe(undefined)
    })

})

describe('divide method test', () => {

    it('dividing 4/2', () => {
        expect(calculator.divide(4, 2)).toBe(2)
    })
    
    it('works with negative', () => {
        expect(calculator.divide(-6, 2)).toBe(-3)
    })
    
    it('is not undefined', () => {
        expect(calculator.divide(-6, 2)).not.toBe(undefined)
    })

})

describe('multiply method test', () => {

    it('multiplying 4*2', () => {
        expect(calculator.multiply(4, 2)).toBe(8)
    })
    
    it('works with negative', () => {
        expect(calculator.multiply(-6, 2)).toBe(-12)
    })
    
    it('is not undefined', () => {
        expect(calculator.multiply(-6, 2)).not.toBe(undefined)
    })

})