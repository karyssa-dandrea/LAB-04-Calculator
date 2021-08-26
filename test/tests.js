// IMPORT MODULES under test here:
import { add } from '../calculator.js';

import { sub } from '../calculator.js';

import { mult } from '../calculator.js';

const test = QUnit.test;

// name your test by what it is testing
test('add two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const number1 = 7;
    const number2 = 3;
    const expected = 10;

    test('sub two numbers', (expect) => {
        //Arrange
        // Set up your arguments and expectations
        const number1 = 20;
        const number2 = 5;
        const expected = 15;

        test('mult two numbers', (expect) => {
            //Arrange
            // Set up your arguments and expectations
            const number1 = 3;
            const number2 = 4;
            const expected = 12;
    
    //Act 
    const result = add(number1, number2);
    // Call the function you're testing and set the result to a const
    const actual = result; // use your function here

    //Act 
    const result = sub(number1, number2);
    // Call the function you're testing and set the result to a const
    const actual = result; // use your function here

    //Act 
    const result = mult(number1, number2);
    // Call the function you're testing and set the result to a const
    const actual = result; // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

    expect.equal(actual, expected);

    expect.equal(actual, expected);
});
