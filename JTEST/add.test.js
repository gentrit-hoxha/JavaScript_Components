

const { expect } = require('@jest/globals');
const sum = require('./add');


test('properly adds two numbers', () => {
    expect(sum(1,2)).toBe(3);
});

test('Adds two large numbers', () => {
    expect(sum(100,50)).toBe(150);
})

