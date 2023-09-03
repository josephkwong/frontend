const { default: TestRunner } = require("jest-runner");
const addFive = require('./addFive');  // ./ = in the same folder

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
});