
// get the element with class counter-element
const counterElement = document.querySelector('.counter-element');

// get the element with class increment-button
const incrementButton = document.querySelector('.btn-increment');

// get the element with class decrement-button
const decrementButton = document.querySelector('.btn-decrement');

// get the element with class reset-button
const resetButton = document.querySelector('.btn-reset');

// set the initial values
let count = 0;
let resetValue = 0;

// update the counter element with the current count value
counterElement.textContent = count;

// increment the count value by 1
incrementButton.addEventListener('click', () => {
  count++;
  counterElement.textContent = count;
});

// decrement the count value by 1
decrementButton.addEventListener('click', () => {
  count--;
  counterElement.textContent = count;
});

// reset the count value to 0
resetButton.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = resetValue;
});