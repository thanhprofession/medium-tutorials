let maxUnique = require('./answer.js');

test('This function should return 3 if the array is [1, 1, 5, 5, 5, 6]', () => {
    expect(maxUnique([1, 1, 5, 5, 5, 6])).toBe(3);
});