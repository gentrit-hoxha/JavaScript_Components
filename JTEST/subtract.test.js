
const { expect } = require('@jest/globals');
const subtract = require('./subtract');

test('should subtract numbers correctly', () => {
    expect(subtract(10,5)).toBe(5);
})
