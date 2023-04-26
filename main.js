let equal_pressed = 0;

// i can access all buttons without C and DEL
let buttonInput = document.querySelectorAll('.button-input');

// i can access input, equal, clear-all, clear-element
let input = document.getElementById('input');
let equal = document.getElementById('equals');
let clearAll = document.getElementById('clear-all');
let clearElement = document.getElementById('clear-element');

window.onload = () => {
  input.value = '';
};

//Access each class using forEach
buttonInput.forEach((button_id) => {
  button_id.addEventListener('click', () => {
    if (equal_pressed == 1) {
      input.value = '';
      equal_pressed = 0;
    }
    //display text content of each button
    input.value += button_id.value;
  });
});

//Solve the user's input when clicked on equal sign
equal.addEventListener('click', () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    //evaluate user's input
    let solution = eval(inp_val);
    //True for natural numbers
    //false for decimals
    if (Number.isInteger(solution)) {
      input.value = solution;
      console.log(solution);
    } else {
      input.value = solution.toFixed(1);
      console.log(solution);
    }
  } catch (err) {
    //If user has entered invalid input
    alert('Invalid Input');
  }
});

//Clear Whole Input
clearAll.addEventListener('click', () => {
  input.value = '';
  console.log(clearAll);
});
//Erase Single Digit
clearElement.addEventListener('click', () => {
  input.value = input.value.substr(0, input.value.length - 1);
  console.log(clearElement);
});
