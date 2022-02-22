const { expect, it } = require('@jest/globals')
const stringLength = require('./task1.js')

describe('stringLength', () => {

    it("function should return string length", () => {
        expect(stringLength('123')).toBe(3)
    })
    
    it("should at least 1 character long but no more than 10 characters", () => {
        expect(stringLength('1')).toBeGreaterThan(0);
        expect(stringLength('123456789')).toBeLessThan(10)
    })

})
