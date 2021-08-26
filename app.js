// import functions
import { add } from './calculator.js';


// reference needed DOM elements

const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

// set event listeners 

addButton.addEventListener('click', () => {
    const num1 = Number(addNumber1.value);
    const num2 = Number(addNumber2.value);
    const result = add(num1, num2);
    addAnswer.textContent = result;
    

});



    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
