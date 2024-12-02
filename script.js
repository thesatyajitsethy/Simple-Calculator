const screen = document.getElementById('screen');
const keys = document.querySelectorAll('.key');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';

function updateScreen(value) {
  screen.value = value;
}

function appendInput(value) {
  currentInput += value;
  updateScreen(currentInput);
}

clearButton.addEventListener('click', () => {
  currentInput = '';
  updateScreen('');
});

equalsButton.addEventListener('click', () => {
  try {
    currentInput = eval(currentInput).toString();
    updateScreen(currentInput);
  } catch (e) {
    currentInput = 'Error';
    updateScreen(currentInput);
  }
});

keys.forEach(key => {
  key.addEventListener('click', () => {
    const value = key.textContent;
    if (value !== '=') {
      appendInput(value);
    }
  });
});
