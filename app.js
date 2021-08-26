// import functions
import { add } from './calculator.js';
import { sub } from './calculator.js';

// reference needed DOM elements

const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const subNumber1 = document.getElementById('sub-number-1');
const subNumber2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');


// set event listeners 

addButton.addEventListener('click', () => {
    const num1 = Number(addNumber1.value);
    const num2 = Number(addNumber2.value);
    const result = add(num1, num2);
    addAnswer.textContent = result;
    

});

subButton.addEventListener('click', () => {
    const num1 = Number(subNumber1.value);
    const num2 = Number(subNumber2.value);
    const result = sub(num1, num2);
    subAnswer.textContent = result;
    

});



    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
