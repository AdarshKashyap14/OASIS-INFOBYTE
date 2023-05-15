// Select the elements
const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.buttons button');
const historyList = document.querySelector('.history ul');
const clearHistoryBtn = document.querySelector('.history button');

let history = [];

// Add event listener to the parent container to handle button clicks
document.querySelector('.buttons').addEventListener('click', (event) => {
  const button = event.target;

  if (button.tagName === 'BUTTON') {
    const buttonText = button.innerText;

    if (buttonText === 'C') {
      // Clear the display
      display.value = '';
    } else if (buttonText === 'CE') {
      // Clear the last character
      display.value = display.value.slice(0, -1);
    } else if (buttonText === '%') {
      // Evaluate the expression and divide by 100
      display.value = eval(display.value) / 100;
    } else if (buttonText === '=') {
      // Evaluate the expression
      const result = eval(display.value);
      display.value = result;
      history.push(display.value);
      updateHistory();
    } else {
      // Append the button's value to the display
      display.value += buttonText;
    }
  }
});

// Update the history list
function updateHistory() {
  // Clear the previous history
  historyList.innerHTML = '';

  // Add each entry to the history list
  history.forEach((entry, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${entry}`;
    historyList.appendChild(li);
  });
}

// Add event listener to the clear history button
clearHistoryBtn.addEventListener('click', () => {
  // Clear the history array
  history = [];

  // Update the history list
  updateHistory();
});
