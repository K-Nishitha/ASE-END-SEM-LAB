const display = document.getElementById('display');
let expression = '';

function updateDisplay() {
  display.value = expression || '0';
}

function calculate() {
  if (!expression) return;
  // Only allow calculator characters before evaluating the expression.
  if (!/^[0-9+*/.()\- ]+$/.test(expression)) {
    display.value = 'Invalid input';
    expression = '';
    return;
  }
  try {
    const result = Function(`"use strict"; return (${expression})`)();
    if (!Number.isFinite(result)) throw new Error('Invalid result');
    expression = String(result);
    updateDisplay();
  } catch {
    display.value = 'Error';
    expression = '';
  }
}

document.querySelector('.buttons').addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  const action = button.dataset.action;
  if (action === 'clear') {
    expression = '';
    updateDisplay();
  } else if (action === 'delete') {
    expression = expression.slice(0, -1);
    updateDisplay();
  } else if (action === 'calculate') {
    calculate();
  } else if (button.dataset.value !== undefined) {
    expression += button.dataset.value;
    updateDisplay();
  }
});
