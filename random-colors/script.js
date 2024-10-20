// to cache an element, you can use different means like getelementbyid or queryselector.
const button = document.getElementById('colorButton');

// if you were to use queryselector, you would use the following code:
// const button = document.querySelector('#colorButton');
// the # symbol is used to select an element by its id.
// the . symbol is used to select an element by its class.

//----------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------//

// add an event listener to the button
// the event listener listens for a click event
// when the button is clicked, the callback function is executed
// a callback function is a function that is passed as an argument to another function
button.addEventListener('click', function() {

  // generate a random color
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

  // set the background color of the body to the random color
  document.body.style.backgroundColor = randomColor;
});

//----------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------//

// instead of using a callback function, you can use an arrow function
// an arrow function is a shorter way to write a function
// the arrow function syntax is () => {}

// button.addEventListener('click', () => {
//   const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//   document.body.style.backgroundColor = randomColor;
// });


//----------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------//

// you could also assign it to a method and pass the method as an argument to the event listener
// const changeColor = () => {
//   const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//   document.body.style.backgroundColor = randomColor;
// }

// button.addEventListener('click', changeColor);