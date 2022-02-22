const { it, expect } = require('@jest/globals')
const reverseString = require('./task2.js')

it('should reverse a string', () =>{
    expect(reverseString('Francisco')).toBe('ocsicnarF')
})