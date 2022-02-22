const { it, expect } = require("@jest/globals");
const capitalize = require('./task4.js')

it('first character is capitalized', () => {
    expect(capitalize('francisco').charAt(0)).toBe('F')
})